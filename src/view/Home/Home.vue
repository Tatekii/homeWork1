<template>
  <div class="wrapper">
    <div class="top-patten"></div>
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
          <ASwitch @switchTheme="switchTheme" :isChecked="switchState"></ASwitch>
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
              type: 'page views',
              number: 87,
              compare: 3
            },
            {
              type: 'likes',
              number: 52,
              compare: -2
            }
          ]
        },
        {
          platform: 'instagram',
          data: [
            {
              type: 'profile views',
              number: 52000,
              compare: 1375
            },
            {
              type: 'likes',
              number: 5462,
              compare: 2257
            }
          ]
        },
        {
          platform: 'twitter',
          data: [
            {
              type: 'retweetws',
              number: 117,
              compare: 303
            },
            {
              type: 'likes',
              number: 507,
              compare: 553
            }
          ]
        },
        {
          platform: 'youtube',
          data: [
            {
              type: 'likes',
              number: 107,
              compare: -19
            },
            {
              type: 'total views',
              number: 1407,
              compare: -12
            }
          ]
        }
      ],
      switchState:true
    }
  },
  methods: {
    formatNum: function (num) {
      return commaFormat(num)
    },
    switchTheme (switchFlag) {
      const useDarkTheme = !switchFlag
      const darkSheet = document.getElementById('darkTheme')
      const lightSheet = document.getElementById('lightTheme')
      if (useDarkTheme) {
        lightSheet.disabled = true
        darkSheet.disabled = false
        localStorage.setItem('theme','dark')
      } else {
        lightSheet.disabled = false
        darkSheet.disabled = true
        localStorage.setItem('theme','light')
      }
      this.switchState = !this.switchState

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
  },
  created () {
    //false => darkmode
    let themeSetting = localStorage.getItem('theme')
    if (themeSetting === 'dark') {
      this.switchTheme(false)
      this.switchState = false
    }else{
      this.switchState = true
    }
  }
}
</script>

<style lang="css" scoped>
.wrapper {
  background: var(--Bg--);
}
.top-patten {
  background: var(--TopBg--);
  height: 240px;
}
.body-wrapper {
  position: relative;
  margin-top: -240px;
  width: 100%;
}
.header .left .views {
  color: var(--CardText--);
}
.header .right {
  height: 66px;
  line-height: 66px;
  display: flex;
  justify-content: space-between;
}
.header .right .switch-title {
  color: var(--CardText--);
}
.changes {
  display: flex;
  width: 100%;
}
.overview .overview-title {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
