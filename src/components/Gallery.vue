<script lang="ts" setup>
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

defineProps<{
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
]
</script>

<template>
  <div id="gallery" class="gallery" :class="{'gallery--desktop': deviceType === DEVICES.DESKTOP}">
    <div class="gallery__title"><h2 title="галерея" class="purple-text glitch">галерея</h2></div>
    <div v-if="deviceType === DEVICES.DESKTOP" class="fallery__navigation">
      <button>left</button>
      <button>right</button>
    </div>
    <div class="gallery__slides slides">
      <div class="slides__inner" v-for="(slide, index) in slides" :key="index">
        <component
          :is="slide.tag"
          class="slides__image"
          :style="{
            backgroundImage: slide.tag === 'div' ? `url(${slide.url})` : null
          }"
          controls
          preload="none"
          :poster="slide?.poster"
        >
          <source :src="slide.url" type="video/mp4">
        </component>
        <img src="../assets/images/purple-star.svg" alt="">
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
    .gallery__navigation {
      display: flex;
      outline: var(--outline);
    } 
    .slides {
      width: auto !important;
      height: auto !important;
      aspect-ratio: 1;
      margin: 0 !important;
      grid-row: 1/3;
      grid-column: 2;
      &__image {
        width: calc(100% / 4) !important;
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
  .slides {
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
    &__inner {
      width: calc(100vw - var(--double-indent));
      height: 100%;
      flex: 0 0 calc(100vw - var(--double-indent));
      scroll-snap-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      img {
        position: absolute;
        right: var(--indent);
        top: var(--indent);
      }
    }
    &__image {
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 80%;
      height: 80%;
    }
  }
}
</style>