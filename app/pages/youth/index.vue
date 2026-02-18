<script setup lang="ts">
import SkeletonContainer from '~/components/skeletons/SkeletonContainer.vue'
import YouthCardSkeleton from '~/components/skeletons/YouthCardSkeleton.vue'
import type { User } from '~/types/user'

definePageMeta({
  title: 'Jóvenes - Holypoints',
  middleware: 'auth'
})

const { isLoading, error, getAll } = useUsers()
const users = ref<User[]>([])
const isSumModalOpen = ref(false)


const handleSumModal = () => isSumModalOpen.value = !isSumModalOpen.value

onMounted(async () => {
  users.value = await getAll()
})

watch(isSumModalOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : 'auto'
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
        <YouthCard
          v-else
          v-for="user in users"
          :key="user.uid"
          :user="user"
          :sumPoints="handleSumModal"
        />
        <div v-if="error" class="text-red-500 text-center py-8">
          Error al cargar usuarios
        </div>
      </section>
    </main>
  </div>
  <Transition
    name="modal"
    :duration="{ enter: 250, leave: 150 }"
  >
    <SumPointsModal v-if="isSumModalOpen" :closeModal="handleSumModal" />
  </Transition>
</template>
<style>
.modal-enter-from .overlay {
  opacity: 0;
}

.modal-enter-active .overlay {
  transition: opacity 0.9s ease;
}

.modal-enter-to .overlay {
  opacity: 1;
}

.modal-enter-from .modal-content {
  opacity: 0;
  transform: translateY(1080px) scale(0.1);
}

.modal-enter-active .modal-content {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-enter-to .modal-content {
  opacity: 1;
  transform: translateY(0) scale(1);
}

</style>