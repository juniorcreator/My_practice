<template>
  <div id="app">
    <div class="container pt-2">
      <div class="form-groupt">
        <label for="carname">Car name</label>
        <input type="text" id="carname" class="form-control" v-model.trim="carName">
      </div>
      <div class="form-groupt">
        <label for="year">Car year</label>
        <input type="text" id="year" class="form-control" v-model.number="carYear">
      </div>
      <br>
      <button class="btn btn-success" @click="createCar">Create car</button>
      <button class="btn btn-primary" @click="loadCars">Load cars</button>
      <hr>
      <ul class="list-group">
        <li
          v-for="car in cars"
          class="list-group-item"
          :key="car.id"
        >
          <strong>{{car.name}} - {{car.year}}</strong>
          </li>
      </ul>
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
      carName:'',
      carYear: '',
      resource: '',
      cars: [],
    }
  },
  methods: {
    createCar() {
      const car = {
        name: this.carName,
        year: this.carYear
      };
      // this.$http.post('http://localhost:3000/cars',car)
      //   .then(response => {
      //     return response.json()
      //   })
      //   .then(newCar => {
      //     console.log(newCar);
      //   });
      this.resource.save({}, car);
    },
    loadCars() {
      // this.$http.get('http://localhost:3000/cars')
      //   .then(response => {
      //     return response.json()
      //   })
      //   .then(newCar => {
      //     this.cars = newCar;
      //     console.log(newCar);
      //   });
      this.resource.get()
        .then(responce => responce.json())
        .then(cars => this.cars = cars);
    }
  },
  created() {
    this.resource = this.$resource('cars');
  }
}
</script>

<style lang="scss">

</style>
