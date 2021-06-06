<template>
  <div class="pointer">
      <a-switch
        :checked="isChecked"
        :loading="loading"
        @change="onChange"
        @click="onClick"
      />
  </div>
</template>
<script>

export default {
  data () {
    return {
      loading: false
    };
  },
  props: {
    isChecked: Boolean
  },
  methods: {
    onChange (checked) {
      this.$emit('switchTheme', checked)
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
.ant-switch::after {
  background-color: var(--TopBg--);
}
.ant-switch {
  background: var(--Toggle--);
}
.ant-switch-checked {
  background: var(--Toggle--);
}
</style>