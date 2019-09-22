<template>
	<div>
    <h2>Car id is {{id}}</h2>
    <button class="btn btn-small btn-default" @click="goBack">Back</button>
    <br>
    <br>
    <router-link
      tag="button"
      :to="{
      name: 'carFull', params: {id: id},
      query: {name: 'mazda', year: '2000'},
      hash: '#scroll'
      }"
      class="btn btn-info mt-2"
    >
      Full info</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Car",
    data() {
      return {
        id: this.$route.params.id
      }
    },
    beforeRouteLeave(to, fromR, next) {
      if(window.confirm('wanna leave?')) {
        next();
      }else {
        next(false);
      }
    },
    created() {
      console.log(this.$route, 'id is');
    },
    watch: {
      $route() {
        this.id = this.$route.params.id;
      }
    },
    methods: {
      goBack() {
        this.$router.push('/cars');
      }
    }
  }
</script>

<style scoped>

</style>
