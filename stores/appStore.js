import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const showOrderModal = ref(false)

  function toggleOrderModal() {
    showOrderModal.value = !showOrderModal.value
  }

  return {
    showOrderModal,
    toggleOrderModal,
  }
})
