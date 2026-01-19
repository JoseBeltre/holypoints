import { auth } from '~/lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export function useAuth() {
  const user = ref<object | null>(null)
  const errorMsg = ref<string>('')
  const isLoading = ref<boolean>(false)
  
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
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user.value = userCredential.user
      console.log(user.value)
      navigateTo('/')
    })
    .catch((error) => {
      if (error.code === 'auth/invalid-credential') {
        setErrorMsg('Credenciales inválidas.')
      } else if (error.code === 'auth/invalid-email') {
        setErrorMsg('Correo electrónico inválido.')
      } else {
        setErrorMsg(`Error al iniciar sesión. Código: ${error.code}`)
      }
    })
    .finally(() => {
      isLoading.value = false
    })
  }

  return {
    user,
    errorMsg,
    isLoading,
    signIn,
    setErrorMsg
  }
}