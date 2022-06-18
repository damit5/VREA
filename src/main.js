import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
import axios from "axios"  // 引入

const app = createApp(App).use(router)
installElementPlus(app)
app.config.globalProperties.axios = axios // 将axios挂载到全局变量，后面可以通过 this.axios 调用
app.mount('#app')