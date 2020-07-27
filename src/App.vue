<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
// import StoriesListBase from "./components/StoriesListBase";

import Navbar from "./components/nodes/Layout/Navbar";
export default {
  name: 'App',
  components: {
    Navbar
    // StoriesListBase
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
