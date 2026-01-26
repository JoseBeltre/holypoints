<script setup lang="ts">
import { userStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'
import SkeletonContainer from '~/components/skeletons/SkeletonContainer.vue'
definePageMeta({
  title: 'Inicio - Holypoints',
  middleware: 'auth'
})
const store = userStore()
const { user } = storeToRefs(store)
const { totalUsers, isLoading } = useUsers()
const cantUsers = await totalUsers()

</script>
<template>
  <div>
    <nav class="flex justify-end w-full gap-2 tracking-tighter">
      <h3 class="font-bold text-primary-600">{{ user?.firstName }}</h3>
    </nav>
    <!-- Texto de bienvenido dinamico -->
    <header>
      <h1 class="m-0! page-title">Bienvenido</h1>
      <p class="page-subtitle">Aquí un resumen de tus jóvenes 👇</p>
    </header>
    <main class="grid gap-4 mt-3">
      <!-- Cards de resumen -->
      <div class="grid gap-4">
        <KpiCard :stat="3000" text="Holypoints Reclamados">
          <template #icon>
            <IconGem :size="192" class="absolute" stroke-width=".8" fill="#ffffff" />
            <IconGem :size="192" class="absolute" stroke-width=".8" />
          </template>
        </KpiCard>
        <SkeletonContainer v-if="isLoading" />
        <KpiCard v-else :stat="cantUsers" text="Jovenes Participando" class-name="!bg-primary-600">
          <template #icon>
            <IconUserRound :size="192" class="absolute" stroke-width=".8" fill="#ffffff" />
          </template>
        </KpiCard>
      </div>
      <!-- Atajos -->
      <div class="rounded-box">
        <h2 class="text-primary-600 font-bold text-2xl mb-2">Atajos</h2>
        <div class="grid gap-2">
          <NuxtLink to="/youth" class="shortcut-btn">
            <IconGem stroke-width="1.2" />
            Sumar Holypoints
          </NuxtLink>
          <NuxtLink to="/youth/add" class="shortcut-btn">
            <IconUserRoundPlus stroke-width="1.2" />
            Registrar Joven
          </NuxtLink>
        </div>
      </div>
      <!-- Líder en Holypoints -->
      <div class="rounded-box">
        <h2 class="text-secondary-500 font-bold text-2xl mb-2">Líder en Holypoints</h2>
        <TopYouth name="Noel Rodriguez" :points="421" />
      </div>
    </main>
  </div>
</template>
