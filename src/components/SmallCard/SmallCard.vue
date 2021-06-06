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
        <div class="compare">
          <div v-if="cardData.compare > 0">
            <div class="compare">
              <svg-icon
                icon-class="up"
                style="vertical-align: middle"
              ></svg-icon>
              {{ Math.abs(cardData.compare) }}%
            </div>
          </div>
          <div v-else>
            <div class="compare red">
              <svg-icon
                icon-class="down"
                style="vertical-align: middle"
              ></svg-icon>
              {{ Math.abs(cardData.compare) }}%
            </div>
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
