import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Framework7 from 'framework7/dist/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js'

import About from './views/About'

import Framework7Styles from 'framework7/dist/css/framework7.css';

Vue.use(Framework7Vue, Framework7)
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
    framework7: {
        routes: [
            {
                path: '/about',
                component: About
            }
        ],
        name: 'My App',
        id: 'com.myapp.test',
        panel: {
            swipe: 'left',
        },
    }
}).$mount('#app')
