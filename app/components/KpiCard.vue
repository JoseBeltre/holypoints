<script setup lang="ts">
const props = defineProps<{
  stat: number | string,
  text: string,
  className?: string
}>()
</script>
<template>
  <div :class="['flex w-full h-36 bg-secondary-300 rounded-2xl p-4 overflow-hidden', className]">
    <div class="w-1/2 relative">
      <div class="absolute top-2 -left-14 -rotate-12">
        <slot name="icon" />
      </div>
    </div>
    <div class="w-56 flex flex-col justify-center">
      <h2 class="font-black text-6xl text-white leading-12">{{ stat }}</h2>
      <p class="font-extrabold text-2xl leading-5">{{ text }}</p>
    </div>
  </div>
</template>