export default defineNuxtRouteMiddleware(() => {
  const store = userStore()

  if (store.user){
    return navigateTo('/')
  }
})