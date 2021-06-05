<template>
  <div class="wrapper">
    <div class="top-partten"></div>
    <div class="body-wrapper">
      <header class="header">
        <div class="left">
          <div class="title">Social Media Dashboard</div>
          <div class="views">
            Total Follwers: {{ formatNum(totalFollwers) }}
          </div>
        </div>
        <div class="right">
          <div class="switch-title">Dark Mode</div>
          <ASwitch></ASwitch>
        </div>
      </header>
      <section class="changes">
        <BigCard v-for="item in sum" :key="item.platform" :cardData="item" />
      </section>
      <section class="overview">
        <p class="overview-title">Overview - Today</p>
        <div class="overview-list">
          <SmallCard
            v-for="item in overViewsFormat"
            :key="item.b_index"
            :cardData="item"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import '@/assets/style/common.css';
import '@/assets/style/darkTheme.css'
import BigCard from
  '@/components/BigCard/BigCard'
import SmallCard from '@/components/SmallCard/SmallCard'
import ASwitch from '@/components/ASwitch/ASwitch'
import commaFormat from '@/assets/helper/commaFormat.js'
export default {
  name: 'Home',
  components: {
    BigCard,
    SmallCard,
    ASwitch
  },
  data () {
    return {
      sum: [
        {
          platform: 'facebook',
          name: '@nathanf',
          number: 1987,
          compare: 12,
        },
        {
          platform: 'twitter',
          name: '@nathanf',
          number: 1066,
          compare: 99,
        },
        {
          platform: 'instagram',
          name: '@realnathanf',
          number: 11000,
          compare: 1099,
        },
        {
          platform: 'youtube',
          name: 'Nathan F.',
          number: 8239,
          compare: -144,
        }
      ],
      overViews: [
        {
          platform: 'facebook',
          data: [
            {
              type:'page views',
              number: 87,
              compare: 3
            },
            {
              type:'likes',
              number: 52,
              compare: -2
            }
          ]
        },
        {
          platform: 'instagram',
          data: [
            {
              type:'profile views',
              number: 52000,
              compare: 1375
            },
            {
              type:'likes',
              number: 5462,
              compare: 2257
            }
          ]
        },
        {
          platform: 'twitter',
          data: [
            {
              type:'retweetws',
              number: 117,
              compare: 303
            },
            {
              type:'likes',
              number: 507,
              compare: 553
            }
          ]
        },
        {
          platform: 'youtube',
          data: [
            {
              type:'likes',
              number: 107,
              compare: -19
            },
            {
              type:'total views',
              number: 1407,
              compare: -12
            }
          ]
        }
      ]

    }
  },
  methods: {
    formatNum: function (num) {
      return commaFormat(num)
    }
  },
  computed: {
    overViewsFormat () {
      return this.overViews.reduce((acc, cur) => {
        let platform = cur.platform
        let k = 0
        for (let i = 0; i < cur.data.length; i++) {
          let j = cur.data[i]
          j.platform = platform
          j._index = k++
          acc.push(j)
        }
        return acc
      }, [])
    },
    totalFollwers () {
      return this.sum.reduce((acc, cur) => {
        acc += cur.number
        return acc
      }, 0)
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
}
.top-partten {
  background: var(--TopBg--);
  height: 240px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.body-wrapper {
  position: relativ;
  margin-top: -240px;
  width: 100%;
  padding: 30px 100px;
}
.header {
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header .left {
}
.header .left .title {
  font-size: 30px;
}
.header .left .views {
  color: var(--CardText--);
}
.header .right {
  height: 66px;
  line-height: 66px;
  display: flex;
  width: 10%;
  justify-content: space-between;
}
.header .right .switch-title {
  color: var(--CardText--);
}
.changes {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 34px;
}
.overview {
}
.overview .overview-title {
  font-size: 24px;
  margin-bottom: 20px;
}
.overview .overview-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
