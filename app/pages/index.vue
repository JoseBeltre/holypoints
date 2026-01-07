<template>
  <div class="px-4 py-5 tracking-tighter">
    <header class="flex justify-end w-full gap-2 tracking-tighter">
      <h3>Juan Carlos Ramos</h3>
      <IconSettings />
    </header>
    <!-- Texto de bienvenido dinamico -->
    <h1 class="text-4xl font-bold tracking-tight leading-5">Bienvenido</h1>
    <p class="font-light ">Aquí un resumen de tus jovenes 👇</p>
    <main class="grid gap-4 mt-3">
      <!-- Cards de resumen -->
      <div>
        <div class="flex w-full h-36 bg-secondary-300 rounded-2xl p-4 overflow-hidden">
          <div class="w-1/2 relative">
            <div class="absolute -top-2 -left-10">
              <IconGem :size="192" class="-rotate-12 absolute" stroke-width=".8" fill="#ffffff" />
              <IconGem :size="192" class="-rotate-12 absolute" stroke-width=".8" />
            </div>
          </div>
          <div class="w-56 flex flex-col justify-center">
            <h2 class="font-black text-6xl text-white leading-12">3000</h2>
            <p class="font-extrabold text-2xl leading-5">Holypoints Reclamados</p>
          </div>
        </div>
      </div>
      <!-- Atajos -->
      <div class="border-2 rounded-2xl border-black/20 p-4 pt-2 shadow-md">
        <h2 class="text-primary-600 font-bold text-2xl mb-2">Atajos</h2>
        <div class="grid gap-2">
          <button class="flex p-2 py-3 justify-center border-2 border-primary-600 bg-primary-600/30 rounded-xl text-primary-600 font-medium relative overflow-hidden">
            <IconGem class="absolute top-0 left-2 size-16 -rotate-10" stroke-width="1.2" />
            Sumar Holypoints
          </button>
          <button class="flex p-2 py-3 justify-center border-2 border-primary-600 bg-primary-600/30 rounded-xl text-primary-600 font-medium relative overflow-hidden">
            <IconUserRoundPlus class="absolute top-0 left-2 size-16 -rotate-10" stroke-width="1.2" />
            Registrar Joven
          </button>
        </div>
      </div>
      <!-- Lider en Holypoints -->
      <div>
        <h2>Lider en Holypoints</h2>
        <div>
          <div>
            <h2>1</h2>
            <p>Noel Rodriguez</p>
            <h2>
              421
              <IconGem />
            </h2>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
