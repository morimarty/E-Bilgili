<template>
  <div>
    <div class="card cardStaticWith m-auto">
      <div class="card-body">
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Soru başlığı</label>
          <div class="col-sm-9">
            <input v-model="question.name" type="text" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Soru cevabı</label>
          <div class="col-sm-9">
            <textarea
              v-model="question.content"
              class="form-control"
            ></textarea>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Ekleyen</label>
          <div class="col-sm-9">
            <input v-model="question.author" type="text" class="form-control" />
          </div>
        </div>
        <div class="form-group row text-left">
          <label class="col-sm-3 col-form-label"></label>
          <div class="col-sm-9">
            <button @click="addQuestion" class="btn btn-primary">
              Soruyu Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddQuestion",
  data() {
    return {
      question: {
        name: null,
        content: null,
        author: null,
        fav: false,
      },
    };
  },
  methods: {
    addQuestion() {
      this.$emit("addQuestionToAdmin", this.question);
    },
  },
};
</script>

<style>
</style>