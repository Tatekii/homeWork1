<template>
  <div class="small-card-block card pointer">
    <section class="title">
      <span>{{ cardData.platform }}</span>
      <svg-icon
        :icon-class="cardData.platform"
        style="width: 2em; height: 2em; vertical-align: middle"
      ></svg-icon>
    </section>
    <section class="data">
      <div class="number">{{ formatNum(cardData.number) }}</div>
      <div v-if="cardData.compare > 0">
        <div class="compare">
          <svg-icon icon-class="up" style="vertical-align: middle"></svg-icon>
          {{ Math.abs(cardData.compare) }}%
        </div>
      </div>
      <div v-else>
        <div class="compare red animate__shakeY">
          <svg-icon icon-class="down" style="vertical-align: middle"></svg-icon>
          {{ Math.abs(cardData.compare) }}%
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import kFormat from '@/assets/helper/kFormat.js'
export default {
  name: 'SmallCard',
  props: {
    cardData: Object
  }, methods: {
    formatNum: kFormat
  }
}
</script>

<style scoped>
.small-card-block {
  height: 130px;
  background: var(--CardBg--);
  border-radius: 6px;
  margin-bottom: 24px;
  padding: 30px;
}
.title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.title span {
  color: var(--CardText--);
}
.data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 12px;
}
.data .number {
  font-size: 34px;
}
.data .compare {
  padding-top: 18px;
  color: var(--LimeGreen--);
}
.compare.red {
  color: var(--BrightRed--);
}
</style>
