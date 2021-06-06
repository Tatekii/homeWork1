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
          <ASwitch
            @switchTheme="switchTheme"
            :isChecked="switchState"
          ></ASwitch>
        </div>
      </header>
      <section class="changes">
        <draggable class="changes-wrapper" v-model="sum"
          ><BigCard v-for="item in sum" :key="item.platform" :cardData="item"
        /></draggable>
      </section>
      <section class="overview">
        <p class="overview-title">Overview - Today</p>
        <div class="overview-list">
          <draggable class="overview-wrapper" v-model="overViews">
            <SmallCard
              v-for="item in overViews"
              :key="item.b_index"
              :cardData="item"
          /></draggable>
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
import draggable from 'vuedraggable'

export default {
  name: 'Home',
  components: {
    BigCard,
    SmallCard,
    ASwitch,
    draggable
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
      // overViews: [
      //   {
      //     platform: 'facebook',
      //     data: [
      //       {
      //         type: 'page views',
      //         number: 87,
      //         compare: 3
      //       },
      //       {
      //         type: 'likes',
      //         number: 52,
      //         compare: -2
      //       }
      //     ]
      //   },
      //   {
      //     platform: 'instagram',
      //     data: [
      //       {
      //         type: 'profile views',
      //         number: 52000,
      //         compare: 1375
      //       },
      //       {
      //         type: 'likes',
      //         number: 5462,
      //         compare: 2257
      //       }
      //     ]
      //   },
      //   {
      //     platform: 'twitter',
      //     data: [
      //       {
      //         type: 'retweetws',
      //         number: 117,
      //         compare: 303
      //       },
      //       {
      //         type: 'likes',
      //         number: 507,
      //         compare: 553
      //       }
      //     ]
      //   },
      //   {
      //     platform: 'youtube',
      //     data: [
      //       {
      //         type: 'likes',
      //         number: 107,
      //         compare: -19
      //       },
      //       {
      //         type: 'total views',
      //         number: 1407,
      //         compare: -12
      //       }
      //     ]
      //   }
      // ],
      overViews: [
        {
          short: 'f_p',
          compare: 3,
          number: 87,
          platform: 'facebook',
          type: 'page views'
        },
        {
          short: 'f_l',
          compare: -2,
          number: 52,
          platform: 'facebook',
          type: 'likes'
        },
        {
          short: 'i_p',
          compare: 1375,
          number: 52000,
          platform: 'instagram',
          type: 'profile views'
        },
        {
          short: 'i_l',
          compare: 2257,
          number: 5462,
          platform: 'instagram',
          type: 'likes'
        },
        {
          short: 't_r',
          compare: 303,
          number: 117,
          platform: 'twitter',
          type: 'retweetws'
        },
        {
          short: 't_l',
          compare: 553,
          number: 507,
          platform: 'twitter',
          type: 'likes'
        },
        {
          short: "y_l",
          compare: -19,
          number: 107,
          platform: 'youtube',
          type: 'likes'
        },
        {
          short: 'y_t',
          compare: -12,
          number: 1407,
          platform: 'youtube',
          type: 'total views'
        }
      ],
      switchState: true,
      sumShowOrder: [],
      overViewOrder: []
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
        localStorage.setItem('theme', 'dark')
      } else {
        lightSheet.disabled = false
        darkSheet.disabled = true
        localStorage.setItem('theme', 'light')
      }
      this.switchState = !this.switchState

    },
    handleSort (e) {
      console.log(e);
    }
  },
  computed: {
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
    } else {
      this.switchState = true
    }
  },
  beforeDestroyed () {
    // storage order
    // localStorage.setItem('sort',[1,2,3])
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
.changes-wrapper {
  display: flex;
  width: 100%;
}
.overview .overview-title {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
