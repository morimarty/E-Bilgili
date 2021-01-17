<template>
  <div id="app">
    <Menu :isLogin="isLogin" @loginChange="login" />
    <div class="container pt-5">
      <router-view
        @addQuestionToAdmin="addQuestionAdmin"
        @addQuestionToQuestionList="addQuestionQuestionList"
        @addQuestionToMainpage="addQuestionMainpage"
        @loginChange="login"
        :isLogin="isLogin"
        :questions="questions"
        :approveQuestions="approveQuestions"
        :mainQuestions="mainQuestions"
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
      mainQuestions: [
        {
          id: 0,
          name: "Spor öncesi beslenme nasıl olmalı",
          content:
            "\n                <p>Bu çalışmamızda, spor öncesi beslenme nasıl olmalı ve antreman sonrası beslenme önerileri hakkında bilimsel ve hemen uygulayabileceğiiz bilgilere yer verdik. Sorularınız olursa, yazının altına yorum olarak bırakabilirsiniz.</p>\n                <p>Spor yapan bireyler tarafından diyetisyenlere en sık sorulan sorulardan biri: “Spordan önce ve sonra ne yemeliyim?” Cevap bireye ve yaptığı aktiviteye bağlı olmakla birlikte bazı genel noktalar da bulunmaktadır.</p>\n                <p>Sporcu beslenmesinde yer alan beslenme önerileri genellikle profesyonel sporcular içindir. Yani bir dayanıklılık atleti, bir vücut geliştirmeci veya bir müsabakaya hazırlanan sporcular için özel beslenme stratejilerinden bahsedebiliriz. Tüm detaylar için, Profesyonel Sporcu Beslenmesi yazımıza göz atabilirsiniz.</p>\n                <p>Bunun dışında genel sağlık ve zindelik için egzersiz yapıyorsanız ve hedefleriniz daha mütevazı ise o zaman muhtemelen özel beslenme stratejisine ihtiyacınız yoktur. Her bir makro besin ögesinin spor öncesi ve sonrasında belirli bir rolü vardı</p>\n                ",
          author: "Ogeday Mercan",
          fav: true,
        },
      ],
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
    addQuestionMainpage(question) {
      this.mainQuestions.push(question);
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