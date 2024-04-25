<script setup>
const items = [
  'Разработка веб, мобильных и десктопных приложений',
  'Разработка аппаратных модулей или комплексов',
  'Внедрение ИИ в работу наших решений',
]
</script>

<template>
  <article class="laptops flex flex-col gap-8 text-secondary font-500 leading-6 desktop:(gap-10)">
    <h3 class="text-white text-6 font-700 text-left desktop:(text-20 leading-20)">
      Системы<br class="hidden desktop:inline"> автоматизации<br class="hidden desktop:inline"> бизнеса
    </h3>

    <div class="flex flex-col gap-8 desktop:(w-50% pb-40)">
      <p class="desktop:(text-5 leading-6 font-600)">
        Уже 10 лет наша команда занимается разработкой систем автоматизации бизнес-процессов различной сложности. За годы работы мы сформировали внутри нашей команды сильную экспертизу в таких сферах, как<br>Retail, E-Commerce, PropTech, FinTech, AgroTech.
      </p>

      <p class="desktop:(text-5 leading-6 font-600)">
        Наши продукты комплексно закрывают задачи клиентов за счет сочетания технологий искусственного интеллекта, аппаратных решений и разработки.
      </p>

      <div class="flex flex-col gap-4 text-white desktop:(text-5 leading-10)">
        <div
          v-for="(item, index) in items" :key="index"
          class="flex items-start gap-4 desktop:(items-center)"
        >
          <UiIcon name="check" class="desktop:(w-8 h-8)" />
          {{ item }}
        </div>
      </div>

      <UiButton href="/services/business-automation" class="w-40! lg:hidden gap-2" color="outline" size="small">
        ПОДРОБНЕЕ
        <UiIcon name="arrow" class="h-5" />
      </UiButton>

      <UiButton href="/services/business-automation" class="hidden! gap-2 lg:flex! mt-10 font-500! h-10! xl:(w-60! h-12.5! text-5!)" color="outline">
        ПОДРОБНЕЕ
        <UiIcon name="arrow" class="h-8" />
      </UiButton>
    </div>
  </article>
</template>

<style scoped>
.laptops {
  @media (min-width: 1440px) {
    background-image: url('~/assets/icons/laptops.svg');
    background-size: auto 800px;
    background-repeat: no-repeat;
    background-position: top -80px right 0;
  }
}
</style>
