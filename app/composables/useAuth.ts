import { auth } from '~/lib/firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'


export function useAuth() {
  const user = ref<object | null>(null)
  const errorMsg = ref<string>('')
  const isLoading = ref<boolean>(false)
  const store = userStore()
  
  const setErrorMsg = (msg: string) => {
    errorMsg.value = msg
    setTimeout(() => {
      errorMsg.value = ''
    }, 5000)
  }

  const signIn = async (email: string, password: string) => {
    isLoading.value = true
    if (!email || !password) {
      setErrorMsg('Por favor, complete todos los campos.')
      isLoading.value = false
      return
    }

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigateTo('/')
    } catch (error: any) {
      if (error.code === 'auth/invalid-credential') {
        setErrorMsg('Credenciales inválidas.')
      } else if (error.code === 'auth/invalid-email') {
        setErrorMsg('Correo electrónico inválido.')
      } else {
        setErrorMsg(`Error al iniciar sesión. Código: ${error.code}`)
      }
      isLoading.value = false
    }
  }

  const logOut = async () => {
    isLoading.value = true
    try {
      await signOut(auth)
      store.setUser(null)
      navigateTo('/login')
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
    logOut
  }
}