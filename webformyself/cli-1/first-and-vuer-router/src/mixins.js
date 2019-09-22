export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      counter: 0,
      names: ['vlad', 'max', 'elena', 'igor'],
      searchName: '',
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter((item) => {
        return  item.toLocaleLowerCase().indexOf(this.searchName.toLocaleLowerCase()) !== -1;
      })
    }
  }
}
