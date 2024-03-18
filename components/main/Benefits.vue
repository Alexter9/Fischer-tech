<script setup>

</script>

<template>
  <section class="benefits flex flex justify-center">
    <div class="laptop-background relative max-w-[1440px] flex flex-col py-8 px-5 text-center md:(px-15 text-left)">
      <h2 class="text-white text-6.5 font-700 md:(text-left text-7) desktop:(text-10)">
        Чем мы занимаемся
      </h2>

      <p class="mt-5 mb-5 desktop:(text-5)">
        Наши услуги нацелены на решение самых<br class="md:hidden"> сложных задач<br class="hidden desktop:inline"> бизнеса, чтобы удовлетворить ваши уникальные потребности.
      </p>

      <ul class="text-start flex flex-col gap-4 px-5 desktop:(text-5)">
        <li>Разрабатываем инновационные программные<br class="hidden desktop:inline"> или программно-<br class="md:hidden">аппаратные решения</li>
        <li>Оптимизируем бизнес-процессы</li>
        <li>Обеспечиваем надежную<br class="desktop:hidden"> поддержку</li>
        <li>Создаем индивидуальные<br class="desktop:hidden"> решения</li>
      </ul>

      <div class="laptop hidden desktop:flex h-[450px] w-[550px] absolute bottom-0 right-15" />
    </div>
  </section>
</template>

<style scoped>
.benefits {
  background: linear-gradient(92.92deg, #413ECE 15.76%, #4D67E0 96.57%);
}

.laptop-background {
  background-image: url('~/assets/img/laptop-small.png');
  width: 100%;
  background-size: auto 250px;
  background-repeat: no-repeat;
  background-position: bottom 0 right -10px;

  @media (min-width: 742px) {
    background-image: url('~/assets/img/laptop.png');
    background-position: bottom 0 right -50px;
    background-size: auto 350px;
  }

  @media (min-width: 1440px) {
    background-image: none;
    background-position: bottom 0 right -50px;
    background-size: auto 350px;
  }
}

.laptop {
  background-image: url('~/assets/img/laptop.png');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
