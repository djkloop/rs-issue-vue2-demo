import Vue from 'vue';
import App from './App.vue';
// 加载各种vue插件
import xPlugins from "@/plugins/x";
import './index.css';

Vue.use(xPlugins)

new Vue({
  el: '#root',
  render: (h) => h(App),
});
