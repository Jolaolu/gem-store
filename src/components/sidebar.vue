<template>
  <aside class="sidebar">
    <div class="sidebar__brand">
    <div
      class="sidebar__close"
      @click="$emit('sidebar-close')"
    >
      <svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#F1F2F8"
          d="M2.065.454l13.89 13.89-1.112 1.11L.954 1.565z"
        />
        <path
          fill="#F1F2F8"
          d="M.954 14.343L14.844.454l1.11 1.11-13.889 13.89z"
        />
      </svg>
    </div>
      <img  class="logo" :src="require('@/assets/gemnote-logo.png')" alt="Gemnote name and logo" srcset="">
      <h5 class="sidebar__user">Ashley Wong</h5>
    </div>
    <ul class="sidebar__nav">
      <nav-item v-for="(option, index) in options" :title="option" :key="index"/>
    </ul>
  </aside>
</template>
<script>
export default {
  components: {
    'nav-item': () => import('@/components/nav-item.vue')
  },
  data () {
    return {
      options: ['Dashboard', 'Orders', 'Send a gift', 'Users', 'Integrations', 'Settings', 'Logout']
    }
  }
}
</script>
<style lang="scss" scoped>
.sidebar{
  width: 20%;
  height: 100%;
  padding-top: 5vh;
  min-height: 100vh;
  background-color: $primary-color;
  &__brand{
    padding-left: 5rem;
    padding-right: 7rem;
  }
  &__close{
    @include screen (menner){
      display: none;
      margin-bottom: 3rem;
    }
  }
  &__user{
    color: $white;
    font-size: 2rem;
    font-weight: $font-bold;
    padding-bottom: 3rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid $secondary-color;
  }
}
.logo{
  width: 100%;
  margin-bottom: 4rem;
}

</style>
