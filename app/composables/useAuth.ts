import { auth, db } from '~/lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { userStore } from '@/stores/userStore'
import { doc, getDoc } from 'firebase/firestore'

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

  return {
    user,
    errorMsg,
    isLoading,
    signIn,
    setErrorMsg
  }
}