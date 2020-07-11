<template>
  <b class="item">
    sub menu item - {{title}}
  </b>
</template>

<script>
  export default {
    props: ['title'],
  }
</script>

<style>
  .item { color: orange }
</style>
