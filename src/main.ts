import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import { loadAllPlugins } from './plugins'
import 'vant/lib/index.css'

const app = createApp(App)
loadAllPlugins(app)

console.log(import.meta.env.VUE_APP_BASE_API)

app.use(router).use(store).mount('#app')
