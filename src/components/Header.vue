<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { DEVICES } from '../types/deviceTypes';

defineProps<{
  deviceType: DEVICES
}>();

const links = [
  {
    title: 'кто',
    to: '#who',
  },
  {
    title: 'зачем',
    to: '#why',
  },
  {
    title: 'услуги',
    to: '#services',
  },
  {
    title: 'галерея',
    to: '#gallery',
  },
  {
    title: 'контакты',
    to: '#contacts',
  },
];

const lastScrollTop = ref(0);
const isScrollingDown = ref(false);
const isScrollOnTop = computed(() => lastScrollTop.value < 50)
const onScroll = () => {
  const scrollTop = document.scrollingElement?.scrollTop || 0;
  isScrollingDown.value = lastScrollTop.value < scrollTop;
  lastScrollTop.value = scrollTop;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll)
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
});

const isLinksVisible = ref(false);
</script>

<template>
  <header
    :style="{
      transform: isScrollingDown && !isScrollOnTop ? 'translateY(-100%)' : 'translateY(0)',
    }"
    class="header"
    :class="{'header--desktop': deviceType === DEVICES.DESKTOP}"
  >
    <div class="header__container">
      <template v-if="deviceType !== DEVICES.DESKTOP">
        <div class="header__top-row">
          <a class="header__logo" href="/">Гульмира<span class="green-text">SMM</span></a>
          <button class="header__button button" @click="isLinksVisible = !isLinksVisible">
            <div class="button__hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <div
          :class="{'header__links--closed': !isLinksVisible}"
          class="header__links"
        >
          <a @click="isLinksVisible = false" v-for="link in links" :href="link.to">{{ link.title }}</a>
        </div>
      </template>

      <template v-else>
        <a href="/">Гульмира<span class="green-text">SMM</span></a>
        <a @click="isLinksVisible = false" v-for="link in links" :href="link.to">{{ link.title }}</a>
      </template>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background: black url(../assets/images/noise.svg);
  transition: transform .3s ease-in;
  &--desktop {
    .header__container {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: minmax(0, 100%);
    }
    a {
      font-size: 0.5em !important;
      text-align: center;
      outline: var(--outline);
      padding: 12px var(--indent);
      cursor: pointer;
    }
  }
  &__container {
    height: 100%;
    width: 100%;
    margin: 0 var(--margin);
    max-width: var(--desktop-container-width);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    outline: var(--outline);
    position: relative;
  }
  &__top-row {
    width: 100%;
    height: 50px;
    display: flex;
  }
  &__logo {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    outline: var(--outline);
    align-items: center;
    padding-left: 8px;
  }
  &__links {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all .2s ease-in-out;
    outline: var(--outline);
    position: absolute;
    z-index: 99;
    top: 100%;
    a {
      padding: 8px 0;
      outline: var(--outline);
      width: 100%;
      text-align: center;
      background: black;
    }
    &--closed {
      opacity: 0;
      top: -100%;
      z-index: -999;
      pointer-events: none;
    }
  }
  a {
    font-size: 1em;
    text-transform: uppercase;
    font-family: 'Square721 BdEx BT';
  }
  .button {
    width: 30%;
    height: 100%;
    outline: var(--outline);
    display: flex;
    align-items: center;
    justify-content: center;
    &__hamburger {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 16px;
      width: 16px;
      span {
        background-color: white;
        width: 100%;
        height: 3px;
      }
    }
  }
}
</style>
