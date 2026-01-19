<script setup lang="ts">
import AdventistasLogo from '@/assets/images/isotipo_adventistas_logo.png'
import JALogo from '@/assets/images/ja_logo.png'

definePageMeta({
  layout: false
})
useHead({
  title: 'Iniciar Sesión - Holypoints'
})

const email = ref<string>('')
const password = ref<string>('')
const { signIn, errorMsg, isLoading } = useAuth()

const handleSubmit = () => {
  signIn(email.value, password.value)
}
</script>
<template>
  <div class="bg-primary-600 min-h-dvh flex flex-col items-center justify-center text-white p-5">
    <div class="flex gap-3">
      <img :src="AdventistasLogo" alt="Adventistas Logo">
      <img :src="JALogo" alt="JA Logo">
    </div>
    <h1 class="font-jolly text-8xl">Jóvenes M2</h1>
    <p class="tracking-tight font-light text-white/80">Sistema para el manejo de los <span class="font-bold text-secondary-400">Holypoints</span></p>
    <form class="grid place-content-center gap-4 mt-6 w-86" @submit.prevent="handleSubmit">
      <div class="flex flex-col gap-1">
        <label class="login-lbl" for="email">Correo electrónico</label>
        <input class="login-input" type="email" id="email" v-model="email" required>
      </div>
      <div class="flex flex-col gap-1">
        <label class="login-lbl" for="password">Contraseña</label>
        <input class="login-input" type="password" id="password" v-model="password" required>
      </div>
      <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>
      <button class="login-btn" type="submit">
        <Spinner v-if="isLoading" class="border-black/30!"/>
        <span v-else>Entrar</span>
      </button>
    </form>
    <p class="tracking-tight font-light text-white/80">Solo dirigentes pueden acceder <span class="text-secondary-400">😉</span></p>
  </div>
</template>