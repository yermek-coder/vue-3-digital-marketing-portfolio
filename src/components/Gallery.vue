<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import useIntersection from '../composables/useIntersection';
import { DEVICES } from '../types/deviceTypes';
import image1 from '../assets/images/gallery/1.png';
import story1 from '../assets/images/gallery/story1.jpg';
import story2 from '../assets/images/gallery/story2.jpg';
import instPage1 from '../assets/images/gallery/insta-page-1.jpg';
import instPage2 from '../assets/images/gallery/insta-page-2.jpg';

import video1 from '../assets/images/gallery/video1.mp4';
import video1Poster from '../assets/images/gallery/video1.jpg';
import video2 from '../assets/images/gallery/video2.mp4';
import video2Poster from '../assets/images/gallery/video2.jpg';
import video3 from '../assets/images/gallery/video3.mp4';
import video3Poster from '../assets/images/gallery/video3.jpg';

const props = defineProps<{
  deviceType: DEVICES
}>();

const slides = [
  {
    url: instPage2,
    tag: 'div'
  },
  {
    url: instPage1,
    tag: 'div'
  },
  {
    url: video1,
    tag: 'video',
    poster: video1Poster
  },
  {
    url: image1,
    tag: 'div'
  },
  {
    url: video2,
    tag: 'video',
    poster: video2Poster
  },
  {
    url: video3,
    tag: 'video',
    poster: video3Poster
  },
  {
    url: story1,
    tag: 'div'
  },
  {
    url: story2,
    tag: 'div'
  },
];

const activeSlideIndex = ref(0);
const getIndex = (el: Element): number => {
  const indexString = el.getAttribute('index');
  return parseInt(indexString || '0');
};
const setActiveSlideIndex = (entries: IntersectionObserverEntry[]) => {
  if (props.deviceType !== DEVICES.DESKTOP) return;
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      const { target } = entry;
      activeSlideIndex.value = getIndex(target as Element);
    }
  });
};
useIntersection('gallery__slides-inner__content', setActiveSlideIndex);

const slidesWrapperEl = ref<Element | null>(null);
const slideEls = ref<Element[]>([]);
const pickSlide = (offset: -1 | 1) => {
  slideEls.value[activeSlideIndex.value + offset]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
};

onMounted(() => {
  slideEls.value = [...(slidesWrapperEl.value?.querySelectorAll('.gallery__slides-inner') || [])];
});
</script>

<template>
  <div id="gallery" class="gallery" :class="{'gallery--desktop': deviceType === DEVICES.DESKTOP}">
    <div class="gallery__title"><h2 title="галерея" class="purple-text glitch">галерея</h2></div>
    <div v-if="deviceType === DEVICES.DESKTOP" class="gallery--desktop__navigation">
      <button class="button button--left" @click="pickSlide(-1)" :is-disabled="activeSlideIndex === 0"></button>
      <button class="button button--right" @click="pickSlide(1)" :is-disabled="activeSlideIndex === slides.length - 1"></button>
    </div>
    <div ref="slidesWrapperEl" class="gallery__slides">
      <div class="gallery__slides-inner" v-for="(slide, index) in slides" :key="index">
        <component
          :is="slide.tag"
          class="gallery__slides-inner__content"
          :index="index"
          :style="{
            backgroundImage: slide.tag === 'div' ? `url(${slide.url})` : null
          }"
          controls
          preload="none"
          :poster="slide?.poster"
        >
          <source :src="slide.url" type="video/mp4">
        </component>
        <img class="gallery__slides-inner__star" src="../assets/images/purple-star.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  &--desktop {
    margin: var(--margin);
    max-width: var(--desktop-container-width);
    display: grid;
    grid-template-columns: 1fr minmax(0, 1fr);
    grid-template-rows: 164px 1fr;
    .gallery__title {
      margin: 0;
    }
    &__navigation {
      display: grid;
      grid-template-columns: 1fr 1fr;
      outline: var(--outline);
      .button {
        text-align: center;
        align-self: center;
        justify-self: center;
        cursor: pointer;
        width: 70%;
        height: 70%;
        &[is-disabled=true] {
          opacity: 0.5;
          pointer-events: none;
        }
        &--left {
          background: url(../assets/images/arrow-left.svg) center/contain no-repeat;
        }
        &--right {
          background: url(../assets/images/arrow-right.svg) center/contain no-repeat;
        }
      }
    } 
    .gallery__slides {
      width: auto !important;
      height: auto !important;
      aspect-ratio: 1;
      margin: 0 !important;
      grid-row: 1/3;
      grid-column: 2;
      &-inner {
        
      }
      &::-webkit-scrollbar {
        height: 8px;
        width: 8px;
      }
      &::-webkit-scrollbar-track, &::-webkit-scrollbar-corner {
        opacity: 0;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--color-gray);
        border-radius: 100px;
      }
    }
  }
  &__title {
    margin: 0 var(--indent);
    padding: var(--indent);
    outline: var(--outline);

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__slides {
    background: url(../assets/images/ellipse.svg);
    outline: var(--outline);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    overflow-x: auto;
    margin: 0 var(--indent);
    width: calc(100vw - var(--double-indent));
    height: calc(100vw - var(--double-indent));

    scroll-snap-type: x mandatory;
    scroll-snap-stop: always;
    &-inner {
      width: calc(100vw - var(--double-indent));
      height: 100%;
      flex: 0 0 100%;
      scroll-snap-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &__content {
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 80%;
        height: 80%;
      }
      &__star {
        position: absolute;
        right: var(--indent);
        top: var(--indent);
      }
    }
  }
}
</style>