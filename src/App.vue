<template>
  <v-app id="app">
      <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    //Header
  }
}
</script>

<style lang="scss">
  @import "~ag-grid-community/dist/styles/ag-grid.css";
  @import "~ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>