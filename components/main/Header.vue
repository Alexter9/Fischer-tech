<script setup>
const { toggleOrderModal } = useAppStore()

const tags = [
  'Разработка и запуск продуктов',
  'Консалтинг',
  'Разработка сайтов',
  'Исследования и аналитика',
  'Разработка систем автоматизации',
]
</script>

<template>
  <header class="flex flex-col gap-6 text-center items-center pt-5 md:(pt-0 gap-0)">
    <div class="flex flex-col items-center gap-8 px-6 md:(px-10 mb-10) lg:(mb-15) xl:mb-8">
      <h1 class="font-700 text-7 md:(text-10) lg:text-12 xl:(text-16 leading-20)">
        УЛУЧШИМ РЕЗУЛЬТАТЫ
        <br>
        <span class="text-gradient">ВАШЕГО БИЗНЕСА</span>
      </h1>

      <p class="text-secondary font-500 text-4 leading-5 md:hidden">
        Наша миссия – сделать Ваш бизнес более успешным и эффективным с помощью технологий
      </p>

      <UiButton class="w-50! md:hidden" @click="toggleOrderModal">
        ЗАДАТЬ ВОПРОС
      </UiButton>
    </div>

    <div class="hidden md:flex justify-between gap-4 px-10 w-full max-w-[742px] lg:max-w-[960px] xl:(max-w-[1100px] px-0)">
      <div class="flex flex-col gap-4 lg-hidden">
        <MainTag class="ml-5">
          Разработка и запуск продуктов
        </MainTag>
        <div class="flex gap-6">
          <MainTag>
            Консалтинг
          </MainTag>
          <MainTag>
            Разработка систем автоматизации
          </MainTag>
        </div>
        <div class="flex gap-6">
          <MainTag class="ml-5">
            Исследования и аналитика
          </MainTag>
          <MainTag>
            Разработка сайтов
          </MainTag>
        </div>
      </div>

      <div class="flex-col gap-4 hidden lg:(flex gap-6)">
        <div class="flex gap-1 pl-5 lg:gap-10">
          <MainTag>
            Разработка и запуск продуктов
          </MainTag>
          <MainTag>
            Исследования и аналитика
          </MainTag>
        </div>
        <div class="flex gap-1 lg:gap-5">
          <MainTag>
            Консалтинг
          </MainTag>
          <MainTag>
            Разработка систем автоматизации
          </MainTag>
          <MainTag>
            Разработка сайтов
          </MainTag>
        </div>
      </div>

      <div class="flex flex-col items-start gap-5 xl:gap-10">
        <p class="text-secondary text-start font-500 text-3 leading-3.5 lg:(text-3.5 leading-4) xl:(text-4 leading-5)">
          Наша миссия – сделать<br class="xl:hidden"> Ваш бизнес<br class="hidden xl:inline"> более<br class="xl:hidden"> успешным и эффективным<br> с помощью технологий
        </p>

        <UiButton class="w-40! lg:hidden" color="secondary" size="small" @click="toggleOrderModal">
          ЗАДАТЬ ВОПРОС
        </UiButton>

        <UiButton class="hidden! lg:flex! font-600! h-10! xl:(w-60! h-12.5! text-5!)" color="secondary" @click="toggleOrderModal">
          ЗАДАТЬ ВОПРОС
        </UiButton>
      </div>
    </div>

    <div class="hand-background h-45 sm:h-60" />

    <div class="infinite-scroll md:hidden!">
      <div class="scroll-container flex gap-2">
        <MainTag v-for="tag in tags" :key="tag">
          {{ tag }}
        </MainTag>
      </div>
      <div class="scroll-container flex gap-2">
        <MainTag v-for="tag in tags" :key="tag">
          {{ tag }}
        </MainTag>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hand-background {
  background-image: url('~/assets/img/hand.png');
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 742px) {
    background-position: left -2rem bottom -3rem;
    height: 200px !important;
  }

  @media (min-width: 800px) {
    height: 220px !important;
  }

  @media (min-width: 860px) {
    height: 240px !important;
  }

  @media (min-width: 920px) {
    height: 260px !important;
  }

  @media (min-width: 990px) {
    height: 270px !important;
  }

  @media (min-width: 1024px) {
    height: 280px !important;
  }

  @media (min-width: 1060px) {
    height: 300px !important;
  }

  @media (min-width: 1120px) {
    height: 320px !important;
  }

  @media (min-width: 1190px) {
    height: 340px !important;
  }

  @media (min-width: 1256px) {
    height: 340px !important;
    background-position: left 0 bottom 0;
    background-size: contain;
  }

  @media (min-width: 1440px) {
    height: 380px !important;
    background-position: left 0 bottom 0;
    background-size: contain;
  }
}

.infinite-scroll {
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent)
}

.infinite-scroll .scroll-container {
  white-space: nowrap;
  animation: scroll 50s linear infinite;
  animation-delay: calc(50s*-1);

}

.infinite-scroll .scroll-container:nth-child(2) {
  animation: scroll2 50s linear infinite;
  animation-delay: calc(50s/-2);
}

@keyframes scroll {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

@keyframes scroll2 {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-200%);
    }
}
</style>
