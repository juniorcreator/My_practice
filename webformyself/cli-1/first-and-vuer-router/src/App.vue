<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <router-link tag="li" class="nav-item" exact to="/" active-class="active">
              <a class="nav-link" href="">Home</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/cars" active-class="active">
              <a class="nav-link" href="">Cars</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/test" active-class="active">
              <a class="nav-link" href="">Test page</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/car/3" active-class="active">
              <a class="nav-link" href="">Car 3</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/car/4" active-class="active">
              <a class="nav-link" href="">Car 4</a>
            </router-link>
          </ul>
        </div>
      </nav>
        <router-view></router-view>
    </div>
  </div>
</template>



<script>


export default {
  components: {
  },
  name: 'app',
  data () {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="scss">

</style>
