export default defineNuxtRouteMiddleware(async () => {
  const store = userStore()
  const { $authReady } = useNuxtApp()
  await $authReady
  if (store.user){
    return navigateTo('/')
  }
})