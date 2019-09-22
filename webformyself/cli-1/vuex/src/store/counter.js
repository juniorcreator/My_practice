export default {

  state: {
    counter: 0,
  },

  mutations: {
    changeCounter(state, payload) {
      state.counter += payload;
    }
  },

  actions: {
// в actions робити запити на сервери чи до бази даних і потім викликати мутації ця сутність для
    // асинхронних запитів і так далі
    // asyncChangeCounter(context, val) {
    //   setTimeout(() => {
    //     context.commit('changeCounter', val.counterValue)
    //   },val.timeOut)
    // }
    // або верхній варіант ао нижній, обидва ідентичні, нижній курва кррутіший
    asyncChangeCounter({commit}, {counterValue,timeOut}) {
      setTimeout(() => {
        commit('changeCounter', counterValue)
      },timeOut)
    }
  },

  getters: {
    computedCounter(state) {
      return state.counter * 10;
    }
  }
}
