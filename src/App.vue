<template>
  <div id="app">
    <Menu :isLogin="isLogin" @loginChange="login" />
    <div class="container pt-5">
      <router-view
        @addQuestionToAdmin="addQuestionAdmin"
        @addQuestionToQuestionList="addQuestionQuestionList"
        @loginChange="login"
        :isLogin="isLogin"
        :questions="questions"
        :approveQuestions="approveQuestions"
      ></router-view>
    </div>
  </div>
</template>

<script>
import Menu from "./components/app/Menu.vue";
export default {
  name: "App",
  components: {
    Menu,
  },
  data() {
    return {
      isLogin: false,
      questions: [
        {
          name: "Protein Tozu Zararlı mı?",
          content: "Bununla ilgili bir çok araştırma bulunmakta...",
          author: "Ogeday Mercan",
        },
      ],
      approveQuestions: [],
    };
  },
  methods: {
    login(val) {
      console.log(val);
      this.isLogin = val;
    },
    addQuestionAdmin(question) {
      this.questions.push(question);
    },
    addQuestionQuestionList(question) {
      this.approveQuestions.push(question);
    },
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