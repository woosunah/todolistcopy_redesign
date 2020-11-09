<template>
  <div class="appbar">
    <h1>Todo</h1>
    <p class="today-label">{{ today }}</p>
    <div>
      <p class="today-title">
        You've got <br />
        <span>{{ todos.length }}</span> <br />
        tasks today !
      </p>
    </div>

    <v-text-field
      placeholder="Enter your task here"
      dark
      filled
      rounded
      dense
      height="55px"
      hide-details
      class="elevation-12"
      v-model="newTitle"
      @keyup.enter="addTask"
    >
      <template v-slot:append
        ><v-btn icon style="top:3px" small light
          ><v-avatar color="white" size="35"
            ><v-icon>mdi-arrow-right</v-icon></v-avatar
          ></v-btn
        ></template
      >
    </v-text-field>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import moment from 'moment';
export default {
  name: 'AppBar',
  data() {
    return {
      today: moment().format('MM/DD  ddd'),
      // data, computed, watch - property  // class = export default {사이에 있는것들}
      newTitle: '',
    };
  },
  methods: {
    addTask() {
      // console.log(this.newTitle, this.newId);
      this.$store.commit('addTask', {
        id: this.newId,
        complete: false,
        title: this.newTitle,
      });
      this.newTitle = '';
    },
  },
  computed: {
    ...mapState(['todos']),
    newId() {
      return (
        this.todos.reduce((acc, cur) => {
          return Math.max(acc, cur.id);
        }, 0) + 1
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.appbar {
  width: 50%;
  height: 350px;
  padding: 20px;
  margin: 50px auto 0;
  position: relative;
  background-color: -webkit-linear-gradient(
    to right,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  h1 {
    color: #fff;
    // border: 1px solid red;
    // width: 400vw;
    font-size: 20px;
  }
  .today-label {
    display: inline-block;
    width: 100px;
    position: absolute;
    top: 25px;
    right: 10px;
    font-size: 1rem;
    color: #fff;
  }
  span {
    font-weight: bold;
    font-size: 3rem;
  }

  .today-title {
    color: #fff;
    font-size: 2rem;
    margin-top: 30px;
  }
}
</style>
