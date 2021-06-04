<template>
  <div class="big-card-block">
    <div class="plantform">
      <div v-if="cardData.down" class="icon-down">
        <use xlink:href="#icon-down"></use>
      </div>
      <p>{{ cardData.name }}</p> 
    </div>
    <div class="count">{{ cardData.number }}</div>
    <p class="followers">FOLLOWERS</p>
    <div class="compare">{{ cardData.compare }}</div>
  </div>
</template>

<script>
export default {
  name: 'BigCard',
  components: {
  },
  props: {
    cardData: Object
  }
}
</script>

<style lang="css" scope>
.big-card-block {
  height: 220px;
  width: 22%;
  background: var(--CardBg--);
  border-radius: 6px;
  border-top: 2px solid red;
  text-align: center;
  display: flex;
  flex-direction: column;

}
.plantform{
  font-size:12px;
  color: var(--CardText--);
  height: 50px;
  line-height: 50px;
}
.count{
  font-size: 50px;
  letter-spacing:-4px;
}
.followers{
  font-size:12px;
  font-weight:lighter;
}

</style>
