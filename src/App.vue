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
  },
  mounted(){
    let k = document.getElementsByClassName('skeleton')[0]
    document.getElementById('app').removeChild(k)
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
