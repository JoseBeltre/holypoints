<script lang="ts" setup>
const props = defineProps<{
  stat: number,
  isLogged?: boolean
}>()

</script>
<template>
  <div :class="['flex justify-center items-center bg-primary-600 text-white rounded-xl overflow-hidden relative', !isLogged ? 'flex-1 p-1' : 'w-1/3 p-2']">
    <div :class="['size-20 absolute top-0 left-0 text-primary-700 -rotate-12', !isLogged ? 'left-3 size-28' : '']">
      <slot />
    </div>
    <div :class="['flex justify-center items-center ps-10', !isLogged ? 'gap-2' : '']">
      <h2 :class="['font-extrabold', !isLogged ? 'text-7xl' : 'text-5xl']">{{ stat }}</h2>
      <p v-if="!isLogged" class="font-extrabold text-3xl leading-6">Premios <br>Canjeables</p>
    </div>
  </div>
</template>