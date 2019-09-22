<template>
	<div>
    <h2>counter {{counter}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Counter",
    computed: {
      counter() {
        return this.$store.getters.computedCounter;
      }
    }
  }
</script>

<style scoped>

</style>
