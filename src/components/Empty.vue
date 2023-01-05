<template>
  <div class="empty"><div></div></div>
</template>

<style lang="scss" scoped>
.empty {
  padding: 0 var(--margin);
  height: var(--empty-height);
  display: flex;
  justify-content: center;
  div {
    width: 100%;
    max-width: var(--desktop-container-width);
    height: 100%;
    outline: var(--outline);
  }
}
</style>