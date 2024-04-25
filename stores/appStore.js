import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const showOrderModal = ref(false)
  const showSidebar = ref(false)

  const navigation = [
    { text: 'ГЛАВНАЯ', link: '/' },
    { text: 'Системы автоматизации бизнеса', link: '/services/business-automation' },
    { text: 'Заказная разработка', link: '/services/custom-development' },
    { text: 'IT-консалтинг и продуктовая разработка', link: '/services/product-consulting' },
    // { text: 'ПРОЕКТЫ', link: '/solutions' },
    // { text: 'УСЛУГИ', link: '/' },
    // { text: 'РАБОТА У НАС', link: '/' },
    // { text: 'ИНВЕСТОРАМ', link: '/' },
    // { text: 'PRO BONO', link: '/' },
    // { text: ' КОНТАКТЫ', link: '/' },
  ]

  function toggleOrderModal() {
    showOrderModal.value = !showOrderModal.value
  }

  function toggleSidebar() {
    showSidebar.value = !showSidebar.value
  }

  return {
    showOrderModal,
    showSidebar,
    navigation,
    toggleOrderModal,
    toggleSidebar,
  }
})
