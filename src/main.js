import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
// import './assets/font/font.css'
import browserRedirect from './utils/device'
import './assets/style/desktopLayout.css'
import './assets/font/Inter-VariableFont_slnt,wght.ttf'

Vue.config.productionTip = false

//make svgComponent
import SvgIcon from '@/components/SvgIcon'
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const req = require.context('./assets/icon', true, /\.svg$/);
requireAll(req)
Vue.component('svg-icon',SvgIcon)

Vue.use(Antd);

const device = browserRedirect();
console.log(device);

new Vue({
  render: h => h(App),
}).$mount('#app')
