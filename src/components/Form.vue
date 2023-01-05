<script setup lang="ts">
import { reactive, ref } from 'vue';
import { vMaska } from "maska";
import axios from 'axios';
import ThxModal from './ThxModal.vue';

const isThxModalVisible = ref(false);
const form = reactive({
  name: '',
  whatsapp: '',
});

const submit = async () => {
  const hostName = import.meta.env.VITE_HOSTNAME;
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
  <form @submit.prevent="submit" class="form">
    <h2 class="glitch" title="хотите так же?">хотите так же?</h2>
    <p>Между вами и результатом всего лишь эта форма. Оставь свои данные и я свяжусь с вами
      для обсуждения проекта.
    </p>
    <input v-model="form.name" type="text" required placeholder="Ваше имя">
    <input v-model="form.whatsapp" v-maska data-maska="+7 ### ### ####" type="text" required placeholder="Ваш номер Whatsapp">
    <button class="spinning-button" type="submit">Обсудить проект</button>
  </form>
</template>

<style lang="scss" scoped>
.form {
  background-image: url(../assets/images/purple-noise.svg);
  margin: 1px 0;
  padding: var(--indent) var(--double-indent);

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
}
</style>