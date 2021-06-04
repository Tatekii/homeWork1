<template>
  <div id="app">
    <Desktop></Desktop>
  </div>
</template>

<script>
import Desktop from '@/view/Home/Home'
export default {
  name: 'App',
  components: {
Desktop
  },
  created () {
    // function browserRedirect () {
    //   var sUserAgent = navigator.userAgent.toLowerCase();
    //   var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    //   var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    //   var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    //   var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    //   var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    //   var bIsAndroid = sUserAgent.match(/android/i) == "android";
    //   var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    //   var bIsWM = sUserAgent.match(/windows phone/i) == "windows mobile";
    //   var bIsMobile = sUserAgent.match(/mobile/i) == "mobile";
    //   var bIsPlaybook = sUserAgent.match(/playbook/i) == "playbook";

    //   if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || bIsMobile || bIsPlaybook) {
    //     // mobile
    //     console.log('mobile');
    //   } else {
    //     // pc
    //     console.log('pc');
    //   }
    // }

    // browserRedirect()
  }
}
</script>

<style>
#app{
  position: relative;
  font-family: 'Inter';
}
</style>
