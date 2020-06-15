// Шаблон этого компонента описан в html и после рендера попадет в <slot></slot>.
// В теге slot пробрасываются все необходимые данные.

<template>
  <li>
    <slot :self="self"></slot>
  </li>
</template>

<script>
  export default {
    data: function() {
      return {
        showSubMenu: false
      }
    },
    computed: {
      // Так мы пробрасываем все свойства компонента,
      // теперь все свойсва компонента можно будет записать в переменную
      // (v-slot="vm") и обращаться к ним так "{{vm.self.showSubMenu}}"
      // Если требуется пердать другие computed свойства, их придется прписывать отдельно
      // https://github.com/vuejs/rfcs/pull/98#issuecomment-603371675

      // Так же можно пердать только некоторые свойства компонента,
      // для этого нужно удать self и происать нужные в теге slot
      // На пример так: <slot :showSubMenu="showSubMenu"></slot>
      // И обращаться к нему так {{vm.showSubMenu}}
      self: function() { return {...this} }
    },
    methods: {
      onclick: function() {
        this.showSubMenu = !this.showSubMenu
      }
    }
  }
</script>
