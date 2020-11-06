import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 0,
        complete: false,
        title: 'sample',
      },
    ],
  },
  mutations: {
    addTask(state, payload) {
      state.todos.push(payload);
    },
    editTask(state, payload) {
      let targetTask = state.todos.find((el) => el.id === payload.id);
      Object.assign(targetTask, payload);
    },
  },
  actions: {},
  modules: {},
});
