// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookies from 'vue-cookies'
import Router from 'vue-router'

VueCookies.config('1d')

Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.use(Router)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    render: (h) => h(App),
    components: { App }
})
