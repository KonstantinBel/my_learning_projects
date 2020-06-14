<template>
  <div>
    <h1>Однофайловый компонент</h1>
    <p>Text from data - {{text}}</p>
    <single-file-with-props :text='text'></single-file-with-props>
    <inline-with-props :text='text'></inline-with-props>
    <hr>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        text: 'Hello from one-file component'
      }
    },
  }
</script>
