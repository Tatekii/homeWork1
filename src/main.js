import Vue from 'vue';
import App from './App';
import './assets/font/Inter-VariableFont_slnt,wght.ttf'
import { Switch,Button } from 'ant-design-vue'
import '@/assets/style/common.css'

Vue.config.productionTip = false

//make svgComponent
import SvgIcon from '@/components/SvgIcon'
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const req = require.context('./assets/icon', true, /\.svg$/);
requireAll(req)
Vue.component('svg-icon',SvgIcon)

// Vue.use(Antd);
Vue.use(Switch)
Vue.use(Button)

new Vue({
  render: h => h(App),
}).$mount('#app')
