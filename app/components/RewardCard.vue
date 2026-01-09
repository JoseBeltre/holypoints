<script lang="ts" setup>
// Interface de prueba
interface reward {
  name: string,
  description: string,
  points: number,
  image: string,
  stock: number
}
defineProps<{
  reward: reward,
  isLogged?: boolean
}>()

</script>
<template>
  <article :class="['rounded-box flex p-0! shadow-sm! overflow-hidden cursor-pointer hover:bg-secondary-50/50 relative h-58', reward.stock <= 0 ? 'border-red-200! border-2! opacity-60' : '']">
    <button v-if="isLogged" class="absolute bg-[#b4dde0] rounded-lg border-2 border-primary-600 text-primary-600 top-2 left-2 z-10 p-1 hover:bg-primary-600 hover:text-white transition-colors cursor-pointer">
      <IconPencil :size="18" />
    </button>
    <div class="w-3/8 aspect-3/4 overflow-hidden bg-gray-200 shadow-black/10 shadow-[inset_-2px_0px_5px]">
      <img class="size-full object-cover" :src="reward.image" alt="">
    </div>
    <div class="w-5/8 p-4 flex flex-col">
      <h2 :class="['font-semibold text-lg leading-4.5 text-primary-600 mb-2', reward.stock <= 0 ? 'text-gray-600!' : '']">{{ reward.name }}</h2>
      <p class="text-black/70 leading-4 mb-5">{{ reward.description }}</p>
      <h3 class="text-black/70 text-sm leading-2">Costo de canje:</h3>
      <p class="flex items-center gap-1 text-3xl font-bold ps-1">
        {{ reward.points }}
        <IconHolypoint :size="28" :strokeWidth="1.2" />
      </p>
      <p v-if="reward.stock > 0" class="mt-auto text-end text-sm pe-4">Quedan {{ reward.stock }}</p>
      <p v-else class="mt-auto text-end pe-4 font-bold text-red-600 uppercase">Agotado</p>
      <button v-if="reward.stock > 0 && isLogged" class="base-btn py-2! w-full rounded-3xl! block shadow-none!">Canjear premio</button>
    </div>
  </article>
</template>