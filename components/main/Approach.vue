<script setup>
// import chart1 from '~/assets/img/chart1.png'
// import chart2 from '~/assets/img/chart2.png'
// import chart3 from '~/assets/img/chart3.png'
// import chart4 from '~/assets/img/chart4.png'

// const items = [
//   {
//     heading: 'Управление проектами',
//     text: 'Agile и Scrum, для обеспечения максимальной эффективности и гибкости',
//     icon: chart1,
//     order: 1,
//   },
//   {
//     heading: 'Индивидуальный подход',
//     text: 'Ориентирован на конкретные потребности и характер вашего проекта или продукта',
//     icon: chart2,
//     order: 3,
//   },
//   {
//     heading: 'Взаимодействие',
//     text: 'Обеспечивает прозрачное управление процессами и регулярное оповещение вас о ходе выполнения проекта',
//     icon: chart3,
//     order: 2,
//   },
//   {
//     heading: 'Внедрение и поддержка',
//     text: 'На всех этапах жизненного цикла проекта',
//     icon: chart4,
//     order: 4,
//   },
// ]
</script>

<template>
  <section class="w-full flex flex-col items-center gap-8 px-5 desktop:(items-start gap-10 px-15 gap-25) max-w-[1440px] self-center">
    <h2 class="text-white text-6.5 font-700 text-center desktop:(text-left text-16 leading-20)">
      Наш подход
    </h2>

    <div class="grid grid-cols-1 gap-10 desktop:(grid-cols-2 gap-x-40 gap-y-25)">
      <article class="flex items-center gap-8 desktop:(order-1 gap-12 items-start)">
        <img src="~/assets/img/chart1.png" class="h-auto w-20 desktop:(w-36)">
        <div class="flex flex-col gap-4 font-500 desktop:(text-6 leading-12)">
          <h4>Управление проектами</h4>
          <p class="text-secondary desktop:(text-5 leading-6 font-500)">
            Agile и Scrum, для обеспечения максимальной эффективности и гибкости
          </p>
        </div>
      </article>

      <article class="flex items-center gap-8 desktop:(order-3 gap-12 items-start)">
        <img src="~/assets/img/chart2.png" class="h-auto w-20 desktop:(w-36)">
        <div class="flex flex-col gap-4 font-500 desktop:(text-6 leading-12)">
          <h4>Индивидуальный подход</h4>
          <p class="text-secondary desktop:(text-5 leading-6 font-500)">
            Ориентирован на конкретные потребности и характер вашего проекта или продукта
          </p>
        </div>
      </article>

      <article class="flex items-center gap-8 desktop:(order-2 gap-12 items-start)">
        <img src="~/assets/img/chart3.png" class="h-auto w-20 desktop:(w-36)">
        <div class="flex flex-col gap-4 font-500 desktop:(text-6 leading-12)">
          <h4>Взаимодействие</h4>
          <p class="text-secondary desktop:(text-5 leading-6 font-500)">
            Обеспечивает прозрачное управление процессами и регулярное оповещение вас о ходе выполнения проекта
          </p>
        </div>
      </article>

      <article class="flex items-center gap-8 desktop:(order-4 gap-12 items-start)">
        <img src="~/assets/img/chart4.png" class="h-auto w-20 desktop:(w-36)">
        <div class="flex flex-col gap-4 font-500 desktop:(text-6 leading-12)">
          <h4>Внедрение и поддержка</h4>
          <p class="text-secondary desktop:(text-5 leading-6 font-500)">
            На всех этапах жизненного цикла проекта
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
