<script setup>
import { useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const value = useVModel(props, 'modelValue', emit)
</script>

<template>
  <div class="relative h-15 rounded-2.5 bg-#1A1A1A">
    <input
      v-bind="$attrs"
      v-model="value"
      type="text"
      class="w-full absolute z-1 top-0 left-0 right-0 bottom-0 h-full p-5 bg-transparent rounded-2.5 text-white text-4 outline-none border-none placeholder-secondary"
    >
    <div class="card absolute top-0 right-0 bottom-0 left-0 rounded-2.5 z-0" />
  </div>
</template>

<style scoped>
.card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.27) 100%);
  opacity: 0.2;
}
</style>
