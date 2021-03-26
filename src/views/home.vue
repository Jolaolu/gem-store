<template>
  <div class="home">
    <transition name="fade">
      <sidebar
        class="sidebar"
        :class="[hamburger ? 'sidebar__open' : '']"
        @sidebar-close="hamburger = false"
      />
    </transition>
    <main :class="{ main: hamburger }">
      <navbar @sidebar-open="hamburger = true" />
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import sidebar from '@/components/sidebar'
import navbar from '@/components/navbar'
export default {
  name: 'Home',
  components: {
    sidebar,
    navbar
  },
  data () {
    return {
      hamburger: false
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
}
main {
  width: 100%;
  @include screen(custom, min, 577) {
    padding-top: 6rem;
    width: 80%;
  }
  @include screen(menner) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
  @include screen(larger) {
    padding-left: 10rem;
    padding-right: 10rem;
  }
}
.main {
  z-index: 0;
  display: absolute;
}
.sidebar {
  top: 0;
  bottom: 0;
  height: 100%;
  position: sticky;
  @include screen(custom, max, 576) {
    display: none;
  }
}
.sidebar__open {
  display: block !important;
  z-index: 999;
  position: fixed;
}
</style>
