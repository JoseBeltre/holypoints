import { collection, getDocs } from 'firebase/firestore'
import { db } from '~/lib/firebase'
import type { User } from '~/types/user'


export function useUsers() {
  const isLoading = ref<boolean>(false)
  const error = ref<string>('')

  const getAll =  async (): Promise<User[]> => {
    isLoading.value = true
    try {
      const usersRef = collection(db, 'users')
      const snapshot = await getDocs(usersRef)

      const users =  snapshot.docs.map((doc) => {
        const data = doc.data() as User

        return {
          id: doc.id,
          ...data
        }
      })

      return users
    } catch (e) {
      const err = e as Error
      console.error('Error al cargar usuarios:', e)
      error.value = err.message
    } finally {
      isLoading.value = false
    }
    return []
  }

  return {
    getAll,
    isLoading,
    error
  }
}