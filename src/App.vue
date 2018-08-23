<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <index />
    <loader :show="loader"/>
  </div>
</template>

<script>
import Index from './views/Index.vue';
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
    console.log('App Start');
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
  margin-top: 60px;
  position: relative;
}
</style>
