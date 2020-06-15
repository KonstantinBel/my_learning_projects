<template>
  <b v-if="show">
    sub menu item - {{title}}
  </b>
</template>

<script>
  export default {
    props: ['show', 'title'],
  }
</script>
