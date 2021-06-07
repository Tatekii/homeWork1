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
  }
}
</script>

<style>
#app {
  font-family: "Inter", sans-serif;
  min-height: 100vh;
  background: var(--Bg--);
  width: 100%;
}
</style>
