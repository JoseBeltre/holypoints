<script setup lang="ts">
import AdventistasLogo from '@/assets/images/isotipo_adventistas_logo.png'
import JALogo from '@/assets/images/ja_logo.png'

</script>
<template>
  <div class="bg-primary-600 min-h-screen flex flex-col items-center justify-center text-white">
    <div class="flex gap-3">
      <img :src="AdventistasLogo" alt="Adventistas Logo">
      <img :src="JALogo" alt="JA Logo">
    </div>
    <h1 class="font-jolly text-8xl">Jóvenes M2</h1>
    <p class="tracking-tight font-light text-white/80">Sistema para el manejo de los <span class="font-bold text-secondary-400">Holypoints</span></p>
    <form class="grid gap-5 mt-6" action="">
      <div class="flex flex-col gap-1">
        <label class="login-lbl" for="username">Usuario</label>
        <input class="login-input" type="text" id="username">
      </div>
      <div class="flex flex-col gap-1">
        <label class="login-lbl" for="password">Contraseña</label>
        <input class="login-input" type="password" id="password">
      </div>
      <button class="login-btn" type="submit">Entrar</button>
    </form>
    <p class="tracking-tight font-light text-white/80">Solo dirigentes pueden acceder <span class="text-secondary-400">😉</span></p>
  </div>
</template>