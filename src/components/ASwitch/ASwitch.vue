<template>
  <div>
    <a-switch default-checked @change="onChange" />
  </div>
</template>
<script>
export default {
  data () {
    return {};
  },
  methods: {
    onChange (checked) {
      console.log(`a-switch to ${checked}`);
    },
  },
};
</script>
<style scoped>
.ant-switch::after {
  background-color: var(--TopBg--);
}
.ant-switch{
  background: var(--Toggle--)
}
.ant-switch-checked {
    background:var(--Toggle--)
}
</style>