<template>
  <nav class="">
      <button @click="$emit('sidebar-open')">
        <svg
          width="25"
          height="8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#F1F2F8" d="M0 0h25v2H0zM0 6h25v2H0z" />
        </svg>
      </button>
  </nav>
</template>
<style lang="scss" scoped>
nav {
  @include screen(custom, max, 576) {
    width: 100%;
    height: 4rem;
    background: $primary-color;
    padding: 1rem
  }
}
button {
  border: none;
  background: transparent;
}

</style>
