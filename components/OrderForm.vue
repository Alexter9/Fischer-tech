<script setup>
import sendMessage from '~/utils/sendMessage'

const emits = defineEmits(['close'])

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
  <form
    class="w-full max-w-160 min-h-122 relative flex flex-col gap-4 text-left bg-[rgba(26,26,26,1)] rounded-5"
    @click.stop
    @submit.prevent="makeOrder"
  >
    <div class="flex items-center text-white font-700 text-4 leading-5 lg:(text-6 leading-7)">
      <template v-if="!showSuccess">
        Мы готовы помочь вам<br class="md:hidden"> воплотить идеи в реальность
      </template>

      <template v-else>
        Спасибо за обращение!
      </template>
    </div>

    <p v-if="showSuccess" class="text-secondary">
      Мы получили вашу заявку и свяжемся с Вами в ближайшее время!
    </p>

    <div v-if="!showSuccess" class="flex flex-col gap-4">
      <UiInput v-model="orderData.name" required placeholder="Имя" />
      <UiInput v-model="orderData.email" required placeholder="Email" />
      <UiTextArea v-model="orderData.text" placeholder="Комментарий" />

      <UiButton type="submit" class="mt-6 w-60">
        НАЧАТЬ РАБОТУ С НАМИ
      </UiButton>
    </div>
  </form>
</template>
