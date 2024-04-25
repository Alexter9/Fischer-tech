<script setup>
const showDropdown = ref(false)

function open() {
  showDropdown.value = true
}

function close(delay = 0) {
  setTimeout(() => {
    showDropdown.value = false
  }, delay)
}
</script>

<template>
  <div class="relative inline-block" @mouseenter="open" @mouseleave="close(300)">
    <span
      class="flex items-center gap-6 cursor-pointer hover:text-primary w-fit"
      :class="{ 'text-primary': showDropdown }"
    >
      <slot />
    </span>

    <Transition name="slide">
      <div v-if="showDropdown" class="absolute z-10 pt-2 -left-6 dropdown-content">
        <div class="p-6 bg-dark rounded-6 drop-shadow-lg">
          <slot name="content" :close="close" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  opacity: 1;
  transition: all 0.2s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-5%);
}

.rotated-icon {
  transform: rotate(180deg);
}
</style>
