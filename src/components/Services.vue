<script setup lang="ts">
import { ref } from 'vue';
import { DEVICES } from '../types/deviceTypes';

defineProps<{
  deviceType: DEVICES
}>();

const services = [
  {
    title: 'Выстраивание стратегии',
    desc: 'SMM-стратегия помогает выиграть время и сохранить бюджет. Благодаря ей бренд продвигается в социальных сетях, завоевывает внимание и лояльность аудитории. Стратегия помогает понять, в каком направлении двигаться, какие каналы и инструменты использовать, экспериментировать с минимальными рисками.'
  },
  {
    title: 'Настройка воронки продаж',
    desc: 'Все покупатели проходят похожий путь — от незнания компании и ее продукта до покупки. Этот путь и есть воронка продаж. Конечно, можно просто настроить таргетированную рекламу с конкретным оффером — одиночный пост для каждого из сегментов аудитории. Но чтобы говорить об эффективности рекламы и лояльности аудитории, мы должны познакомиться с человеком и «за ручку» привести его к покупке.'
  },
  {
    title: 'Создание контента',
    desc: 'Подготовка и публикаций контента для социальных сетей. Написание постов, профессиональная фото- и видео-сьемка, формирование рубрикатора тем для постов, создание контент плана на месяц.'
  },
  {
    title: 'Подготовка визуала',
    desc: 'Визуал страницы: дизайн аватара, иконок, подбор цветовой палитры, цветовая обработка фотографий. Создание материалов, которые будут ассоциироваться с брендом.'
  },
  {
    title: 'Отслеживание заявок',
    desc: 'Анализировать всплеск интереса к товарам и услугам заказчика и его конкурентов, работать с системами автомониторинга и знать принципы мониторинга соцсетей вручную, выявлять источники негативных мнений о продвигаемом бренде, проводить опросы и исследования'
  },
  {
    title: 'Подготовка аналитических отчетов',
    desc: 'Отчет по работе SMM-специалиста — это важный документ, в котором сообщается о проделанной работе, о предстоящей работе, о планах и, возможно, нововведениях. В этом же отчете видно, что никто никого нигде не обманул.'
  },
];

const activeServiceIndex = ref(0)
</script>

<template>
  <div v-if="deviceType !== DEVICES.DESKTOP" id="services" class="services">
    <div class="services__title">
      <h2 title="мои услуги" class="purple-text glitch">мои услуги</h2>
    </div>
    <div class="services__points">
      <details class="services__point point" v-for="(point, index) in services" :key="index">
        <summary>
          <h3>{{ point.title }}</h3>
          <img class="point__icon--closed" src="../assets/images/plus.svg" alt="plus">
          <img class="point__icon--open" src="../assets/images/minus.svg" alt="plus">
        </summary>
        <p>{{ point.desc }}</p>
      </details>
    </div>
    <div class="services__note note">
      <div class="note__icon"></div>
      <span class="note__text green-text">Каждый проект уникален, поэтому стоимость каждой услуги расчитывается после предварительного диалога</span>
    </div>
  </div>

  <div v-else class="services-desktop">
    <h2 title="мои услуги" class="purple-text glitch">мои услуги</h2>
    <div class="services-desktop__body">
      <div class="services-desktop__list list">
        <button
          v-for="(service, index) in services"
          :key="index"
          @click="activeServiceIndex = index"
          class="list__button"
        >
          <div v-if="activeServiceIndex === index" class="list__button__active-icon"></div>
          {{ service.title }}
        </button>
      </div>
      <div class="services-desktop__preview preview">
        <div class="preview__image">
          {{ services[activeServiceIndex].desc }}
        </div>
        <div class="preview__note note">
          <div class="note__icon"></div>
          <span class="note__text green-text">Каждый проект уникален, поэтому стоимость каждой услуги расчитывается после предварительного диалога</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services-desktop {
  margin: 0 var(--margin);
  max-width: var(--desktop-container-width);
  outline: var(--outline);
  padding-bottom: var(--indent);
  h2 {
    margin: var(--indent);
    display: inline-block;
  }
  &__body {
    display: flex;
  }
  .list {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    padding-right: var(--indent);
    &__button {
      cursor: pointer;
      border-top: 1px solid var(--color-gray);
      border-bottom: 1px solid var(--color-gray);
      padding: 16px var(--indent);
      position: relative;
      &__active-icon {
        position: absolute;
        width: 144px;
        height: 144px;
        background: url(../assets/images/star-eye.svg) center/contain no-repeat;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
  }
  .preview {
    flex-basis: 50%;
    padding: 0 var(--indent);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__image {
      padding: 0 var(--indent);
      background: url(../assets/images/paper.png) center/cover no-repeat;
      color: black;
      font-size: 0.8em;
      flex-basis: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .note {
      display: flex;
      &__icon {
        width: 64px;
        height: 64px;
        margin-right: 16px;
        margin-bottom: var(--indent);
        background: url(../assets/images/purple-star.svg) center/contain no-repeat;
        flex: 1 0 auto;
      }
      &__text {
        margin-top: auto;
      }
    }
  }
}
.services {
  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: var(--outline);
    padding: var(--indent);
    margin: 0 var(--indent);
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
    transition: all .3s ease-in-out;
    h3 {
      font-size: 1em;
      display: inline;
    }
    p {
      margin-top: 16px;
    }
    summary::marker {
      font-size: 0;
    }
    summary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all .3s ease-in-out;
    }
    &[open] {
      .point__icon {
        &--closed {
          display: none;
        }
        &--open {
          display: inline-block;
        }
      }
    }
    .point__icon {
      &--open {
        display: none;
      }
    }
  }
  .note {
    display: flex;
    align-items: flex-start;
    outline: var(--outline);
    margin: 0 var(--indent);
    padding: var(--indent);
    &__text {
      font-size: 0.9em;
      width: fit-content;
      font-weight: 700;
    }
    &__icon {
      width: 64px;
      height: 64px;
      margin-right: 16px;
      background: url(../assets/images/purple-star.svg);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}
</style>