<script setup lang="ts">
// import useIntersection from '../composables/useIntersection';
import { inject, ComputedRef } from 'vue';
// import gsap from 'gsap';
import { DEVICES } from '../types/deviceTypes';

const deviceType: ComputedRef<DEVICES> | undefined = inject('deviceType');

// const achievements = ref([
//   {
//     count: 0,
//     title: 'месяцев обучения'
//   },
//   {
//     count: 0,
//     title: 'реализованных проекта'
//   },
//   {
//     count: 0,
//     title: 'постоянных клиентов'
//   },
// ]);
// const trueCounts = [3, 52, 12];

// const targetClass = '.heroes-intersection-target';

// const getIndex = (el: HTMLElement): number => {
//   const indexString = el.getAttribute('index');
//   return parseInt(indexString || '0');
// }
// const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
//   entries.forEach((entry) => {
//     if(entry.isIntersecting) {
//       const { target } = entry;
//       const index = getIndex(target as HTMLElement);
//       gsap.to(achievements.value[index], {
//         duration: 1,
//         count: trueCounts[index],
//       })
//     }
//   });
// };
// useIntersection(targetClass, observerCallback);
</script>

<template>
  <div :class="{ 'hero--desktop': deviceType === DEVICES.DESKTOP }" id="who" class="hero">
    <div class="hero__top">
      <div class="hero__image"></div>
    </div>
    <div class="hero__text">
      <h2 title="обо мне" class="glitch">обо мне</h2>
      <p>Привет! Я Гульмира Каирбекова, SMM-специалист.
        Прошла обучение в образовательной платформе <span class="green-text">«The Flow»</span>, где набралась опыта ведения instagram, составлению контент-плана,
        визульному оформлению страницы, грамотному написанию текста, съемке первоклассных видео и не только.
        Сейчас нахожусь <span class="green-text">в свободном плавании</span>.
      </p>
    </div>
    <!-- <div class="hero__achive">
      <div
        class="hero__achive__point heroes-intersection-target"
        :index="index"
        v-for="(point, index) in achievements"
        :key="index"
      >
        <h2 class="achive__count green-text">{{ Math.round(point.count) }}</h2>
        <p class="achive__title">{{ point.title }}</p>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.hero {
  &--desktop {
    margin: 0 var(--margin);
    max-width: var(--desktop-container-width);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    & > div {
      margin: 0;
    }
    .hero__top {
      grid-row: 1/3;
      aspect-ratio: unset;
    }
    .hero__text, .hero__achive {
      padding: var(--indent) var(--desktop-indent);
    }
    .hero__text {
      grid-row: 1/3;
    }
  }
  &__top {
    aspect-ratio: 1;
    margin: 0 var(--indent);

    display: flex;
    align-items: center;
    justify-content: center;
    
    outline: var(--outline);
    background: url('../assets/images/double-circle.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &__image {
    width: 56%;
    aspect-ratio: 0.749;
    background-image: url(../assets/images/avatar.png);
    background-color: transparent;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    background-blend-mode: lighten;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: inherit;
      background-blend-mode: lighten;
      background-color: #00f;
      mix-blend-mode: darken;
      animation-duration: 2s;
      /* animation-duration: 5s; */ /*  less glitchy version */
      animation-iteration-count: infinite;
      animation-name: slide;
    }

    @keyframes slide {
      0% {
        transform: translateX(0);
      }

      5% {
        transform: translateX(0.5vw);
      }

      10% {
        transform: translateX(0vw);
      }
      
      70% {
        transform: translateX(0vw);
      }

      75% {
        transform: translateX(-0.5vw);
      }

      80% {
        transform: translateX(0vw);
      }
      
      100% {
        transform: translateX(0);
      }
    }
  }

  &__text {
    outline: var(--outline);
    margin: 0 var(--indent);
    text-align: start;
    padding: var(--indent);

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h2 {
      color: var(--color-accent);
      margin-bottom: var(--indent);
      line-height: 1.3;
    }
  }

  &__achive {
    display: flex;
    flex-direction: column;
    gap: var(--indent);
    margin: 0 var(--indent);
    padding: var(--indent);
    outline: var(--outline);
    &__point {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
    }
  }
}
</style>