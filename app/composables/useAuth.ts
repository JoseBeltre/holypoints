import { auth, db } from "~/lib/firebase"
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import type { User } from "~/types/user"

export function useAuth() {
  const user = ref<object | null>(null)
  const errorMsg = ref<string>("")
  const isLoading = ref<boolean>(false)
  const store = userStore()

  const setErrorMsg = (msg: string) => {
    errorMsg.value = msg
    setTimeout(() => {
      errorMsg.value = ""
    }, 5000)
  }

  const signIn = async (email: string, password: string) => {
    isLoading.value = true
    if (!email || !password) {
      setErrorMsg("Por favor, complete todos los campos.")
      isLoading.value = false
      return
    }

    try {
      await signInWithEmailAndPassword(auth, email, password)
      // Espera el próximo disparo de onAuthStateChanged directamente
      await new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => {
          unsubscribe()
          reject(new Error("auth/timeout"))
        }, 20000)

        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
          if (!firebaseUser) return

          unsubscribe()
          clearTimeout(timeout)

          try {
            const userRef = doc(db, "users", firebaseUser.uid)
            const userSnapshot = await getDoc(userRef)

            if (userSnapshot.exists()) {
              store.setUser({
                uid: firebaseUser.uid,
                ...userSnapshot.data(),
              } as User)
            } else {
              store.setUser(null)
            }
          } catch (e) {
            store.setUser(null)
          }

          resolve()
        })
      })

      navigateTo("/")
    } catch (error: any) {
      if (error.message === "auth/timeout") {
        setErrorMsg("Tiempo de espera agotado. Verifica tu conexión.")
      } else if (error.code === "auth/invalid-credential") {
        setErrorMsg("Credenciales inválidas.")
      } else if (error.code === "auth/invalid-email") {
        setErrorMsg("Correo electrónico inválido.")
      } else {
        setErrorMsg(`Error al iniciar sesión. Código: ${error.code}`)
      }
    } finally {
      isLoading.value = false
    }
  }

  const logOut = async () => {
    isLoading.value = true
    try {
      await signOut(auth)
      store.setUser(null)
      navigateTo("/login")
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    user,
    errorMsg,
    isLoading,
    signIn,
    setErrorMsg,
    logOut,
  }
}
