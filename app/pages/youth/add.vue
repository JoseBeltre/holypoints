<script lang="ts" setup>
definePageMeta({
  title: 'Agregar nuevo joven',
  layout: false,
  middleware: 'auth'
})

const { createUser, error } = useUsers()
const form = reactive({
  firstName: '',
  lastName: '',
  birthDate: '',
  address: '',
  email: '',
  phoneNumber: ''
})

const handleSubmit = async () => {
  const newUserRef = await createUser({
    firstName: form.firstName,
    lastName: form.lastName,
    birthDate: form.birthDate,
    address: form.address,
    email: form.email,
    phoneNumber: form.phoneNumber,
  })
  if (newUserRef) {
    console.log('USUARIO CREADO>  ', newUserRef)
  }
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
        <FloatingInput v-model="form.firstName" name="firstname" text="Nombres" required />
        <FloatingInput v-model="form.lastName" name="lastname" text="Apellidos" required />
        <FloatingInput v-model="form.birthDate" name="birthDate" text="Fecha de nacimiento" type="date" required />
        <FloatingInput v-model="form.address" name="address" text="Dirección (opcional)" :required="false" />
        <FloatingInput v-model="form.email" name="email" text="Correo electrónico (opcional)" type="email"
          :required="false" />
        <FloatingInput v-model="form.phoneNumber" name="phone" text="Numero de celular (opcional)" type="phone"
          :required="false" />
        <p v-if="error" class="text-red-400 text-center">{{ error }}</p>
        <button class="login-btn drop-shadow-none!">
          <!-- <span>Faltan campos obligatorios</span> -->
          <span>Agregar a "{{ form.firstName.split(' ')[0] }}"</span>
        </button>
      </form>
    </main>
  </div>
</template>
<style>
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 30%;
  /* position: absolute; */
  padding-right: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>