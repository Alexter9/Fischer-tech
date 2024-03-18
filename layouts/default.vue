<script setup>
import { useAppStore } from '~/stores/appStore'

const { showOrderModal } = storeToRefs(useAppStore())
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <Navbar />
    <slot />
    <Footer class="mt-6 desktop:mt-40" />

    <Transition name="fade" mode="out-in">
      <LazyOrderModal v-if="showOrderModal" />
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
