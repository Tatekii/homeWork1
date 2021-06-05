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
  background: linear-gradient( hsl(210, 78%, 56%) , hsl(146, 68%, 55%))
}
.ant-switch-checked {
    background:linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)
}
</style>