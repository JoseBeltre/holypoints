import { auth, db } from '~/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { userStore } from '~/stores/userStore'
import { doc, getDoc } from 'firebase/firestore'
import type { User } from '~/types/user'

export default defineNuxtPlugin(() => {
  const store = userStore()

  onAuthStateChanged(auth, async (firebaseUser) => {
    if (!firebaseUser) {
      store.setUser(null)
    }

    const userRef = doc(db, 'users', firebaseUser!.uid)
    const userSnapshot = await getDoc(userRef)
    
    if (!userSnapshot.exists()) {
      store.setUser(null)
      return
    }

    const user: unknown = {
      uid: firebaseUser!.uid,
      ...userSnapshot.data()
    }

    store.setUser(user as User)
  })
})