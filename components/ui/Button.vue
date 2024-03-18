<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'medium',
  },
  icon: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['click'])

const { color, size, icon } = toRefs(props)

const buttonStyle = computed(() => {
  const result = {}

  if (color.value === 'primary') {
    result['bg-primary'] = true
    result['text-white'] = true
    result['primary-hover'] = true
  } else {
    result['bg-white'] = true
    result['text-black'] = true
  }

  switch (size.value) {
    case 'small': {
      result['h-9'] = true
      result['text-3'] = true
      result['leading-4'] = true
      result['px-4'] = true
      result['py-2.5'] = true
      result['font-600!'] = true

      if (icon.value) {
        result['!w-11.5'] = true
      }

      break
    }
    case 'large': {
      result['h-17.5'] = true
      result['text-5.5'] = true
      result['px-9'] = true
      result['py-7'] = true
      result['leading-5.5'] = true

      if (icon.value) {
        result['!w-17.5'] = true
      }

      break
    }
    case 'medium':
    default: {
      result['h-12'] = true
      result['text-4'] = true
      result['leading-4.5'] = true
      result['px-6'] = true
      result['py-2'] = true
      result['leading-4.5'] = true

      if (icon.value) {
        result['!w-14'] = true
      }

      break
    }
  }

  if (icon.value) {
    result['!px-0'] = true
  }

  return result
})
</script>

<template>
  <component
    v-bind="$attrs"
    :is="href ? 'a' : 'button'"
    :href="href"
    class="rounded-full w-fit font-500 uppercase flex items-center justify-center transition-all duration-200 border-0 font-400 cursor-pointer whitespace-nowrap"
    :class="buttonStyle"
    @click="emit('click')"
  >
    <slot />
  </component>
</template>

<style scoped>
/*.primary-hover:hover {
  background: #0136bd;
}

.secondary-hover:hover {
  background: #032D9B;
  color: #fff;
}
*/
</style>
