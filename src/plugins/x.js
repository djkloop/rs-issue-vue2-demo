// element-ui + 自定义样式
import ElementUI from "element-ui";
import '@/style/element-variables.scss'

export default {
  async install(Vue, options) {
    Vue.use(ElementUI)
  },
};
