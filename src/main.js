// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'leaflet/dist/leaflet.css'

import echarts from 'echarts' // 引入echarts

// 自定义样式
import './assets/style/customClass.scss'

import './assets/iconfont/iconfont.css' // iconfont图标
import './assets/iconfont/iconfont.js' // 地图样式

import * as L from 'leaflet'
import './assets/plugins/leaflet-mapkey-icon-master/dist/L.Icon.Mapkey.js'
import './assets/plugins/leaflet-mapkey-icon-master/dist/L.Icon.Mapkey.css'
import './assets/plugins/leaflet-mapkey-icon-master/dist/MapkeyIcons.css'

/* leaflet icon */
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.use(Element)
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
