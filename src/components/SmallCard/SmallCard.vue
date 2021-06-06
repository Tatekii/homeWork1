<template>
  <div class="small-card-block card pointer">
    <section class="title">
      <span>{{ capitalizeFirst(cardData.type) }}</span>
      <svg-icon
        :icon-class="cardData.platform"
        style="width: 2em; height: 2em; vertical-align: middle"
      ></svg-icon>
    </section>
    <section class="data">
      <div class="number">{{ formatNum(cardData.number) }}</div>
      <Arrow
        class="line-adjust"
        :compareNumber="cardData.compare"
        compareType="%"
      ></Arrow>
    </section>
  </div>
</template>
<script>
import kFormat from '@/assets/helper/kFormat.js'
import Arrow from '@/components/CompareArrow/CompareArrow'
import capitalizeFirst from '@/assets/helper/upperCaseFirstLetter.js'
export default {
  name: 'SmallCard',
  components: { Arrow },
  props: {
    cardData: Object
  }, methods: {
    formatNum: kFormat,
    capitalizeFirst
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
.line-adjust {
  padding-top: 18px;
}
</style>
