<template>
  <div class="wrapper">
    <div class="top-partten"></div>
    <div class="body-wrapper">
      <header class="header">
        <div class="left">
          <div class="title">Social Media Dashboard</div>
          <div class="views">Total Follwers:23,004</div>
        </div>
      </header>
      <section class="changes">
        <BigCard v-for="item in sum" :key="item.id" :cardData="item"/>
      </section>
      <section class="overview"></section>
    </div>
  </div>
</template>

<script>
import '@/assets/style/common.css';
import '@/assets/style/darkTheme.css'
import BigCard from 
'@/components/BigCard/BigCard'
export default {
  name: 'desktop',
  components:{
    BigCard
  },
  data () {
    return {
      sum: {
        facebook: {
          name: '@nathanf',
          number: 1987,
          compare: 12,
          id:1
        },
        twitter: {
          name: '@nathanf',
          number: 1066,
          compare: 99,
          id:2
        },
        instagram: {
          name: '@realnathanf',
          number: 11000,
          compare: 1099,
          id:3
        },
        youtube: {
          name: 'Nathan F.',
          number: 8239,
          compare: -144,
          id:4
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
* {
  color: var(--Text--);
}
.wrapper {
  background: var(--Bg--);
  height: 100vh;
}
.top-partten {
  background: var(--TopBg--);
  height: 240px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.body-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  padding: 30px 100px;
}
.header {
  margin-bottom: 30px;
}
.header .left {
}
.header .left .title {
  font-size: 30px;
}
.header .left .views {
  color: var(--CardText--);
}
.changes{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}
</style>
