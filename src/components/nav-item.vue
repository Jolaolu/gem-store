<template>
  <li class="nav__item">
    <router-link
      :to="`/${title.toLowerCase()}`"
      role="link"
      :aria-label="title"
      data-focusable="true"
    >
      <span class="nav__item-bg"></span>
      <p class="nav__item-title">{{ title }}</p>
    </router-link>
  </li>
</template>
<script>
export default {
  props: {
    title: {
      default: null,
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.nav__item {
  color: $white;
  margin: .5rem 0;
  font-weight: 700;
  font-size: 1.6rem;
  a{
    display: flex;
    align-items: center;
    height: 3.5rem;
  }
  &-bg {
    width: 0.2rem;
    margin-right: 5rem;
  }
  &-title{
    letter-spacing: .05rem;
  }
}
.router-link-active  span {
  background-color: $white;
  height: 100%;
}

.router-link-active {}

</style>
