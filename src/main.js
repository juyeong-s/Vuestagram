import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;
// 글로벌한 변수 보관함     보관함에 {emitter : emitter}추가한 것
import store from './store.js'

app.use(store).mount('#app')
