import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Sv3Components from '@sv3-components/sv3-components'
const env = import.meta.env
console.log(env)
createApp(App).use(Sv3Components).mount('#app')
