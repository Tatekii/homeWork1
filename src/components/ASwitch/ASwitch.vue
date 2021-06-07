<template>
  <div class="pointer outer-wrapper" @click="onChange">
    <div class="inner-wrapper">
      <div class="slideroad">
        <div
          class="switch"
          :class="isChecked ? 'slideChecked' : 'slideunChecked'"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
    };
  },
  props: {
    isChecked: Boolean
  },
  methods: {
    onChange () {
      this.$emit('switchTheme')
    },
    onClick () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
};
</script>
<style scoped>
.outer-wrapper {
  position: relative;
  width: 44px;
}
.inner-wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  height: 20px;
  background: var(--Toggle--);
  margin-top: -10px;
  width: 44px;
  border-radius: 10px;
}
.slideroad {
  height: 18px;
  width: 40px;
  margin-top: 1px;
  margin-left: 2px;
}
.switch {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: var(--TopBg--);
}
.slideunChecked {
  transition:ease-out .3s;
  transform: translateX(0);
}
.slideChecked {
  transition:ease-out .3s;
  transform: translateX(22px);
}
</style>