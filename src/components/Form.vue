<script setup lang="ts">
import { reactive, ref, ComputedRef, inject } from 'vue';
import { vMaska } from "maska";
import axios from 'axios';
import ThxModal from './ThxModal.vue';
import { DEVICES } from '../types/deviceTypes';

const deviceType: ComputedRef<DEVICES> | undefined = inject('deviceType');

const isThxModalVisible = ref(false);
const form = reactive({
  name: '',
  whatsapp: '',
});

const submit = async () => {
  const hostName = window.location.protocol + '//' + window.location.hostname + '/';
  try {
    await axios.post(hostName, form);
    isThxModalVisible.value = true;
  } catch (error) {
    console.log('{error}', {error});
  }
  form.name = '';
  form.whatsapp = '';
}
</script>

<template>
  <ThxModal v-model="isThxModalVisible"></ThxModal>
  <div id="form" class="form" :class="{ 'form--desktop': deviceType === DEVICES.DESKTOP }">
    <form @submit.prevent="submit">
      <h2 class="glitch" title="хотите так же?">хотите так же?</h2>
      <p>Между вами и результатом всего лишь эта форма. Оставь свои данные и я свяжусь с вами
        для обсуждения проекта.
      </p>
      <input v-model="form.name" type="text" required placeholder="Ваше имя">
      <input v-model="form.whatsapp" v-maska data-maska="+7 ### ### ####" type="text" required placeholder="Ваш номер Whatsapp">
      <button class="spinning-button" type="submit">Обсудить проект</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form {
  background-image: url(../assets/images/purple-noise.svg);
  &--desktop {
    form {
      display: grid !important;
      grid-template-areas:
        "h h b"
        "p p b"
        "i1 i2 b"
    }
    h2 {
      grid-area: h;
    }
    p {
      grid-area: p;
    }
    input:first-of-type {
      grid-area: i1;
    }
    input:last-of-type {
      grid-area: i2;
    }
    button {
      grid-area: b;
      width: fit-content !important;
      padding: 26px;
    }
  }
  form {
    margin: 1px var(--margin);
    padding: var(--indent) var(--indent);
    max-width: var(--desktop-container-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    h2 {
      margin: 0;
    }
    p {
      margin: 0;
      width: 100%;
    }
    input {
      background-image: url(../assets/images/purple-noise.svg);
      border: 1px solid rgb(162, 162, 162);
      outline: none;
      height: 2.875em;
      margin: 8px 0;
      padding: 0 16px;
      width: 100%;
      &:focus {
        border: 1px solid white;
        &::placeholder {
          color: white;
        }
      }
      &::placeholder {
        color: rgb(162, 162, 162);
        font-weight: 700;
        width: fit-content;
      }
    }
    button {
      width: calc(100% - 48px * 2);
    }
  }
}
</style>