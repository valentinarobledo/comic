<template>
  <div id="app" class="banner">
    <Header/>
    <Body/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'

export default {
  name: 'App',
  components: {
    Header,
    Body
  }
}
</script>

<style lang="scss">
#app {

  &.banner{
    background-image: url('./assets/background.jpg');
    background-size: cover;
    min-height: 100vh;
  }
}


</style>
