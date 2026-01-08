<template>
  <div>
    <header class="mb-2">
      <h1 class="page-title">Jóvenes Mansos</h1>
      <p class="page-subtitle">Administra los jóvenes de Mansedumbre desde aquí</p>
    </header>
    <main class="grid gap-3">
      <section class="flex gap-3 w-full">
      <SmallSummaryCard :stat="12">
          <IconUserRound class="size-full" fill="#ffffff" stroke-width="1" />
      </SmallSummaryCard>
      <AddButton>Registrar Joven</AddButton>
      </section>
      <SearchBar />
      <section class="grid gap-2">
        <YouthCard name="Noel Rodriguez" :points="1234" />
        <YouthCard name="Karol Batista" :points="324" />
        <YouthCard name="Sabrina Palmares" :points="1234" />
      </section>
    </main>
  </div>
</template>