<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <index />
    <loader :show="loader"/>
  </div>
</template>

<script>
import Index from './views/index/Index.vue';
import Loader from './components/Loader.vue';

export default {
  name: 'app',
  data() {
    return {
      loader: false,
    };
  },
  components: {
    Index,
    Loader,
  },
  mounted() {
    setTimeout(() => {
      document.querySelector('#app').style.opacity = '1';
    }, 1750);
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  position: relative;
  color: $text-color;
  opacity: 0;
  @extend .fast-e;
}
</style>
