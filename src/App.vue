<template>
  <div>
  <showOdds />

  <img alt="Vue logo" src="./assets/logo.png">
</div>
</template>

<script>
import showOdds from './views/showOdds.vue'

export default {
  name: 'App',
  components: {
    showOdds
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
