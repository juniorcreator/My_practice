<template>
	<div>
    <h4>Car name: {{$route.query.name}}</h4>
    <h5>Car year {{year}}</h5>
    <div class="scroll"></div>
    <h6 id="scroll">Hello from th bottom</h6>
  </div>
</template>

<script>
  export default {
    name: "CarFull",
    computed: {
      year() {
        return this.$route.query.year;
      }
    }
  }
</script>

<style scoped>
.scroll {
  width: 100px;
  height: 1000px;
  background-color: #ccc;
}
</style>
