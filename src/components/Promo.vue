<script setup lang="ts">
const points = [
  'Регулярная отчетность о проделанной работе',
  'Подбор подходящей соц сети для бизнеса',
  'Комплексный подход к решению задачи',
  'Гарантия роста активной аудитории',
]
</script>

<template>
  <div class="promo">
    <div class="promo__top">
      <div class="promo__top-title">
        <h1 class="glitch bordered-text" title="smm">smm</h1>
        <h1 class="glitch" title="про">про</h1>
        <h1 class="glitch" title="дви">дви</h1>
        <h1 class="glitch" title="жение">жение</h1>
      </div>
      <button class="spinning-button">Получить бесплатную<br>консультацию</button>
      <p>Повышение продаж и узнаваемости бренда,
        формирование положительного имиджа с помощью
        популярных социальных сетей
      </p>
    </div>
    <div class="promo__points points">
      <div class="points__point" v-for="(point, index) in points" :key="index">
        <div class="points__icon"></div>
        <span class="points__desc">{{ point }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.promo {
  margin: var(--margin);
  max-width: var(--desktop-container-width);
  outline: var(--outline);
  display: flex;
  flex-wrap: wrap;
  &__top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 70% 30%;
    padding: var(--indent) 64px;
    &-title {
      grid-row: 1/3;
      h1 {
        margin: 0;
        line-height: 1.1;
      }
    }
    p {
      font-size: 0.75em;
      display: flex;
      align-items: flex-end;
      padding: 0 var(--desktop-indent);
      padding-bottom: 1.1em;
    }
    button {
      text-align: center;
      font-size: 10px;
      height: fit-content;
      padding: 24px;
      align-self: flex-end;
      &::after {
        content: '';
        position: absolute;
        width: 355%;
        height: 240%;
        bottom: -29%;
        background: url(../assets/images/star-on-orbit.svg) bottom/contain no-repeat;
        z-index: -2;
      }
    }
  }

  .points {
    display: grid;
    width: 100%;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    &__point {
      display: flex;
      justify-content: space-between;
      align-items: center;
      outline: var(--outline);
      padding: var(--indent);
    }
    &__icon {
      width: 16px;
      height: 16px;
      background: url(../assets/images/star.svg) center/contain no-repeat;
      margin-right: 8px;
    }
    &__desc {
      font-weight: 700;
      width: fit-content;
    }
  }
}
</style>