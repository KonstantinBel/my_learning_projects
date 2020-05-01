<template>
  <div>
    <h3>Component 2</h3>
    <div>data - {{data}}</div>
    <hr>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.state.data;
    }
  }
}
</script>>
