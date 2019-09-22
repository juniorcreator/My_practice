<template>
  <div id="app">
    <h1>edewddw</h1>
    <Test />

  </div>
</template>

<script>
  import Test from './components/Test';
  export default {
    name: 'app',
    comments: {
      Test,
    },
    // data () {
    //   return {
    //     info: [
    //       {
    //         name: 'Name',
    //         value: '',
    //         pattern: /^[a-zA-Z ]{2,30}$/,
    //         isEmpty: true,
    //         error: true,
    //         activated: false,
    //       },
    //       {
    //         name: 'Phone',
    //         value: '',
    //         pattern: /^[0-9]{7,14}$/,
    //         isEmpty: true,
    //         error: true,
    //         activated: false,
    //       },
    //       {
    //         name: 'Email',
    //         value: '',
    //         pattern: /.+/,
    //         isEmpty: true,
    //         error: true,
    //         activated: false,
    //       },
    //       {
    //         name: 'Some Field 1',
    //         value: '',
    //         pattern: /.+/,
    //         isEmpty: true,
    //         error: true,
    //         activated: false,
    //       },
    //       {
    //         name: 'Some Field 2',
    //         value: '',
    //         pattern: /.+/,
    //         isEmpty: true,
    //         error: true,
    //         activated: false,
    //       }
    //     ],
    //     formSubmited: false
    //   }
    // },
    // methods: {
    //   onInput(index, value){
    //     // let data = this.info[index];
    //     // data.value = value;
    //     // data.isEmpty = false;
    //     // data.error = !data.pattern.test(value);
    //     // data.activated = true;
    //   },
    // },
    // computed: {
    //   done(){
    //     let done = 0;
    //
    //     for(let i = 0; i < this.info.length; i++){
    //       if(!this.info[i].error){
    //         done++;
    //       }
    //     }
    //     return done;
    //   },
    //   progressWidth(){
    //     return {
    //       width: (this.done / this.info.length * 100) + '%'
    //     }
    //   }
    // }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
