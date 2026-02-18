<script setup lang="ts">
defineProps<{
  closeModal: () => void
}>()

const ministries = ref(['Jovenes', 'Conquistadores', 'Guias Mayores'])
const reasons = ref(['Asistencia', 'Participacion', 'Comprar una casita'])
const formData = reactive({
  ministry: ministries.value[0],
  reason: reasons.value[0],
  points: 0,
  comment: null,
})
const buttonText = computed(() => {
  return (formData.points > 0 ? 'Sumar ' : 'Restar ')
  + formData.points +
  (formData.points === 1 ? ' punto' : ' puntos')
})
</script>

<template>
  <Modal :closeModal="closeModal" title="Sumar/Restar puntos">
    <div class="grid gap-6">
      <FloatingSelect text="Ministerio" name="ministry" :options="ministries" v-model="formData.ministry" />
      <FloatingSelect text="Razon" name="reason" :options="reasons" v-model="formData.reason" />
      <FloatingInput text="Cantidad" name="points" :modelValue="formData.points" type="number" />
      <FloatingInput text="Comentario (opcional)" name="comment" :modelValue="formData.comment" />
    </div>
    <div class="flex justify-end gap-4 w-full mt-4">
      <button @click="closeModal" class="text-red-400 underline cursor-pointer">Cancelar</button>
      <button
        :class="{
          'base-btn py-2! px-5! font-semibold! disabled:bg-gray-300! border-gray-400! text-gray-500!': true,
          'base-btn bg-secondary-100! border-secondary-300! text-secondary-500! hover:bg-secondary-500! hover:text-secondary-200!': formData.points < 0,
          'base-btn': formData.points > 0
          }"
        :disabled="formData.points === 0"
        >
        {{ buttonText }}
      </button>
    </div>
  </Modal>
</template>
