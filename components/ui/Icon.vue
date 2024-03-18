<script setup>
defineProps({
  name: {
    type: String,
    default: '',
  },
  filled: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <NuxtIcon class="flex items-center justify-center" :name="name" :filled="filled" />
</template>
