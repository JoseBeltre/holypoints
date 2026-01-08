<script lang="ts" setup>
defineProps<{
  name: string,
  points: number,
  img?: string
}>()
</script>
<template>
  <div class="rounded-box flex items-center p-2! px-4! gap-3 shadow-sm!">
    <div class="rounded-full overflow-hidden size-14">
      <img v-if="img" class="size-full" :src="img" :alt="'Foto de ' + name">
      <div v-else class="flex items-center justify-center size-full bg-gray-200 text-primary-600">
        <IconUserRound class="size-7" :stroke-width="1.5" />
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <h2 class="text-lg leading-5">{{ name }}</h2>
      <p class="leading-5 text-lg font-bold text-secondary-400 flex items-center gap-1">
        {{ points }}
        <IconHolypoint :size="18" :strokeWidth="1.5" />
      </p>
    </div>
    <button class="flex items-center justify-center gap-2 p-2 px-4 text-sm rounded-lg bg-primary-400/30 text-primary-600 ms-auto cursor-pointer hover:bg-primary-600 hover:text-white transition-colors">
      <IconDiff class="size-5" />
      Sumar puntos
    </button>
  </div>
</template>