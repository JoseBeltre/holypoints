<script lang="ts" setup>
defineProps<{
  name: string
  points: number
}>()
</script>
<template>
  <div class="flex justify-between items-center border-2 border-secondary-500 bg-secondary-100 rounded-xl p-4 text-xl relative cursor-pointer">
    <h2 class="text-[40px] font-jolly text-secondary-500 absolute -top-6 -left-3 rotate-12">#1</h2>
    <p class="text-secondary-600 font-medium ps-2">{{ name }}</p>
    <div class="font-bold flex items-center gap-1 ">
      <h2>{{ points }}</h2>
      <div class="relative size-5">
        <IconGem class="-rotate-10 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2" :size="20" fill="#fbbf24" stroke-width="1.5" />
        <IconGem class="-rotate-10 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2" :size="20" stroke-width="1.5" />
      </div>
    </div>
  </div>
</template>