<script lang="ts" setup>
const props = defineProps<{
  stat: number
}>()
</script>
<template>
  <div class="w-1/3 flex justify-center items-center bg-primary-600 text-white rounded-xl p-3 overflow-hidden relative">
    <div class="size-20 absolute top-0 left-0 text-primary-700 -rotate-12">
      <slot />
    </div>
    <h2 class="text-4xl font-extrabold ps-10">{{ stat }}</h2>
  </div>
</template>