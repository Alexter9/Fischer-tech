<script setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
  subtext: {
    type: String,
    default: '',
  },
  img: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <article class="w-35 flex flex-col gap-2.5">
    <img :src="img" class="h-35">

    <div class="flex flex-col text-3 leading-3.5 font-600 gap-1.5">
      {{ text }}

      <span v-if="subtext" class="text-2.5 font-400 leading-3">{{ subtext }}</span>
    </div>
  </article>
</template>
