<script setup>
import { useAppStore } from '~/stores/appStore'
import sendMessage from '~/utils/sendMessage'

const appStore = useAppStore()

const { showOrderModal } = storeToRefs(appStore)
const { toggleOrderModal } = appStore

const showSuccess = ref(false)

const orderData = ref({
  name: '',
  email: '',
  text: '',
})

async function makeOrder() {
  showSuccess.value = true
  await sendMessage(orderData.value)
}
</script>

<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center px-5 bg-secondary bg-opacity-15 backdrop-blur-sm"
    @click.stop="toggleOrderModal"
  >
    <form
      class="w-full max-w-120 relative flex flex-col gap-12 text-center bg-[rgba(26,26,26,1)] px-6 py-9 rounded-5"
      @click.stop
      @submit.prevent="makeOrder"
    >
      <UiIcon
        name="arrow"
        class="absolute cursor-pointer top-6 right-3 text-primary"
        :filled="true"
        @click.stop="toggleOrderModal"
      />

      <div class="text-white font-600 text-4 leading-6 w-60 self-center desktop:(text-5 w-100)">
        <template v-if="!showSuccess">
          Мы готовы помочь вам<br>воплотить идеи в реальность
        </template>

        <template v-else>
          Спасибо за обращение!
        </template>
      </div>

      <p v-if="showSuccess" class="text-secondary">
        Мы получили вашу заявку и свяжемся с Вами в ближайшее время!
      </p>

      <div v-if="!showSuccess" class="flex flex-col gap-4">
        <UiInput v-model="orderData.name" required placeholder="Ваше имя" />
        <UiInput v-model="orderData.email" required placeholder="Email" />
        <UiTextArea v-model="orderData.text" placeholder="Комментарий" />

        <UiButton type="submit" class="mx-auto mt-5 w-60">
          НАЧАТЬ РАБОТУ С НАМИ
        </UiButton>
      </div>
    </form>
  </div>
</template>
