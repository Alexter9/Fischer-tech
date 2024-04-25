<script setup>
const { toggleSidebar } = useAppStore()

const services = [
  { text: 'IT-консалтинг и продуктовая разработка', link: '/services/product-consulting' },
  { text: 'Системы автоматизации бизнеса', link: '/services/business-automation' },
  { text: 'Заказная разработка', link: '/services/custom-development' },
]
</script>

<template>
  <nav class="flex w-full justify-center md:justify-start p-6 md:(px-21 py-8) self-center relative max-w-[1440px]">
    <NuxtLink class="h-10 lg:h-15" to="/">
      <img class="h-10 lg:h-15" src="~/assets/img/logo.png">
    </NuxtLink>

    <div class="hidden pl-40 lg:flex items-center gap-8 text-4 leading-5 font-500 text-secondary">
      <NuxtLink to="/" class="text-secondary hover:text-primary">
        Главная
      </NuxtLink>
      <UiDropdown>
        Услуги
        <template #content="{ close }">
          <div class="flex flex-col gap-6 w-max text-4">
            <NuxtLink
              v-for="service in services"
              :key="service.text"
              :to="service.link"
              class="flex w-fit hover:text-primary"
              @click="close"
            >
              {{ service.text }}
            </NuxtLink>
          </div>
        </template>
      </UiDropdown>
    </div>

    <div class="absolute right-6 md:right-21 lg:hidden">
      <UiIcon class="h-5" name="menu" @click="toggleSidebar" />
    </div>
  </nav>
</template>
