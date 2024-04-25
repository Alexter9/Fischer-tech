<script setup>
import solution1 from '~/assets/img/solutions/solution1.png'
import solution2 from '~/assets/img/solutions/solution2.png'
import solution3 from '~/assets/img/solutions/solution3.png'
import solution4 from '~/assets/img/solutions/solution4.png'
import solution5 from '~/assets/img/solutions/solution5.png'
import solution6 from '~/assets/img/solutions/solution6.png'
import solution7 from '~/assets/img/solutions/solution7.png'
import solution8 from '~/assets/img/solutions/solution8.png'

const solutions = [
  {
    text: 'М-Сервис',
    img: solution1,
  },
  {
    text: 'Агрохолдинг.',
    subtext: 'Контроль качества почвы',
    img: solution2,
  },
  {
    text: 'Агрохолдинг',
    subtext: 'Защита урожая от вредителей',
    img: solution3,
  },
  {
    text: 'Balcao',
    img: solution4,
  },
  {
    text: 'Smart-bazar',
    img: solution5,
  },
  {
    text: 'Ценообразование',
    img: solution6,
  },
  {
    text: 'Мобильные промо-игры',
    img: solution7,
  },
  {
    text: 'Мерчендайзинг',
    img: solution8,
  },
]
</script>

<template>
  <div class="px-6">
    <header class="mt-2">
      <h1 class="text-4 text-center leading-4.5">
        Наши <span class="text-gradient">решения</span>
      </h1>
    </header>

    <main class="flex my-10 flex-col items-center">
      <section class="grid grid-cols-2 px-2 gap-x-6.5 gap-y-8">
        <SolutionsItem
          v-for="(item, index) in solutions"
          :key="index"
          :text="item.text"
          :subtext="item.subtext"
          :img="item.img"
        />
      </section>
    </main>
  </div>
</template>
