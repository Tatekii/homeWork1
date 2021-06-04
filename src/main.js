import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
// import './assets/font/font.css'

Vue.config.productionTip = false


const requireAll = requireContext => requireContext.keys().map(requireContext);
 
// import all svg
const req = require.context('./assets/icon', true, /\.svg$/);
requireAll(req)

Vue.use(Antd);

new Vue({
  render: h => h(App),
}).$mount('#app')
