<template>
  <div>
    <h2>second counter {{counter}}</h2>
  </div>
</template>

<script>
  export default {
    name: "SecondCounter.vue",
    computed: {
      counter() {
        return this.$store.getters.computedCounter;
      }
    }
  }
</script>

<style scoped>

</style>
