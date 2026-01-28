<script lang="ts" setup>
const props = defineProps<{
  firstName?: string,
  lastName?: string
}>()
const initials = computed(() => {
  if (!props.firstName && !props.lastName) return null
  const first = props.firstName?.split(' ')[0]
  const last = props.lastName?.split(' ')[0]
  const f = first?.[0] ?? ''
  const l = last?.[0] ?? ''

  return (f + l).toUpperCase() || null
})
</script>
<template>
  <div class="flex items-center justify-center size-full bg-gray-100 text-primary-600">
    <span v-if="initials" class="font-bold text-xl">{{ initials }}</span>
    <IconUserRound v-else class="size-7" :stroke-width="1.5" />
  </div>
</template>