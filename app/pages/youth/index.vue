<script setup lang="ts">
import SkeletonContainer from '~/components/skeletons/SkeletonContainer.vue'
import YouthCardSkeleton from '~/components/skeletons/YouthCardSkeleton.vue'
import type { User } from '~/types/user'

useHead({
  title: 'Jóvenes - Holypoints'
})

const { isLoading, error, getAll } = useUsers()
const users = ref<User[]>([])

onMounted(async () => {
  users.value = await getAll()
})
</script>

<template>
  <div>
    <header class="mb-2">
      <h1 class="page-title">Jóvenes Mansos</h1>
      <p class="page-subtitle">Administra los jóvenes de Mansedumbre desde aquí</p>
    </header>
    
    <main class="grid gap-3">
      <section class="flex gap-3 w-full">
        <SkeletonContainer v-if="isLoading" />
        <SmallSummaryCard v-else isLogged :stat="users.length">
          <IconUserRound class="size-full" fill="#ffffff" stroke-width="1" />
        </SmallSummaryCard>
        <AddButton to="/youth/add" >Registrar Joven</AddButton>
      </section>
      <SearchBar />
      <section class="grid gap-2">
        <YouthCardSkeleton v-if="isLoading" v-for="none in 3" />
        <YouthCard v-else v-for="user in users" :key="user.uid" :user="user" />
        <div v-if="error" class="text-red-500 text-center py-8">
          Error al cargar usuarios
        </div>
      </section>
    </main>
  </div>
</template>