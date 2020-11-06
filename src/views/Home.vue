<template>
  <v-row class="home" no-gutters>
    <v-col>
      <core-app-bar></core-app-bar>
      <core-view></core-view>
      <core-footer></core-footer>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CoreAppBar: () => import('@/components/core/AppBar.vue'),
    CoreView: () => import('@/components/core/CoreView.vue'),
    CoreFooter: () => import('@/components/core/CoreFooter.vue'),
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: rgba(228, 228, 228);
}
</style>
