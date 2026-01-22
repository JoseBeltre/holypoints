<script setup lang="ts">
const router = useRouter()

function goBack() {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>
<template>
  <div class="min-h-dvh px-4 py-5 tracking-tighter">
    <button @click="goBack" class="flex font-bold text-primary-600 cursor-pointer">
      <IconChevronLeft />
      Atrás
    </button>
    <slot />
  </div>
</template>