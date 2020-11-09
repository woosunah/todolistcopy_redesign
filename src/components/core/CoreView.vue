<template>
  <div class="view">
    <div class="todo-list">
      <v-row
        align="center"
        class="list-item"
        v-for="(todo, i) in todos"
        :key="i"
        no-gutters
      >
        <div
          class="check-box-border"
          @click="editTask(todo)"
          style="border: 1px solid #86a8e7"
        >
          <v-btn icon color="#86a8e7" class="check"
            ><v-icon v-show="todo.complete">mdi-check</v-icon></v-btn
          >
        </div>
        <p :class="{ 'text-complete': todo.complete }">
          <!-- :class (클래스 바인딩)todo.complete이 true인지, false인지에 따라서 true일때, 'text-complete'가 나오게 하려고 -->
          {{ todo.title }}
          <!-- store에 배열안에 객체.문자열을 가져올때 {{}}해주는것 -->
        </p>
        <v-spacer></v-spacer>
        <v-btn icon @click="deleteTask(todo)">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['todos']),
  },
  methods: {
    editTask(task) {
      task.complete = !task.complete;
      this.$store.commit('editTask', task);
    },
    deleteTask(task) {
      this.$store.commit('deleteTask', task);
    },
  },
};
</script>

<style lang="scss" scoped>
.view {
  width: 50%;
  margin: 0 auto;
  background-color: rgba(239, 239, 239);
}
.todo-list {
  padding: 30px;
  p {
    margin: 0;
    // font-weight: bold;
    color: #333;
  }
  .text-complete {
    text-decoration-line: line-through;
  }
}
.list-item:first-child {
  margin-top: 30px;
}
.list-item {
  // border: 1px solid red;
  background-color: #fff;
  margin-top: 20px;
  height: 50px;
}
.check-box-border {
  width: 24px;
  height: 24px;
  position: relative;
  margin: 0 10px;
}
.check {
  // border: 1px solid black;
  position: absolute;
  top: -8px;
  left: -6px;
}
</style>
