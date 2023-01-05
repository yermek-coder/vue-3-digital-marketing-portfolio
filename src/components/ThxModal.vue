<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps<{
  modelValue: boolean
}>();
</script>

<template>
  <div
    v-show="modelValue"
    @click.native="$emit('update:modelValue', false)"
    @scroll.stop.prevent
    class="modal"
  >
    <div class="modal__wrapper">
      <h1>Спасибо за обращение!</h1>
      <p>В течении суток, Я с Вами обязательно свяжусь</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.809);
  z-index: 999;
  &__wrapper {
    position: fixed;
    content: '';

    top: 50%;
    left: 50%;
    width: 70vw;
    height: fit-content;
    transform: translate(-50%, -50%);

    padding: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    outline: var(--outline);
    background: url('../assets/images/noise.svg') center/cover no-repeat;
  }
  h1 {
    font-size: 1.3em;
    margin-bottom: 32px;
  }
  h1, p {
    text-align: center;
  }
}
</style>