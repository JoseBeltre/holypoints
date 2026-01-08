<script lang="ts" setup>
defineProps<{
  name: string
  points: number
}>()
</script>
<template>
  <NuxtLink to="/ranking" class="flex justify-between items-center border-2 border-secondary-500 bg-secondary-100 rounded-xl p-4 text-xl relative cursor-pointer">
    <h2 class="text-[40px] font-jolly text-secondary-500 absolute -top-6 -left-3 rotate-12">#1</h2>
    <p class="text-secondary-600 font-medium ps-2">{{ name }}</p>
    <div class="font-bold flex items-center gap-1 ">
      <h2>{{ points }}</h2>
      <IconHolypoint :size="20" :strokeWidth="1.5" />
    </div>
  </NuxtLink>
</template>