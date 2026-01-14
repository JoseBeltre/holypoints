<script setup lang="ts">
useHead({
  title: 'Tabla de Puntuaciones - Holypoints'
})
// datos de ejemplo
const users = [
  {
    name: "Nemesis Ramos",
    points: 1000,
  },
  {
    name: "Juan Ramos",
    points: 800,
  },
  {
    name: "Jose Beltre",
    points: 700,
  },
  {
    name: "Mario Ramirez",
    points: 600,
  },
  {
    name: "Juan Ramirez",
    points: 500,
  },
]
</script>
<template>
  <header class="mb-6">
    <h1 class="page-title">Tabla de Puntuaciones</h1>
    <p class="page-subtitle">Líderes en Holypoints</p>
  </header>
  <main class="flex flex-col">
    <template v-for="(user, index) in users">
      <RankingItem :name="user.name" :points="user.points" :position="index + 1" />
      <div v-if="index === 2" class="h-px w-full bg-black/20 my-5"></div>
    </template>
  </main>
</template>