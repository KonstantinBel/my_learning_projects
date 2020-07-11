// Этот блок будет описан в пакедже common
import Vue from 'vue'
Vue.config.productionTip = true

// Этот блок будет описан в отдельном файле и подключен в пакедж нужной вьюхи.
// На одной странице можем быть несколько одинаковых не связанных между собой компонентов,
// каждый из которых потребуется монтировать отдельно, в таком случае вместо id gnoms-menu-container
// лучше использовать класс vue-gnoms-menu-container (префикс vue- по аналогии с js-) и перебирать
// результат вызова document.querrySelectorAll('.gnoms-menu-container').forEach(el => { new Vue({...}) })

import GnomsMenuItem from './components/gnoms-menu-item'

new Vue({
  el: '#gnoms-menu-container',
  components: {
    'gnoms-munu-item': GnomsMenuItem,
  }
})
