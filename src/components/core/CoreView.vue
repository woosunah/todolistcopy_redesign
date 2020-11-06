<template>
  <div class="view">
    <div class="todo-list">
      <v-row
        align="center"
        class="list-item"
        v-for="(todo, i) in filteredTodos"
        :key="i"
        no-gutters
      >
        <div
          class="check-box-border"
          @click="editTask(todo)"
          :style="{ border: todo.complete ? '1px solid #86a8e7' : '' }"
        >
          <v-btn icon><v-icon>mdi-check</v-icon></v-btn>
        </div>
        <p :class="{ 'text-complete': todo.complete }">
          <!-- :class (클래스 바인딩)todo.complete이 true인지, false인지에 따라서 true일때, 'text-complete'가 나오게 하려고 -->
          {{ todo.title }}
          <!-- store에 배열안에 객체.문자열을 가져올때 {{}}해주는것 -->
        </p>
        <v-spacer></v-spacer>
        <v-btn icon large @click="deleteTask(todo)">
          <v-icon>mdi-close</v-icon>
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
  },
};
</script>

<style lang="scss" scoped>
.view {
  height: 400px;
  width: 50%;
  margin: 0 auto;
  background-color: rgba(239, 239, 239);
}
</style>
