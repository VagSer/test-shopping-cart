import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './pages/router'
import UI from './components/UI/index'
import { createPinia } from 'pinia'

const app = createApp(App)

UI.forEach((component) => app.component(component.__name, component))

app.use(router)
   .use(createPinia())
       .mount('#app')
