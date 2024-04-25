<script setup>
const items = [
  {
    heading: 'Выделенные серверы',
    points: [
      { text: 'Устанавливаем серверы под ваши потребности в любом дата-центре по всему миру.' },
      { text: 'Настраиваем инфраструктуру, обеспечиваем безопасность и сохранность данных, передаем вам готовый продукт.' },
      { text: 'Подготовка к сертификации ФСТЭК, ФСБ и других контролирующих органов' },
    ],
  },
  {
    heading: 'Cloud solutions',
    points: [
      {
        text: 'Виртуальные серверы',
        subPoints: [
          'Количество ресурсов под запрос',
          'Гибкая система постоплаты',
          'Возможность подключения GPU',
        ],
      },
      {
        text: 'Managed Kubernetes',
        subPoints: [
          'Подготовка продуктов к миграции в облако',
          'Отказоустойчивые и автомасштабируемые кластеры',
          'Поддержка',
        ],
      },
    ],
    sla: true,
  },
  {
    heading: 'Поддержка ваших проектов',
    points: [
      {
        text: 'Настройка систем мониторинга и алертов',
        subPoints: [
          'Вы или ваша команда всегда первыми узнаете о любых сбоях',
        ],
      },
      {
        text: 'Обеспечение отказоустойчивости',
        subPoints: [
          'В случаях пиковых нагрузок ваши клиенты не заметят изменений в работе',
        ],
      },
      {
        text: 'IT-аудит',
        subPoints: [
          'Выявляем потенциальные угрозы работоспособности продукта и готовим исчерпывающий отчет об уязвимостях и недочетах с нашими рекомендациями',
        ],
      },
    ],
  },
]
</script>

<template>
  <article class="flex flex-col gap-8 text-secondary font-500 text-left leading-6 desktop:(gap-10)">
    <h3 class="text-white text-6 font-700 desktop:(text-20 leading-20)">
      Инфраструктура
    </h3>

    <div class="flex flex-col gap-8 desktop:(flex-row gap-10)">
      <div
        v-for="item of items" :key="item.heading"
        class="relative flex flex-1 flex-col justify-center gap-4 p-6 rounded-2.5 desktop:(justify-start p-10 font-600)"
      >
        <div class="card absolute top-0 right-0 bottom-0 left-0 rounded-2.5 z-0" />
        <div v-if="item.sla" class="sla absolute flex items-center justify-center w-20 h-7 text-white -top-3.5 right-3 rounded-8">
          SLA
        </div>
        <h4 class="text-5 text-white z-1 desktop:(text-center)">
          {{ item.heading }}
        </h4>

        <ol class="flex flex-col gap-5 m-0 p-0 pl-5 z-1">
          <li v-for="point of item.points" :key="point">
            {{ point.text }}
            <ul v-if="point.subPoints" class="flex flex-col gap-1 mt-2 p-0 pl-6 list-disc">
              <li v-for="subPoint of point.subPoints" :key="subPoint">
                {{ subPoint }}
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.27) 100%);
  opacity: 0.2;
}

.sla {
  background: linear-gradient(270deg, #5454F2 1.58%, #443EB7 100%);
  border: 1px solid #A2A0EB;
}

/* .sla::before {
  content: "";
  position: absolute;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  background: linear-gradient(270deg, #A2A0EB 100%, rgba(255, 255, 255, 0) 100%);
  border-radius: 32px;
  z-index: -1;
} */
</style>
