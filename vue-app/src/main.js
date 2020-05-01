import Vue from 'vue'
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
  data: function() { return {text: 'Text from HTML component'} },
  methods: {
    onclick: function() {
      import('./components/app-2.vue')
        .then(({default: App2}) => {
          new Vue({
            el: '#app-2',
            render: h => h(App2),
          })
        })
    }
  }
})


// // Инициализация однофайлового компонента
// new Vue({
//   el: '#app-2',
//   render: h => h(app2),
// })
