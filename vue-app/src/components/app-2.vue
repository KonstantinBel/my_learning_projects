<template>
  <div @click='close'>
    <h1>Однофайловый компонент</h1>
    <p>Text from data - {{text}}</p>
    <single-file-with-props :text='text'></single-file-with-props>
    <hr>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        text: 'Text from SINGLE FILE component'
      }
    },
    methods: {
      close: function() {
        // destroy the vue listeners, etc
        this.$destroy();

        // remove the element from the DOM
        const containerEl = document.createElement('div')
        containerEl.id = 'app-2'
        this.$el.parentNode.replaceChild(containerEl, this.$el);
      }
    }
  }
</script>
