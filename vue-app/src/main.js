import Vue from 'vue'
import Vuex from 'vuex'
import Comp1 from './components/Comp1.vue'

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

const fileComponent = {
  store,
  render: h => h(Comp1)
}


const myComponent = {
  store,
  methods: {
    onclick() { alert('component alert') }
  },
  computed: {
    data() {
      return this.$store.state.data
    }
  }
}

new Vue({
  el: '#app',
  methods: {
    onclick() { alert('app alert') }
  },
  components: {
    'my-component': myComponent,
    'file-component': fileComponent,
  }
});
