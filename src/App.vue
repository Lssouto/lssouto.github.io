<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <loader :show="loader"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Loader from './components/Loader.vue';

export default {
  name: 'app',
  data() {
    return {
      loader: false,
    };
  },
  components: {
    HelloWorld,
    Loader,
  },
  mounted() {
    const vm = this;
    setTimeout(() => {
      vm.loader = true;
    }, 2000);
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
</style>
