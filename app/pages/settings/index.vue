<script setup lang="ts">
import SettingsButton from '~/components/SettingsButton.vue';
import Spinner from '~/components/Spinner.vue';

definePageMeta({
  title: 'Configuración - Holypoints',
  layout: 'default-no-padding',
  middleware: ['auth']
})
const { user } = userStore()

const auth = useAuth()
const { isLoading } = auth

const roleTitle = computed(() => {
  if (!user?.ministries) {
    return user?.email
  }
  let name = user?.ministries[0]?.ministryId
  name = name![0]!.toUpperCase() + name!.slice(1)
  let role = user.ministries[0]?.role
  role = role![0]!.toUpperCase() + role!.slice(1)
  return role + ' de ' + name
})

</script>
<template>
  <div class="bg-linear-to-b from-primary-600 to-primary-700">
    <header class="h-36 relative text-white">
      <h1 class="page-title m-0! pt-10 text-center">Configuración</h1>
      <div class="size-28 overflow-hidden rounded-full absolute -bottom-14 left-1/2 -translate-x-1/2">
        <img v-if="user?.photoUrl" class="size-full object-cover"  :src="user?.photoUrl" :alt="'Photo of ' + user?.photoUrl">
        <DefaultImg v-else />
      </div>
    </header>
    <main class="bg-gray-50 h-[calc(100dvh-144px)] p-4 rounded-t-2xl pt-14 flex flex-col gap-4 pb-24">
      <div class="text-center leading-2">
        <h2 class="font-bold text-xl text-primary-600">{{ user?.firstName + ' ' + user?.lastName }}</h2>
        <p class="text-black/60">{{ roleTitle }}</p>
      </div>
      <section class="grid gap-2">
        <SettingsButton to="/">
          Editar Perfil
        </SettingsButton>
        <SettingsButton to="/settings/logs" >
          Registro / Logs
        </SettingsButton>
        <SettingsButton @click="auth.logOut" color="red">
          <Spinner v-if="isLoading" />
          <span v-else>Cerrar sesión</span>
        </SettingsButton>
      </section>
    </main>
  </div>
</template>