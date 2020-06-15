<template>
  <b v-if="show">
    sub menu item - {{title}}
  </b>
</template>

<script>
  export default {
    name: 'gnoms-sub-menu',
    props: ['show', 'title'],
  }
</script>
