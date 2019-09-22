<template>
<!--  <div class="form-group" v-for="(item, index) in  info">-->
<!--    <label>{{ item.name }}</label>-->
<!--    <span class="fa"-->
<!--          v-if="!item.isEmpty"-->
<!--          :class="item.error ?-->
<!--									'fa-exclamation-circle text-danger' :-->
<!--									'fa-check-circle text-success'"-->
<!--    ></span>-->
<!--    <input type="text"-->
<!--           class="form-control"-->
<!--           :value="item.value"-->
<!--           @input="onInput(index, $event.target.value)"-->
<!--    >-->
<!--  </div>-->
</template>

<script>
  export default {
    props: ['info'],
    name: "Input",
    methods:{
      onInput(index, value) {

      }
    }
  }
</script>

<style scoped>

</style>
