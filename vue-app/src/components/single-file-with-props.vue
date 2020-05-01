<template>
  <div>
    <h2>Однофайловый компонент с пропсами</h2>
    <p>Text from props - {{text}}</p>
  </div>
</template>

<script>
  export default {
    name: 'single-file-with-props',
    props: ['text'],
  }
</script>
