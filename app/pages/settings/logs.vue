<script lang="ts" setup>
definePageMeta({
  layout: 'sub-page'
})
useHead({
  title: 'Registro de Acciones - Holypoints'
})
</script>
<template>
  <div>
    <header class="mb-4">
      <h1 class="page-title mb-1">Registro</h1>
      <p class="page-subtitle">Este es un registro de todas las acciones relizadas.</p>
    </header>
    <main>
      <section class="flex gap-2">
        <FilterPill>
          <IconGem :size="18" />
          Puntos
        </FilterPill>
        <FilterPill>
          <IconGift :size="18" />
          Premios
        </FilterPill>
        <FilterPill>
          <IconUsersRound :size="18" />
          Jovenes
        </FilterPill>
      </section>
    </main>
  </div>
</template>