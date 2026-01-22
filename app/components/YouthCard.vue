<script lang="ts" setup>
import type { User } from '~/types/user';
const props = defineProps<{
  user: User
}>()

const fullName = computed(() => {
  return props.user.firstName.split(' ')[0] + ' ' + props.user.lastName?.split(' ')[0]
})
</script>
<template>
  <div class="rounded-box flex items-center p-2! px-4! gap-3 shadow-sm!">
    <div class="rounded-full overflow-hidden size-14">
      <img v-if="user.photoUrl" class="size-full" :src="user.photoUrl" :alt="'Foto de ' + user.firstName">
      <DefaultImg v-else />
    </div>
    <div class="flex flex-col justify-center">
      <h2 class="leading-5">{{ fullName }}</h2>
      <p class="leading-5 font-bold text-secondary-400 flex items-center gap-1">
        {{ '' }}
        <IconHolypoint :size="18" :strokeWidth="1.5" />
      </p>
    </div>
    <button class="flex items-center justify-center gap-2 p-2 px-4 text-sm rounded-lg bg-primary-400/30 text-primary-600 ms-auto cursor-pointer hover:bg-primary-600 hover:text-white transition-colors">
      <IconDiff class="size-5" />
      Sumar puntos
    </button>
  </div>
</template>