<template>
  <div class="big-card-block">
    <div class="top-border"></div>
    <div class="plantform">
      <p>{{ cardData.name }}</p> 
    </div>
    <div class="count">{{ cardData.number }}</div>
    <p class="followers">FOLLOWERS</p>
    <div v-if="cardData.compare>0">
      <div class="compare">
      <svg-icon icon-class='up'></svg-icon>
      {{ compareAbs(cardData.compare) }} Today</div>
    </div>
    <div v-else>
      <div class="compare red">
      <svg-icon icon-class='down'></svg-icon>
      {{ compareAbs(cardData.compare) }} Today</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BigCard',
  components: {
  },
  props: {
    cardData: Object
  },
  methods: {
    compareAbs (num) {
      return Math.abs(num)
    }
  }
}
</script>

<style lang="css" scope>
.big-card-block {
  height: 220px;
  width: 22%;
  background: var(--CardBg--);
  border-radius: 6px;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.top-border {
  height: 2px;
  background: var(--Instagram--);
}
.plantform {
  font-size: 12px;
  color: var(--CardText--);
  height: 50px;
  line-height: 50px;
}
.count {
  font-size: 56px;
  letter-spacing: -4px;
}
.followers {
  font-size: 12px;
  font-weight: lighter;
}
.compare {
  height: 16px;
  line-height: 16px;
  font-size: 10px;
  font-weight: lighter;
  color: var(--LimeGreen--);
}
.compare.red{
  color:var(--BrightRed--)
}
</style>
