<template>
  <v-app class="v-app">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
button:focus {
  outline: none;
}
.v-app {
}
</style>
