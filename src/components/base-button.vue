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
  z-index: 999;
  position: relative;
  background: transparent;
  font-weight: 600;
  font-size: 1.2rem;
  max-height: 4rem;
  padding: 1rem;
  border: 1px solid $primary-color;
  overflow: hidden;
  &:hover {
    color: $white;
    will-change: background-color;
    &::before {
      position: absolute;
      z-index: -999;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      animation: active 0.2s ease-in;
      background-color: $primary-color;
    }
  }
  @include screen(large) {
    font-size: 1.3rem;
    font-weight: 600;
  }
  @include screen(larger) {
    font-size: 1.5rem;
    font-weight: 700;
  }
}
@keyframes active {
  from {
    transform: translateX(-300px);
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  }
  to {
    border-top-right-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
  }
}
</style>
