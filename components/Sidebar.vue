<script setup>
import { usePointerSwipe } from '@vueuse/core'

const { toggleSidebar, navigation } = useAppStore()

const sidebar = ref(null)

const { isSwiping, direction } = usePointerSwipe(sidebar)

watch(isSwiping, (val) => {
  if (val && direction.value === 'left') {
    toggleSidebar()
  }
})
</script>

<template>
  <aside
    ref="sidebar"
    class="fixed top-0 bottom-0 left-0 right-0 p-6 z-50 bg-dark bg-opacity-94 backdrop-blur-md"
  >
    <div class="relative flex flex-col justify-center items-center h-full">
      <div class="fixed right-2 top-2 md:(right-18 top-4)">
        <UiIcon name="arrow" @click="toggleSidebar" />
      </div>

      <nav class="flex flex-col gap-10 overflow-y-auto text-center uppercase">
        <NuxtLink
          v-for="item of navigation"
          :key="item.text"
          :to="item.link"
          class="text-white text-5 font-500 hover:text-primary"
          @click="toggleSidebar"
        >
          {{ item.text }}
        </NuxtLink>
      </nav>
    </div>
  </aside>
</template>
