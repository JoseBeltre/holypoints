defineNuxtRouteMiddleware(() => {
  const store = userStore()

  if (store.user !== null || store.user !== undefined){
    return navigateTo('/')
  }
})