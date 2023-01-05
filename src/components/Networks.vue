<script setup lang="ts">
import { DEVICES } from '../types/deviceTypes';

defineProps<{
  deviceType: DEVICES
}>();

const networks = [
  {
    title: 'Instagram',
    desc: 'Полноценный бизнес-инструмент. Позволяет максимально вовлекать пользователей, удерживать их внимание и собирать статистику.'
     + 'Ядро аудитории люди от 18 до 30 лет.'
  },
  {
    title: 'Facebook',
    desc: 'Площадка для бизнес коммуникации. Используется для взаимодействия с активной и платежеспособной аудиторией.'
      + 'Позволяет продвигать товары с высокими ценниками.'
  },
];
</script>

<template>
  <div class="networks" :class="{'networks--desktop': deviceType === DEVICES.DESKTOP}">
    <div class="networks__title">
      <h3 class="green-text">Соцсети с которыми я работаю</h3>
    </div>
    <div class="networks__points">
      <div class="networks__point" v-for="(point, index) in networks" :key="index">
        <h4>{{ point.title }}</h4>
        <p>{{ point.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.networks {
  &--desktop {
    margin: var(--margin);
    max-width: var(--desktop-container-width);
    display: flex;
    .networks__title {
      margin: 0;
      flex-basis: 33%;
    }
    .networks__points {
      margin: 0;
      flex-wrap: nowrap;
      flex-basis: 67%;
    }
    .networks__point {
      flex-basis: calc(100% / 2);
    }
  }
  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: var(--outline);
    padding: var(--indent);
    margin: 0 var(--indent);
    font-size: 1.3em;
  }
  &__points {
    display: flex;
    flex-wrap: wrap;
    margin: 0 var(--indent);
  }
  &__point {
    padding: var(--indent);
    outline: var(--outline);
    width: 100%;
    h4 {
      margin-bottom: 16px;
    }
  }
}
</style>