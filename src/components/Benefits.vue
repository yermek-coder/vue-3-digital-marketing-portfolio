<script setup lang="ts">
import { inject, ComputedRef } from 'vue';
import { DEVICES } from '../types/deviceTypes';

const deviceType: ComputedRef<DEVICES> | undefined = inject('deviceType');

const benefits = [
  {
    title: 'Привлечете новых клиентов',
    desc: 'Работа с таргетированной рекламой и лидерами мнений позволяет моментально получать результат '
     + 'попадая в свою целевую аудиторию по низкой стоимости, относительно других каналов маркетинга'
  },
  {
    title: 'Повысите узнаваемость бренда',
    desc: 'Узнаваемость формирует позитивное восприятие о бренде, повышает лояльность и уровень доверия '
      + 'в следствии этого снижается стоимость привлечения новых клиентов.'
  },
  {
    title: 'Укрепите хорошую репутацию',
    desc: 'Социальные сети позволяют оперативно реагировать на негативные комментарии, влиять на мнение '
      + 'о продукте или бренде. Отрабатывать негатив и раскрывать сильные стороны.'
  },
];
</script>

<template>
  <div :class="{'benefits--desktop': deviceType === DEVICES.DESKTOP}" id="why" class="benefits">
    <div class="benefits__title">
      <h2 title="со мной вы" class="purple-text glitch">со мной вы</h2>
    </div>
    <div class="benefits__points">
      <div class="benefits__point" v-for="(point, index) in benefits" :key="index">
        <h3 class="green-text">{{ point.title }}</h3>
        <p>{{ point.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.benefits {
  &--desktop {
    margin: var(--margin);
    max-width: var(--desktop-container-width);
    .benefits__points {
      margin: 0;
      flex-wrap: nowrap;
    }
  }
  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: var(--outline);
    padding: var(--indent);
    max-width: var(--desktop-container-width);
    margin: 0 var(--margin);
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
    h3 {
      margin-bottom: 8px;
    }
  }
}
</style>