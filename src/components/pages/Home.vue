<template>
  <div>
    <AskQuestion class="mb-5" />
    <MainQuestions :isLogin="isLogin" :mainQuestions="mainQuestions" />
  </div>
</template>

<script>
import AskQuestion from "../app/AskQuestion.vue";
import MainQuestions from "../app/MainQuestions";
export default {
  name: "Home",
  props: {
    mainQuestions: {
      type: Array,
    },
    isLogin: {
      type: Boolean,
    },
  },
  components: {
    AskQuestion,
    MainQuestions,
  },
};
</script>

<style>
</style>