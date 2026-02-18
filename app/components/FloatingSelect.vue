<script lang="ts" setup>
const props =defineProps<{
  text: string,
  name: string,
  required?: boolean,
  modelValue: string,
  options: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
})
</script>
<template>
  <div class="relative">
    <select
      class="w-full rounded-xl outline-2 h-12 outline-black/18 ps-4 focus:outline-primary-600 peer"
      :id="name"
      :name
      :required
      v-model="model"
    >
    <option
      v-for="option in options"
      :key="option"
      :value="option"
      class="capitalize"
    >
      {{ option }}
    </option>
    </select>
    <label class="absolute left-4 top-1/2 -translate-y-1/2 text-black/40 bg-white px-1 pe-2 transition-all peer-focus:-top-1 peer-focus:text-primary-600 peer-focus:left-3 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:left-3 duration-300 rounded-full appearance-none" :for="name">
      {{ text }}
      <span v-if="required" class="text-red-300">*</span>
    </label>
    <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-primary-600 peer-focus:-rotate-180 transition-transform">
    <IconChevronDown />
    </span>
  </div>
</template>
<style scoped>
  select {
    appearance: none;        /* estándar */
    -webkit-appearance: none; /* Safari/Chrome */
    -moz-appearance: none;    /* Firefox */
  }
</style>