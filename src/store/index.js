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
      // console.log(payload);
      state.todos.push(payload);
    },
    editTask(state, payload) {
      let targetTask = state.todos.find((el) => el.id === payload.id);
      Object.assign(targetTask, payload);
    },
    deleteTask(state, payload) {
      let targetIndex = state.todos.findIndex((el) => el.id === payload.id);
      state.todos.splice(targetIndex, 1);
    },
  },
  actions: {},
  modules: {},
});
