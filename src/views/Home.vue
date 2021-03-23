<template>
  <div class="home">
    <sidebar
      class="sidebar"
      :class="[hamburger ? 'sidebar__open' : '']"
      @sidebar-close="hamburger = false"
    />
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
  width: 80%;
  padding-top: 6rem;

  @include screen(menner) {
    padding-left: 7rem;
    padding-right: 7rem;
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
.sidebar__open {
  display: block;
  z-index: 999;
  position: fixed;
}
.sidebar {
  top: 0;
  bottom: 0;
  @include screen(min) {
  }
}
</style>
