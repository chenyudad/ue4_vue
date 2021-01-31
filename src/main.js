import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 
import App from './App.vue'; 

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
// Vue.prototype.$ = axios;
//调试时改为true,生产消息。
//发布版本改为false
Vue.config.productionTip = false 
new Vue({ 
  render: h => h(App),
}).$mount('#app')