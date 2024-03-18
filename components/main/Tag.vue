<script setup>

</script>

<template>
  <div class="tag w-fit rounded-8 h-10 font-500 flex items-center justify-center px-8 py-2 whitespace-nowrap uppercase md:(h-7 text-3 px-5) lg:(h-10 px-7) xl:(text-3.5)">
    <slot />
  </div>
</template>

<style scoped>
.tag {
  position: relative;
  background: linear-gradient(270deg, rgba(89, 89, 234, 0.68) 1.58%, rgba(68, 62, 183, 0) 100%);
  /* border: 1px solid #A2A0EB; */
}

/* .tag::before {
  content: "";
  position: absolute;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  background: linear-gradient(269.13deg, #A2A0EB -0.17%, rgba(255, 255, 255, 0) 98.4%);
  border-radius: 32px;
  z-index: -1;
} */
</style>
