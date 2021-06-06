import Vue from 'vue';
import App from './App';
import browserRedirect from './utils/device'
import './assets/style/desktopLayout.css'
import './assets/font/Inter-VariableFont_slnt,wght.ttf'
import { Switch,Button } from 'ant-design-vue'

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

const device = browserRedirect();
console.log(device);

new Vue({
  render: h => h(App),
}).$mount('#app')
