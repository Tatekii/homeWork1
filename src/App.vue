<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from '@/view/Home/Home'

export default {
  name: 'App',
  components: {
    Home
  }, created () {
  }
}
</script>

<style>
#app {
  font-family: "Inter";
  min-height: 100vh;
  background: var(--Bg--);
}
</style>
