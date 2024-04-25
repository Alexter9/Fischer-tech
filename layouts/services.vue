<script setup>
const appStore = useAppStore()

const { toggleOrderModal } = appStore
const { showSidebar, showOrderModal } = storeToRefs(appStore)

const route = useRoute()

const imageClass = computed(() => {
  switch (route.name) {
    case 'services-product-consulting':
      return 'consulting'
    case 'services-business-automation':
      return 'automation'
    case 'services-custom-development':
      return 'development'
    default:
      return ''
  }
})
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <header class="flex flex-col items-center h-80 md:h-100 lg:h-117 xl:h-160">
      <Navbar class="absolute! z-1" />
      <div
        class="w-full max-w-[1440px] h-full px-10 pb-10 flex flex-col justify-end gap-5 md:(px-21 pb-15 gap-8) xl:(pb-37 gap-12) desktop:(px-30 pb-25)"
        :class="[imageClass]"
      >
        <div class="glowing-circle" />
        <h1 class="font-800 text-6 leading-6 md:(text-9 leading-9) lg:(text-12 leading-12) desktop:(text-16 leading-16)">
          <slot name="title" />
        </h1>

        <UiButton class="w-40! lg:hidden" size="small" @click="toggleOrderModal">
          ЗАДАТЬ ВОПРОС
        </UiButton>

        <UiButton class="hidden! lg:flex! font-500! h-10! xl:(w-60! h-12.5! text-5!)" @click="toggleOrderModal">
          ЗАДАТЬ ВОПРОС
        </UiButton>
      </div>
    </header>

    <main class="bg-white flex justify-center">
      <div class="w-full max-w-[1440px] px-10 py-8 md:px-21 lg:(py-10) desktop:(p-30)">
        <slot />
      </div>
    </main>

    <div class="footer-circle flex justify-center">
      <div class="max-w-[1440px] w-full flex flex-col gap-10 px-10 md:px-21 pt-15 desktop:(px-30)">
        <OrderForm class="bg-transparent" />
        <Footer />
      </div>
    </div>

    <Transition name="slide">
      <LazySidebar v-if="showSidebar" />
    </Transition>

    <Transition name="fade" mode="out-in">
      <LazyOrderModal v-if="showOrderModal" />
    </Transition>
  </div>
</template>

<style scoped>
.consulting {
  background-image: url('~/assets/img/services/consulting.png');
  background-position: bottom -24px right -84px;
  background-size: 342px 258px;
  background-repeat: no-repeat;

  @media (min-width: 600px) {
    background-position: bottom right;
  }

  @media (min-width: 742px) {
    background-size: 447px 337px;
  }

  @media (min-width: 1024px) {
    background-size: 526px 397px;
  }

  @media (min-width: 1256px) {
    background-size: 705px 533px;
    background-position: bottom 16px right 62px;
  }

  @media (min-width: 1440px) {
    background-position: bottom right 84px;
  }
}

.automation {
  background-image: url('~/assets/img/services/automation.png');
  background-position: bottom -52px right -92px;
  background-size: 279px 342px;
  background-repeat: no-repeat;

  @media (min-width: 600px) {
    background-position: bottom -52px right;
  }

  @media (min-width: 742px) {
    background-size: 387px 474px;
    background-position: bottom -84px right -16px;
  }

  @media (min-width: 1024px) {
    background-size: 439px 537px;
    background-position: bottom -60px right 56px;
  }

  @media (min-width: 1256px) {
    background-size: 598px 732px;
    background-position: bottom -100px right 40px;
  }

  @media (min-width: 1440px) {
    background-size: 664px 813px;
    background-position: bottom -150px right 50px;
  }
}

.development {
  background-image: url('~/assets/img/services/development.png');
  background-position: bottom right;
  background-size: 214px 221px;
  background-repeat: no-repeat;

  @media (min-width: 600px) {
    background-position: bottom 0 right 40px;
  }

  @media (min-width: 742px) {
    background-size: 296px 305px;
    background-position: bottom 10px right 70px;
  }

  @media (min-width: 1024px) {
    background-size: 377px 388px;
    background-position: bottom 0 right 56px;
  }

  @media (min-width: 1256px) {
    background-size: 509px 524px;
    background-position: bottom 10px right 120px;
  }

  @media (min-width: 1440px) {
    background-size: 512px 527px;
    background-position: bottom -8px right 180px;
  }
}

.glowing-circle {
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  background: radial-gradient(circle at 90% 50%, #413ECE 0%, rgb(26, 26, 26) 80%);
  background-repeat: no-repeat;

  @media (min-width: 742px) {
    background: radial-gradient(circle at 80% 40%, #413ECE 0%, rgb(26, 26, 26) 50%);
  }

  @media (min-width: 1024px) {
    background: radial-gradient(circle at 80% 40%, #413ECE 0%, rgb(26, 26, 26) 40%);
  }

  @media (min-width: 1256px) {
    background: radial-gradient(circle at 80% 60%, #413ECE 0%, rgb(26, 26, 26) 50%);
  }

  @media (min-width: 1256px) {
    background: radial-gradient(1144px 1144px at calc(50% + 300px) 50%, #413ECE 0%, rgb(26, 26, 26) 40%);
  }
}

.footer-circle {
  background: radial-gradient(1131px 1131px at 160% -20%, #413ECE 0%, rgb(26, 26, 26) 80%);
  background-repeat: no-repeat;

  @media (min-width: 742px) {
    background: radial-gradient(1475px 1475px at top -40%  right -40%,  #413ECE 0%, rgb(26, 26, 26) 80%);
  }

  @media (min-width: 1256px) {
    background: radial-gradient(1475px 1475px at top -20%  right -20%,  #413ECE 0%, rgb(26, 26, 26) 80%);
  }

  @media (min-width: 1440px) {
    background: radial-gradient(1475px 1475px at top -40%  right -20%,  #413ECE 0%, rgb(26, 26, 26) 80%);
  }
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
