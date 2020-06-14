import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = true
Vue.use(VueRouter)

Vue.component('go-back', {
  template: `
    <button @click='goBack'>Go back</button>
  `,
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
})

const router1 = new VueRouter({
  routes: [
    { path: '/foo', component: { template: '<div>foo <go-back></go-back></div>' } },
    { path: '/bar', component: { template: '<div>bar <go-back></go-back></div></div>' } },
  ]
})

const router2 = new VueRouter({
  routes: [
    { path: '/foo', component: { template: '<div>foo <go-back></go-back></div>' } },
    { path: '/bar', component: { template: '<div>bar <go-back></go-back></div></div>' } },
  ]
})

// Инициализация компонента с шаблоном в html
new Vue({
  el: '#app-1',
  router: router1,
  data: {text: 'Hello from new Vue'},
})

new Vue({
  el: '#app-2',
  router: router2,
  data: {text: 'Hello from new Vue'},
})
