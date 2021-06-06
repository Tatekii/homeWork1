<template>
    <div class="big-card-block card pointer">
      <div class="top-border" :class="cardData.platform + '-line'"></div>
      <div class="platform">
        <svg-icon
          :icon-class="cardData.platform"
          style="width: 2em; height: 2em; vertical-align: middle"
        ></svg-icon>
        <span class="platName">{{ cardData.name }}</span>
      </div>
      <div class="count">{{ formatNum(cardData.number) }}</div>
      <p class="followers">FOLLOWERS</p>
      <div v-if="cardData.compare > 0">
        <div class="compare">
          <svg-icon icon-class="up" style="vertical-align: middle"></svg-icon>
          {{ compareAbs(cardData.compare) }} Today
        </div>
      </div>
      <div v-else>
        <div class="compare red animate__shakeY">
          <svg-icon icon-class="down" style="vertical-align: middle"></svg-icon>
          {{ compareAbs(cardData.compare) }} Today
        </div>
      </div>
    </div>
</template>

<script>
import formatNumToK from '@/assets/helper/kFormat.js'
export default {
  name: 'BigCard',
  props: {
    cardData: Object
  },
  methods: {
    compareAbs (num) {
      return Math.abs(num)
    },
    formatNum (num) {
      return formatNumToK(num)
    }
  }
}
</script>

<style scoped>
.big-card-block {
  height: 220px;
  background: var(--CardBg--);
  text-align: center;
  display: flex;
  flex-direction: column;
}
.top-border {
  height: 4px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.platform {
  font-size: 12px;
  color: var(--CardText--);
  height: 50px;
  line-height: 50px;
}
.platform .platName {
  color: var(--CardText--);
  margin-left: 4px;
  padding-top: 3px;
}
.count {
  font-size: 56px;
}
.followers {
  font-size: 12px;
  font-weight: lighter;
  letter-spacing: 6px;
  color: var(--CardText--);
  margin-bottom: 20px;
}
.compare {
  height: 16px;
  line-height: 16px;
  color: var(--LimeGreen--);
}
.compare.red {
  color: var(--BrightRed--);
}
</style>