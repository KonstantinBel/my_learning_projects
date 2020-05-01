import Vue from 'vue'
import Vuex from 'vuex'
import Comp1 from './components/Comp1.vue'
import Comp2 from './components/Comp2.vue'

Vue.use(Vuex);
Vue.config.productionTip = true

const store = new Vuex.Store({
  state: {
    data: 'adaawewxd dsr trt'
  },
  mutations: {
    changeData(state, newData) {
      state.data = newData;
    }
  }
})

window.store = store;

new Vue({
  store,
  render: h => h(Comp1)
}).$mount('.js-app-1')

new Vue({
  store,
  render: h => h(Comp2)
}).$mount('.js-app-2')
