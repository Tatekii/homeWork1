<template>
  <a class="small-card-block card pointer" :href="'http://www.'+cardData.platform+'.com'" target="_blank">
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
  </a>
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
  height: 80px;
  background: var(--CardBg--);
  border-radius: 6px;
  margin-bottom: 24px;
  padding: 28px;
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
  padding-top: 20px;
}
.data .number {
  font-size: 34px;
}
.line-adjust {
  padding-top: 18px;
}
</style>
