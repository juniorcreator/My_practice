<template>
	<div>
    <h3>Mixin component</h3>

    <input type="text" v-model="searchName">Name <br>
    <hr>
    <ul class="list">
      <li v-for="name in filteredNames">
        {{name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import Mixins from  './mixins'
  export default {
    name: "Mixins",
    mixins: [Mixins]

  }
</script>

<style scoped>

</style>
