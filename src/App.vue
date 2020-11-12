<template>
  <div id="app">
    <Menu />
    <div class="container">
      <AskQuestion />
    </div>
  </div>
</template>

<script>
import Menu from "./components/app/Menu.vue";
import AskQuestion from "./components/app/AskQuestion.vue";
export default {
  name: "App",
  components: {
    Menu,
    AskQuestion,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style>
@import "../src/assets/css/layout.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css";
</style>