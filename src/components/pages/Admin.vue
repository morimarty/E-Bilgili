<template>
  <div>
    <h1 v-if="questions.length < 1">Henüz eklenen soru yok</h1>
    <div
      class="card mb-5"
      v-for="(question, index) in questions"
      v-bind:key="question.id"
    >
      <h5 class="card-header">
        {{ question.name }}
        <button
          @click="deniedQuestion(index)"
          class="btn likeButtons dislike float-right"
        >
          -
        </button>
        <button
          @click="approveQuestion(question, index)"
          class="btn likeButtons like float-right"
        >
          +
        </button>
      </h5>
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
  name: "Admin",
  props: {
    questions: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {
    approveQuestion(question, index) {
      this.$emit("addQuestionToQuestionList", question);
      this.questions.splice(index, 1);
    },
    deniedQuestion(index) {
      this.questions.splice(index, 1);
    },
  },
};
</script>

<style>
.card-header {
  font-size: 16px;
}
.card-body p {
  font-size: 14px;
  margin-bottom: 0.5rem;
}
.likeButtons {
  position: absolute;
  top: 7px;
  right: 10px;
}
button.like {
  padding: 0;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border-radius: 50%;
  color: rgba(0, 150, 136, 1);
  background-color: rgba(38, 166, 154, 0.3);
  border-color: rgba(0, 150, 136, 1);
  border-width: 1px;
  font-size: 15px;
  right: 50px;
}

button.dislike {
  padding: 0;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border-radius: 50%;
  color: rgba(255, 82, 82, 1);
  background-color: rgba(255, 138, 128, 0.3);
  border-color: rgba(255, 82, 82, 1);
  border-width: 1px;
  font-size: 15px;
}

button.learnmore {
  width: 100%;
  padding: 10px;
  border: none;
  background: rgba(0, 151, 167, 1);
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
}
</style>