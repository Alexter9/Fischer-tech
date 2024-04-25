<script setup>
defineProps({
  heading: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="flex flex-col text-black text-3 leading-3.5 lg:(text-4 leading-4.5) desktop:(text-5 leading-6 gap-4)">
    <div class="flex gap-2 items-center font-600 md:(gap-5)">
      <UiIcon name="checkCircle" class="lg:w-8" />
      {{ heading }}
    </div>

    <div class="pl-8">
      <slot />
    </div>
  </div>
</template>
