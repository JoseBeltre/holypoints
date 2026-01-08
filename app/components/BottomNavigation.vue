<script lang="ts" setup>
const route = useRoute()
console.log(route.path)
</script>
<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
    <div class="flex items-center py-5 justify-around">
      <NuxtLink to="/" :class="['p-2', route.path === '/' ? 'nav-selected' : '']">
        <IconHouse/>
      </NuxtLink>
      <NuxtLink to="/youth" :class="['p-2', route.path === '/youth' ? 'nav-selected' : '']">
        <IconUsersRound/>
      </NuxtLink>
      <NuxtLink to="/ranking" :class="['p-2', route.path === '/ranking' ? 'nav-selected' : '']">
        <IconTrophy/>
      </NuxtLink>
      <NuxtLink to="/rewards" :class="['p-2', route.path === '/rewards' ? 'nav-selected' : '']">
        <IconGift/>
      </NuxtLink>
      <NuxtLink to="/settings" :class="['p-2', route.path === '/settings' ? 'nav-selected' : '']">
        <IconSettings/>
      </NuxtLink>
    </div>
  </nav>
</template>