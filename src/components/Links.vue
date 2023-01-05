<template>
  <div :class="{ 'contacts--desktop': deviceType === DEVICES.DESKTOP }" id="contacts" class="contacts">
    <a v-for="(link, index) in contacts" :key="index" :href="link.url">{{ link.title }}</a>
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  margin: 0 var(--indent);
  outline: var(--outline);

  display: flex;
  flex-direction: column;
  &--desktop {
    flex-direction: row;
    margin: var(--margin);
    max-width: var(--desktop-container-width);
    a {
      font-size: 10px;
      width: 100%;
    }
  }
  a {
    padding: var(--indent);
    display: flex;
    align-items: center;
    justify-content: center;
    outline: var(--outline);
    font-family: 'Square721 BdEx BT';
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>

<script lang="ts" setup>
import { DEVICES } from '../types/deviceTypes';

defineProps<{
  deviceType: DEVICES
}>();

const contacts = [
  {
    title: 'g-kairbekova@list.ru',
    url: 'mailto: g-kairbekova@list.ru'
  },
  {
    title: '+7 (707) 490 490 2',
    url: 'tel:+77074904902'
  },
  {
    title: 'instagram',
    url: 'https://www.instagram.com/stardust.555/'
  },
  {
    title: 'telegram',
    url: 'https://t.me/gulmiraks'
  },
]
</script>