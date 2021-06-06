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
        <div class="compare red">
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

