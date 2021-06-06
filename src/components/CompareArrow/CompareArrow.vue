
<template>
  <div v-if="compareNumber > 0">
    <div class="compare">
      <svg-icon icon-class="up" style="vertical-align: middle"></svg-icon>
      {{ resText }}
    </div>
  </div>
  <div v-else>
    <div class="compare red animate__shakeY">
      <svg-icon icon-class="down" style="vertical-align: middle"></svg-icon>
      {{ resText }}
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    compareNumber: Number,
    compareType: String
  },
  computed:{
    resText(){
      return Math.abs(this.compareNumber) + (this.compareType==='%' ? ' %' : ' Today')
    }
  }
}
</script>

<style scoped>
.compare {
  color: var(--LimeGreen--);
}
.compare.red {
  color: var(--BrightRed--);
}
</style>
