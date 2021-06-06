<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from '@/view/Home/Home'
// import browserRedirect from './utils/device'

export default {
  name: 'App',
  components: {
    Home
  }, created () {
    // const clientType = browserRedirect()
    // if(clientType==='mobile'){
    //   console.log(clientType);
    // }else{
    //   const pcSheet = document.createElement('link')
    //   pcSheet.setAttribute('rel','stylesheet')
    //   pcSheet.setAttribute('href','./desktopLayout.css')
    //   document.head.appendChild(pcSheet)
    //   this.$nextTick()
    // }
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
