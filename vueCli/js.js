
var app =  new Vue({
  el: "#app",
  data: {
    hashtags: [],
    cities: [],
    url: {
      hashtags: 'https://dka-develop.ru/api?type=hashtag',
      cities: 'https://dka-develop.ru/api?type=city'
    }
  },
  created: function () {

  },
  methods: {
    getHashtags() {
      axios.get(this.url.hashtags).
          then((response) => {
        console.log(response , 'response');
        console.log(response.data, 'data');
        this.hashtags = response.data
      });
    },
    getCities() {
      axios.get(this.url.cities).
      then((response) => {
        console.log(response , 'response');
        console.log(response.data, 'data');
        this.cities = response.data
      });
    }
  },
});