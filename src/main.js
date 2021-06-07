import Vue from 'vue';
import App from './App';
// import './assets/font/Inter-VariableFont_slnt,wght.ttf'
import '@/assets/style/common.css'
import SvgIcon from '@/components/SvgIcon'

Vue.config.productionTip = false

//make svgComponent
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const req = require.context('./assets/icon', true, /\.svg$/);
requireAll(req)


Vue.component('svg-icon',SvgIcon)


new Vue({
  render: h => h(App),
}).$mount('#app')
