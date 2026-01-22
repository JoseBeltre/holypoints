<script lang="ts" setup>
definePageMeta({
  title: 'Agregar nuevo joven',
  layout: false
})

const form = ref({
  firstName: '',
  lastName: '',
  bornDate: '',
  address: '',
  email: '',
  phoneNumber: ''
})

const handleSubmit = () => {
  console.log(form.value)

}
</script>
<template>
  <div class="min-h-dvh px-4 py-5 tracking-tighter">
    <NuxtLink to="/youth" class="flex font-bold text-red-400 cursor-pointer underline">Cancelar</NuxtLink>
    <header class="mb-3">
      <h1 class="page-title text-center">Nuevo Joven</h1>
    </header>
    <main>
      <form class="grid gap-5" @submit.prevent="handleSubmit">
        <div class="flex flex-col items-center justify-center gap-3">
          <div class="size-40 rounded-full overflow-hidden">
            <DefaultImg />
          </div>
          <button class="shortcut-btn py-1! px-10!">Subir foto</button>
        </div>
        <FloatingInput v-model="form.firstName" name="firstname" text="Nombres" />
        <FloatingInput v-model="form.lastName" name="lastname" text="Apellidos" />
        <FloatingInput v-model="form.bornDate" name="borndate" text="Fecha de nacimiento" />
        <FloatingInput v-model="form.address" name="address" text="Dirección (opcional)" :required="false" />
        <FloatingInput v-model="form.email" name="email" text="Correo electrónico (opcional)" :required="false" />
        <FloatingInput v-model="form.phoneNumber" name="phone" text="Numero de celular (opcional)" :required="false" />
        <button class="login-btn drop-shadow-none!">
          Agregar a "Fulano"
        </button>
      </form>
    </main>
  </div>
</template>