import { createApp } from 'vue'
import ElementUI from 'element-plus'
import "element-plus/lib/theme-chalk/index.css"
import App from './App.vue'

const Vue=createApp(App);
Vue.use(ElementUI);
Vue.mount('#app');
