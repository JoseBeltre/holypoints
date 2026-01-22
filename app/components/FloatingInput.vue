<script lang="ts" setup>
defineProps<{
  text: string,
  name: string,
  required?: boolean,
  modelValue: string
}>()
const emit = defineEmits(['update:modelValue'])
</script>
<template>
  <div class="relative">
    <input
      class="w-full rounded-xl outline-2 h-12 outline-black/18 ps-4 focus:outline-primary-600 [:not(:placeholder-shown)]:outline-primary-600 peer"
      :id="name"
      :name="name"
      placeholder=" "
      type="text"
      :required="required"
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
    <label class="absolute left-4 top-1/2 -translate-y-1/2 text-black/40 bg-white px-1 pe-2 transition-all peer-focus:-top-1 peer-focus:text-primary-600 peer-focus:left-3 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:text-primary-600 peer-[:not(:placeholder-shown)]:left-3 duration-300 rounded-full" :for="name">{{ text }}</label>
  </div>
</template>