<script lang="ts" setup>
defineProps<{
  name: string,
  points: number,
  img?: string,
  position: number
}>();
</script>
<template>
  <div v-if="position <= 3" :class="[
    'winners-base',
    position === 1 && 'from-fromGold to-toGold mb-5',
    position === 2 && 'from-fromSilver to-toSilver mb-5',
    position === 3 && 'from-fromBronze to-toBronze'
  ]">
    <div :class="[
      'winners-img',
      position === 1 && 'border-fromGold',
      position === 2 && 'border-fromSilver',
      position === 3 && 'border-fromBronze'
    ]">
      <img v-if="img" class="size-full object-cover" :src="img" alt="">
      <DefaultImg v-else />
    </div>
    <h3 :class="[
      position === 1 && 'text-nameGold',
      position === 2 && 'text-nameSilver',
      position === 3 && 'text-nameBronze'
    ]">{{ name }}</h3>
    <div :class="[
      position === 1 && 'text-pointsGold',
      position === 2 && 'text-pointsSilver',
      position === 3 && 'text-pointsBronze'
    ]">
      <h3>{{ points }}</h3>
      <p>Holypoints</p>
    </div>
  </div>
  <div v-else class="ranking-base-wrapper mb-3">
      <p class="text-lg">#{{ position }}</p>
      <div class="ranking-base">
        <div class="ranking-img">
          <DefaultImg />
        </div>
        <h3>{{ name }}</h3>
        <div>
          <h3>{{ points }}</h3>
          <p>Holypoints</p>
        </div>
      </div>
    </div>
</template>