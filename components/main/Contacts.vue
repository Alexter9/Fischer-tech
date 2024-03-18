<script setup>
const itemsLeft = [
  {
    heading: 'Пишите',
    text: 'offer@fischer-tech.io',
    link: 'mailto:offer@fischer-tech.io',
    nowrap: true,
  },
  {
    heading: 'Москва',
    text: 'Пресненская наб., 12, 123317',
  },
]

const itemsRight = [
  {
    heading: 'Звоните',
    text: '+7 995 114 81 81',
    link: 'tel:+79951148181',
    nowrap: true,
  },
  {
    heading: 'telegram',
    text: '@FischerTech',
    link: 'https://t.me/FischerTech',
  },
  // {
  //   heading: '',
  //   text: 'whatsapp',
  // },
  {
    heading: 'linkedin',
    text: 'Перейти',
    link: 'https://www.linkedin.com/company/fischer-tech',
  },
]
</script>

<template>
  <section class="w-full flex flex-col items-center gap-8 px-5 desktop:(items-start gap-10 px-15 gap-25) max-w-[1440px] self-center">
    <h2 class="text-white text-6.5 font-700 text-center desktop:(text-left text-16 leading-20)">
      Контакты
    </h2>

    <div class="w-full flex flex-col gap-8 desktop:(flex-row gap-10 items-center)">
      <div class="flex justify-between gap-10 desktop:(w-50% gap-25)">
        <div class="flex flex-col gap-10 w-50%">
          <div v-for="item of itemsLeft" :key="item.heading" class="border flex flex-col gap-4 pb-3 min-h-10" :class="{ 'whitespace-nowrap': item.nowrap }">
            <h5 v-if="item.heading" class="text-5">
              {{ item.heading }}
            </h5>

            <a v-if="item.link" :href="item.link"> {{ item.text }}</a>
            <span v-else>{{ item.text }}</span>
          </div>
        </div>

        <div class="flex flex-col gap-10 w-50%">
          <div v-for="item of itemsRight" :key="item.heading" class="border flex flex-col gap-4 pb-3" :class="{ 'whitespace-nowrap': item.nowrap }">
            <h5 v-if="item.heading" class="text-5">
              {{ item.heading }}
            </h5>

            <a v-if="item.link" :href="item.link"> {{ item.text }}</a>
            <span v-else>{{ item.text }}</span>
          </div>
        </div>
      </div>

      <div class="w-full h-auto desktop:w-50%" style="position:relative;overflow:hidden;">
        <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Москва</a>
        <a href="https://yandex.ru/maps/213/moscow/house/presnenskaya_naberezhnaya_12/Z04YcwRnTUYDQFtvfXt1eHpgZw==/?indoorLevel=2&ll=37.537434%2C55.749633&utm_medium=mapframe&utm_source=maps&z=17.65" style="color:#eee;font-size:12px;position:absolute;top:14px;">Пресненская набережная, 12 — Яндекс Карты</a>
        <iframe class="w-full h-50 desktop:h-90" src="https://yandex.ru/map-widget/v1/?ll=37.537772%2C55.749689&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNzQ4OTk0ODY4EkvQoNC-0YHRgdC40Y8sINCc0L7RgdC60LLQsCwg0J_RgNC10YHQvdC10L3RgdC60LDRjyDQvdCw0LHQtdGA0LXQttC90LDRjywgMTIiCg1VJhZCFZ__XkI%2C&z=16.45" frameborder="1" allowfullscreen="true" style="position:relative;" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.border {
  border-bottom: 2px solid;
  border-image-source: linear-gradient(90.51deg, #413ECE -17.05%, #4D67E0 107.39%);
  border-image-slice: 1;
}

/* .map {
  background-image: url('~/assets/img/map.png');
  width: 100%;
  filter: grayscale(100);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
} */
</style>
