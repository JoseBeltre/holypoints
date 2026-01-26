// plugins/firebase-auth.client.ts
import { auth, db } from '~/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { userStore } from '~/stores/userStore'
import { doc, getDoc } from 'firebase/firestore'
import type { User } from '~/types/user'

export default defineNuxtPlugin(() => {
  const store = userStore()
  
  // Promesa que se resuelve cuando Firebase está listo
  const authReady = new Promise<void>((resolve) => {
    onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        store.setUser(null)
        console.log('El usuario no está logueado en Firebase')
        resolve() // Resuelve aunque no haya usuario
        return
      }

      try {
        const userRef = doc(db, 'users', firebaseUser.uid)
        const userSnapshot = await getDoc(userRef)
        
        if (!userSnapshot.exists()) {
          store.setUser(null)
          console.log('El usuario no existe en Firestore')
          resolve()
          return
        }

        const user: User = {
          uid: firebaseUser.uid,
          ...userSnapshot.data()
        } as User

        console.log('Usuario cargado correctamente:', user)
        store.setUser(user)
        resolve() // Resuelve cuando el usuario está cargado
      } catch (error) {
        console.error('Error al cargar usuario:', error)
        store.setUser(null)
        resolve() // Resuelve aunque haya error
      }
    })
  })

  return {
    provide: {
      authReady // Exponemos la promesa
    }
  }
})