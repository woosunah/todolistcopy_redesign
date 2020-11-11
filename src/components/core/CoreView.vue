<template>
  <div class="view">
    <v-row class="todo-tap-bar" justify="end" no-gutters>
      <v-fade-transition mode="out-in">
        <button
          v-bind:key="isHideComplete"
          @click="hideTask"
          class="mb-5 hide-btn"
        >
          {{ isHideComplete ? ' Hide Complete' : '  Show Complete' }}
        </button>
      </v-fade-transition>
    </v-row>

    <div class="todo-list">
      <transition-group name="list-slide">
        <div
          ref="listItem"
          class="list-slide-item"
          v-for="(todo, i) in filteredTodos"
          :key="todo.id"
        >
          <v-row align="center" class="list-item" no-gutters>
            <div
              class="check-box-border"
              @click="editTask(todo)"
              style="border: 1px solid #86a8e7"
            >
              <v-btn icon color="#86a8e7" class="check"
                ><v-icon v-show="todo.complete">mdi-check</v-icon></v-btn
              >
            </div>
            <p :class="{ 'text-complete': todo.complete }" :key="i">
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
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      isHideComplete: false,
    };
  },
  computed: {
    ...mapState(['todos']),
    filteredTodos() {
      if (this.isHideComplete) {
        return this.todos.filter((el) => !el.complete);
      } else {
        return this.todos;
      }
    },
  },
  mounted() {
    function addStyle(styleString) {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    }
    let listItemWidth = this.$refs.listItem[0].clientWidth;
    console.log(listItemWidth);
    addStyle(`.list-slide-leave-active {
                        position: absolute;
                        width: ${listItemWidth}px;
                      }`);
  },
  methods: {
    editTask(task) {
      task.complete = !task.complete;
      this.$store.commit('editTask', task);
    },
    deleteTask(task) {
      this.$store.commit('deleteTask', task);
    },
    hideTask() {
      this.isHideComplete = !this.isHideComplete;
    },
  },
};
</script>

<style lang="scss" scoped>
.list-slide-item {
  transition: all 0.5s;
  margin-top: 20px;
}

.list-slide-enter,
.list-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-item {
  background-color: #fff;
  height: 50px;
}
.view {
  width: 50%;
  margin: 0 auto;
  background-color: rgba(239, 239, 239);
  padding: 30px;
}
.todo-list {
  min-height: 100px;
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
  margin-top: 0;
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

.hide-btn {
  padding: 0;
  font-family: sans-serif;
  font-weight: 500;
  color: #666;
}
</style>
