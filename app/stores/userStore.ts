import type { User } from '~/types/user'

export const userStore = defineStore('userStore', () => {
  const user = ref<User | null>(null)

  const setUser = (userInfo: User | null) => {
    user.value = userInfo
  }
  return { user, setUser }
})