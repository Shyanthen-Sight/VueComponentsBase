// import './assets/main.css'
// import MyComponent from './components/MyComponent.vue'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// 全局注册组件，在main里一次注册，整个工程范围内均可直接使用。
// 在vue3和vite开发环境下，尽量避免或不用
// app.component('my-component', MyComponent)

app.mount('#app')
