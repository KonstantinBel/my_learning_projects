import Vue from 'vue'
import app2 from './components/app-2.vue'
import SingleFileWithProps from './components/single-file-with-props.vue';

// Vue.config.productionTip = true

// Глобальная регистрация компонентов
Vue.component('single-file-with-props', SingleFileWithProps)

Vue.component('inline-with-props', {
  name: 'inline-with-props',
  props: ['text'],
})

// Инициализация компонента с шаблоном в html
new Vue({
  el: '#app-1',
  data: {text: 'Hello from new Vue'},
})


// Инициализация однофайлового компонента
new Vue({
  el: '#app-2',
  render: h => h(app2),
})
