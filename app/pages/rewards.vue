<script lang="ts" setup>
const isLogged = ref(true)
// array de prueba
const rewards = [
  {
    name: "T-shirt del Día Mundial del Joven Adventista",
    description: "Poloche oficial para el Día Mundial del Joven Adventista por ADOSE.",
    points: 1234,
    image: "https://prd.place/400?id=1",
    stock: 0
  },
  {
    name: "Pin de Camporee Nehemias",
    description: "Pin oficial del camporee nacional 2025.",
    points: 1234,
    image: "https://prd.place/400?id=2",
    stock: 5
  }
]

</script>
<template>
  <div>
    <header class="mb-2">
      <h1 class="page-title">Recompensas</h1>
      <p class="page-subtitle">Esto es todo lo que puedes canjear con tus Holypoints 👇</p>
    </header>
    <main class="grid gap-3">
      <section class="flex gap-3 w-full">
        <SmallSummaryCard :stat="8" :isLogged="isLogged">
          <IconGift class="size-full" fill="#ffffff" stroke-width="1" />
        </SmallSummaryCard>
        <AddButton v-if="isLogged">Agregar Premio </AddButton>
      </section>
      <SearchBar />
      <section class="grid gap-3">
        <RewardCard :isLogged="isLogged" v-for="reward in rewards" :reward="reward" />
      </section>
    </main>
  </div>
</template>