<script setup>
const { showOrderModal, showSidebar } = storeToRefs(useAppStore())
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <Navbar />
    <slot />
    <Footer class="mt-6 desktop:mt-40" />

    <Transition name="slide">
      <LazySidebar v-if="showSidebar" />
    </Transition>

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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
