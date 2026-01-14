<script setup lang="ts">
import SettingsButton from '~/components/SettingsButton.vue';

definePageMeta({
  layout: 'default-no-padding'
})
useHead({
  title: 'Configuración - Holypoints',
})

const user = {
  name: 'Juan Carlos Ramos',
  role: 'Sub-director de Jóvenes',
  img: 'https://i.pravatar.cc/150?img=3'
}
</script>
<template>
  <div class="bg-linear-to-b from-primary-600 to-primary-700">
    <header class="h-36 relative text-white">
      <h1 class="page-title m-0! pt-10 text-center">Configuración</h1>
      <div class="size-28 overflow-hidden rounded-full absolute -bottom-14 left-1/2 -translate-x-1/2">
        <img v-if="user.img" class="size-full object-cover"  :src="user.img" :alt="'Photo of ' + user.name">
        <DefaultImg v-else />
      </div>
    </header>
    <main class="bg-gray-50 h-[calc(100dvh-144px)] p-4 rounded-t-2xl pt-14 flex flex-col gap-4 pb-24">
      <div class="text-center leading-2">
        <h2 class="font-bold text-xl text-primary-600">{{ user.name }}</h2>
        <p class="text-black/60">{{ user.role }}</p>
      </div>
      <section class="grid gap-2">
        <SettingsButton to="/">
          Editar Perfil
        </SettingsButton>
        <SettingsButton>
          Registro / Logs
        </SettingsButton>
        <SettingsButton color="red">
          Cerrar Sesión
        </SettingsButton>
      </section>
    </main>
  </div>
</template>