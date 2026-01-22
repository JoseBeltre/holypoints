<script lang="ts" setup>
defineProps<{
  to?: string
}>()
</script>
<template>
  <NuxtLink :to="to" class="base-btn flex-1 bg-secondary-100! border-secondary-300! text-secondary-500! hover:bg-secondary-500! hover:text-secondary-200! text-lg">
    <IconPlus />
    <slot />
  </NuxtLink>
</template>