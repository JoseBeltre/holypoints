<template>
  <div class="px-4 py-5 tracking-tighter">
    <header class="flex justify-end w-full gap-2 tracking-tighter">
      <h3>Juan Carlos Ramos</h3>
      <IconSettings />
    </header>
    <!-- Texto de bienvenido dinamico -->
    <h1 class="text-4xl font-bold tracking-tight leading-5">Bienvenido</h1>
    <p class="font-light text-black/60">Aquí un resumen de tus jovenes <span class="text-white">👇</span></p>
    <main class="grid gap-4 mt-3">
      <!-- Cards de resumen -->
      <div class="grid gap-4">
        <KpiCard :stat="3000" text="Holypoints Reclamados">
          <template #icon>
            <IconGem :size="192" class="absolute" stroke-width=".8" fill="#ffffff" />
            <IconGem :size="192" class="absolute" stroke-width=".8" />
          </template>
        </KpiCard>
        <KpiCard :stat="12" text="Jovenes Participando" class-name="!bg-primary-600">
          <template #icon>
            <IconUserRound :size="192" class="absolute" stroke-width=".8" fill="#ffffff" />
          </template>
        </KpiCard>
      </div>
      <!-- Atajos -->
      <div class="rounded-box">
        <h2 class="text-primary-600 font-bold text-2xl mb-2">Atajos</h2>
        <div class="grid gap-2">
          <button class="shortcut-btn">
            <IconGem stroke-width="1.2" />
            Sumar Holypoints
          </button>
          <button class="shortcut-btn">
            <IconUserRoundPlus stroke-width="1.2" />
            Registrar Joven
          </button>
        </div>
      </div>
      <!-- Lider en Holypoints -->
      <div class="rounded-box">
        <h2 class="text-secondary-500 font-bold text-2xl mb-2">Lider en Holypoints</h2>
        <TopYouth name="Noel Rodriguez" :points="421" />
      </div>
    </main>
  </div>
</template>
