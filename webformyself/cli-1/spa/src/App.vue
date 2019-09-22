<template>
  <div id="app">
    <div class="container pt-5 text-center">
      <h1>{{title}}</h1>
      <Counter></Counter>
      <Actions></Actions>
      <hr>
      <SecondCounter></SecondCounter>
    </div>
  </div>
</template>

<script>
  import Counter from './Counter'
  import Actions from './Actions'
  import SecondCounter from './SecondCounter'

export default {

  components: {
    Counter,
    Actions,
    SecondCounter
  },
  name: 'app',
  data () {
    return {
      counter: 0,
    }
  },
  methods: {

  },
  computed: {
    title() {
      return this.$store.getters.getTitle
    }
  },
  created() {

  }
}
</script>

<style lang="scss">

</style>
