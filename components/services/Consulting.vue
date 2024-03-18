<script setup>
const items = [
  'Сбор фактов',
  'Построение гипотезы',
  'Структурирование проблематики',
  'Разработка решения',
  'Внедрение',
  'Измерение результатов',
]
</script>

<template>
  <article class="flex">
    <div class="flex flex-col gap-8 text-secondary font-500 leading-6 desktop:(gap-10)">
      <h3 class="text-white text-6 font-700 text-left desktop:(text-24 leading-24)">
        Консалтинг
      </h3>

      <p class="desktop:(text-5 leading-6 font-600)">
        Наша команда поможет выявить точки роста и проблемы вашего бизнеса, совместно с вами разрабатывая решения и стратегию по их внедрению. Если у вас еще нет сформулированного запроса, это не страшно, наша команда часто работает в условиях высокой степени неопределенности, выявляя и структурируя проблематику вашего предприятия.
      </p>

      <p class="desktop:(text-5 leading-6 font-600)">
        Мы беремся за работу только в случаях когда действительно можем помочь, в противном случае мы рекомендуем вам потенциальных партнеров под ваш профиль
      </p>

      <div class="flex flex-col gap-4 text-white desktop:(text-5 leading-10)">
        <div
          v-for="(item, index) in items" :key="index"
          class="flex items-center gap-4"
        >
          <UiIcon name="check" class="desktop:(w-8 h-8)" />
          {{ item }}
        </div>
      </div>
    </div>

    <div class="hands hidden desktop:flex shrink-0 w-[731px] h-[806px]" />
  </article>
</template>

<style scoped>
.hands {
  background-image: url('~/assets/icons/hands.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top -80px center;
}
</style>
