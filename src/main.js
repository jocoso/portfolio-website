import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/views/Home'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {    
            path: '/',
            component: Home
        }
    ]
})

createApp(App).mount('#app')
