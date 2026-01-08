
<script lang="ts" setup>
defineProps<{
  size?: number,
  strokeWidth?: number
}>()
</script>
<template>
  <div class="relative size-5 inline-block">
    <IconGem class="-rotate-10 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-black" :size="size" fill="#fbbf24" :stroke-width="strokeWidth" />
    <IconGem class="-rotate-10 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-black" :size="size" :stroke-width="strokeWidth" />
  </div>
</template>