<template>
  <div>
    <div
      class="card mb-5"
      v-for="(question, index) in mainQuestions"
      v-bind:key="question.id"
    >
      <h5 class="card-header">
        {{ question.name }}
      </h5>
      <button
        v-if="isLogin"
        @click="removeFav(question, index)"
        class="btn likeButtons dislike float-right"
      >
        -
      </button>
      <div class="card-body">
        <div v-html="question.content"></div>
        <footer class="blockquote-footer">
          {{ question.author }}
        </footer>
        <hr />
        <h5>Yorumlar (yapılacak)</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainQuestions",
  props: {
    mainQuestions: {
      type: Array,
    },
    isLogin: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  methods: {
    removeFav(question, index) {
      this.mainQuestions.splice(index, 1);
    },
  },
};
</script>

<style>
</style>