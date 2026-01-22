<script lang="ts" setup>
const props = defineProps<{
  color?: string,
  to?: string
}>()
defineEmits<{
  (e: 'click'): void
}>()

</script>
<template>
  <NuxtLink
    :class="[
      'flex justify-between items-center p-4 rounded-xl font-medium transition-colors border cursor-pointer',
      color === 'red'
        ? 'bg-red-50 border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
        : 'bg-white border-black/50 text-black/60  hover:bg-primary-600/10 hover:text-primary-600 hover:border-primary-600'
    ]"
    :to="to"
    @click="$emit('click')"
    >
    <slot />
    <IconChevronRight />
  </NuxtLink>
</template>