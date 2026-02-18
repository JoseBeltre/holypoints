<script lang="ts" setup>
const props = defineProps<{
  title: string,
  closeModal: () => void
}>()

const handleClose = () => {
  document.body.style.overflow = 'auto'
  props.closeModal()
} 
</script>
<template>
  <div @click.self="handleClose" class="fixed overlay inset-0 bg-black/30 z-999 backdrop-blur-[1px] flex items-center justify-center p-6">
    <div class="modal-content bg-white w-full rounded-2xl p-5">
      <h3 class="font-bold text-2xl mb-4 text-primary-600">{{ title }}</h3>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>