<template>
  <div>
    <h3>Component 1</h3>
    <div>data - {{data}}</div>
    <div v-on:click="change">CHANGE DATA</div>
    <hr>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.state.data
    }
  },
  methods: {
    change() {
      this.$store.commit('changeData', 'CHANGE FROM COMPONENT 1')
    }
  }
}
</script>>
