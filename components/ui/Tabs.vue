<script setup>
import { useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  tabs: {
    type: Array,
    default: () => [],
  },
})

const emits = defineEmits(['update:modelValue'])

const currentTab = useVModel(props, 'modelValue', emits)
</script>

<template>
  <div class="flex w-full justify-between items-center gap-2">
    <div
      v-for="(tab, index) in tabs" :key="index"
      class="tab h-5 text-2.5 sm:(h-8 text-4.5) desktop:(font-600) whitespace-nowrap text-secondary font-500 duration-500 cursor-pointer"
      :class="{ 'active-tab': currentTab === tab.id }"
      @click="currentTab = tab.id"
    >
      {{ tab.text }}
    </div>
  </div>
</template>

<style scoped>
.active-tab {
  border-bottom: 2px solid;
  border-image-source: linear-gradient(307.72deg, #5B98F4 2.04%, #413ECE 98.59%);;
  border-image-slice: 1;
  color: #fff;
}

.tab {
  border-bottom: 2px solid #8C8C8C;
}
</style>
