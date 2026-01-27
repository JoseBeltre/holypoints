import { addDoc, collection, getCountFromServer, getDocs, query, serverTimestamp, Timestamp, where } from 'firebase/firestore'
import { ZodError } from 'zod'
import { db } from '~/lib/firebase'
import { validateUserSchema } from '~/schemas/users'
import type { User } from '~/types/user'

interface newUser {
  firstName: string,
  lastName: string,
  email?: string,
  phoneNumber?: string,
  address?: string,
  birthDate: string
}

export function useUsers() {
  const isLoading = ref<boolean>(false)
  const error = ref<string>('')
  const { user } = userStore()

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
      setErrorMsg(err.message)
    } finally {
      isLoading.value = false
    }
    return []
  }

  const createUser = async (newUser: newUser) => {
    isLoading.value = true
    try {
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        birthDate
      } = newUser

      if (email) {
        let q = query(
          collection(db, 'users'),
          where('email', '==', email)
        )
        const snap = await getDocs(q)
        console.log(snap.docs)
        if (snap.docs.length !== 0) {
          throw new Error("Email ya existe.");
        }
      }

      const result = await validateUserSchema({
        createdBy: user?.uid,
        ...newUser
      })
      
      const cleanedUser = removeUndefined(result)
      

      const newUserRef = await addDoc(collection(db, 'users'), {
        ...cleanedUser,
        points: {
          jovenes: 0,
          conquistadores: 0,
          guias: 0
        },
        active: true,
        createdAt: serverTimestamp(),
      })

      return newUserRef
    } catch (e) {
      if (e instanceof ZodError) {
        const message = e.issues[0]?.message as string
        setErrorMsg(message)
        return
      }
      if (e instanceof Error) {
        setErrorMsg(e.message)
        return
      } 
    } finally {
      isLoading.value = false
    }
  }

  const setErrorMsg = (msg: string) => {
    error.value = msg
    setTimeout(() => {
      error.value = ''
    }, 5000)
  }

  const totalUsers = async () => {
    isLoading.value = true
    try {
      const snap = await getCountFromServer(collection(db, 'users'))
      return snap.data().count
    } catch (e) {
      const err = e as Error
      console.error('Error al obtener el total de jovenes: ', err.message)
      setErrorMsg(err.message)
    } finally {
      isLoading.value = false
    }
  }

  return {
    getAll,
    isLoading,
    error,
    createUser,
    setErrorMsg,
    totalUsers
  }
}