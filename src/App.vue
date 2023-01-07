<script setup lang="ts">
import { DEVICES } from './types/deviceTypes';
import Header from './components/Header.vue';
import Heroe from './components/Heroe.vue';
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';
import Benefits from './components/Benefits.vue';
import Services from './components/Services.vue';
import Empty from './components/Empty.vue';
import Networks from './components/Networks.vue';
import Gallery from './components/Gallery.vue';
import Form from './components/Form.vue';
import Links from './components/Links.vue';
import Promo from './components/Promo.vue';

enum INDENT {
  MOBILE = 24,
  DESKTOP = 48,
};

enum EMPTY_HEIGHT {
  MOBILE = 48,
  DESKTOP = 96
}

enum MARGIN {
  MOBILE = '24px',
  DESKTOP = 'auto',
};

const windowWidth = ref(0);
const deviceType = computed<DEVICES>(() => {
  if (DEVICES.MOBILE > windowWidth.value) return DEVICES.MOBILE;
  if (DEVICES.TABLET > windowWidth.value) return DEVICES.TABLET;
  return DEVICES.DESKTOP;
});

const onResize = async () => {
  windowWidth.value = window.innerWidth;
  await nextTick();
  const rootEl = document.querySelector(':root') as HTMLElement;

  const newIndent = deviceType.value === DEVICES.DESKTOP ? INDENT.DESKTOP : INDENT.MOBILE;
  const newMargin = deviceType.value === DEVICES.DESKTOP ? MARGIN.DESKTOP : MARGIN.MOBILE;
  const newEmptyHeight = deviceType.value === DEVICES.DESKTOP ? EMPTY_HEIGHT.DESKTOP : EMPTY_HEIGHT.MOBILE;

  rootEl?.style?.setProperty('--indent', `${newIndent}px`);
  rootEl?.style?.setProperty('--double-indent', `${newIndent * 2}px`);
  
  rootEl?.style?.setProperty('--margin', newMargin);
  rootEl?.style?.setProperty('--empty-height', `${newEmptyHeight}px`);
};

onMounted(() => {
  window.addEventListener('resize', onResize)
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
    <main class="main" ref="mainEl" :class="{ 'padding-desktop': deviceType === DEVICES.DESKTOP }">
      <Header :device-type="deviceType"></Header>

      <template v-if="deviceType === DEVICES.DESKTOP">
        <Promo></Promo>
        <Empty></Empty>
      </template>

      <Heroe :device-type="deviceType" class="intersection-target"></Heroe>
      <Empty></Empty>
      <Benefits :device-type="deviceType"></Benefits>
      <Empty></Empty>
      <Services :device-type="deviceType"></Services>
      <Empty></Empty>
      <Networks :device-type="deviceType"></Networks>
      <Empty></Empty>
      <Gallery :device-type="deviceType"></Gallery>
      <Empty></Empty>
      <Form :device-type="deviceType"></Form>
      <Empty></Empty>
      <Links :device-type="deviceType"></Links>
    </main>
</template>

<style scoped>
.main {
  padding: 50px 0;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}
.padding-desktop {
  padding-top: 36px;
  padding-bottom: 50px;
}
</style>
