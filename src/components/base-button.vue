<template>
  <button type="button" class="btn">
    {{ title }}
  </button>
</template>
<script>
export default {
  props: ['title']
}
</script>
<style lang="scss" scoped>
.btn {
  border: none;
  background: transparent;
  font-weight: 600;
  font-size: 1.2rem;
  max-height: 4rem;
  padding: 1rem;
  border: 1px solid $primary-color;
  @include screen(large) {
    font-size: 1.8rem;
    font-weight: 700;
  }
}
</style>
