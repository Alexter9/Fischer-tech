<script setup>
import Consulting from '~/components/services/Consulting.vue'
import Automatization from '~/components/services/Automatization.vue'
import Infrastructure from '~/components/services/Infrastructure.vue'

const tabs = [
  { id: 'Consulting', text: 'КОНСАЛТИНГ' },
  { id: 'Automatization', text: 'СИСТЕМЫ АВТОМАТИЗАЦИИ' },
  { id: 'Infrastructure', text: 'ИНФРАСТРУКТУРА' },
]

const components = {
  Consulting,
  Automatization,
  Infrastructure,
}

const currentTab = ref(tabs[0].id)
</script>

<template>
  <section class="w-full flex flex-col items-center gap-10 px-5 desktop:(items-start px-15 gap-25) max-w-[1440px] self-center">
    <h2 class="text-white text-6.5 font-700 text-center desktop:(text-16 leading-20 text-left )">
      Выполняем <span class="text-gradient">самый полный</span> <br class="hidden desktop:inline"> перечень услуг
    </h2>

    <UiTabs v-model="currentTab" class="desktop:(w-60%)" :tabs="tabs" />

    <Transition name="fade" mode="out-in">
      <component :is="components[currentTab]" />
    </Transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
