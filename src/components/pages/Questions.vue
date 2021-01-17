<template>
  <div>
    <h1></h1>
    <div
      class="card mb-5"
      v-for="question in questions"
      v-bind:key="question.id"
    >
      <h5 class="card-header">
        {{ question.name }}
      </h5>
      <button
        v-show="isLogin"
        v-if="!question.fav"
        @click="addFav(question)"
        class="btn likeButtons fav float-right"
      >
        &#9733;
      </button>
      <div class="card-body">
        <div v-html="question.content"></div>
        <footer class="blockquote-footer">
          {{ question.author }}
        </footer>
        <hr />
        <h5>Yorumlar</h5>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Adınız</label>
          <div class="col-sm-9">
            <input v-model="comment.name" type="text" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Yorumunuz</label>
          <div class="col-sm-9">
            <textarea
              type="text"
              v-model="comment.content"
              class="form-control"
            ></textarea>
          </div>
        </div>
        <div class="form-group row text-right">
          <label class="col-sm-3 col-form-label"></label>
          <div class="col-sm-9">
            <button
              @click="addComment(question)"
              type="submit"
              class="btn btn-success"
            >
              Yorum Yap
            </button>
          </div>
        </div>
        <div class="customCom" v-if="question.comments.length > 0">
          <div class="comment-widgets">
            <!-- Comment Row -->
            <div
              class="d-flex flex-row comment-row m-t-0"
              v-for="(comment, index) in question.comments"
              v-bind:key="index"
            >
              <div class="p-2">
                <img
                  :src="comment.img"
                  alt="user"
                  width="50"
                  class="rounded-circle"
                />
              </div>
              <div class="comment-text w-100">
                <h6 class="font-medium">{{ comment.name }}</h6>
                <span class="m-b-15 d-block">{{ comment.content }} </span>
                <div class="comment-footer">
                  <span class="text-muted float-right">{{ comment.date }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Card -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Questions",
  props: {
    approveQuestions: {
      type: Array,
    },
    isLogin: {
      type: Boolean,
    },
  },
  data() {
    return {
      questions: [
        {
          id: 0,
          name: "Spor öncesi beslenme nasıl olmalı",
          content: `
                <p>Bu çalışmamızda, spor öncesi beslenme nasıl olmalı ve antreman sonrası beslenme önerileri hakkında bilimsel ve hemen uygulayabileceğiiz bilgilere yer verdik. Sorularınız olursa, yazının altına yorum olarak bırakabilirsiniz.</p>
                <p>Spor yapan bireyler tarafından diyetisyenlere en sık sorulan sorulardan biri: “Spordan önce ve sonra ne yemeliyim?” Cevap bireye ve yaptığı aktiviteye bağlı olmakla birlikte bazı genel noktalar da bulunmaktadır.</p>
                <p>Sporcu beslenmesinde yer alan beslenme önerileri genellikle profesyonel sporcular içindir. Yani bir dayanıklılık atleti, bir vücut geliştirmeci veya bir müsabakaya hazırlanan sporcular için özel beslenme stratejilerinden bahsedebiliriz. Tüm detaylar için, Profesyonel Sporcu Beslenmesi yazımıza göz atabilirsiniz.</p>
                <p>Bunun dışında genel sağlık ve zindelik için egzersiz yapıyorsanız ve hedefleriniz daha mütevazı ise o zaman muhtemelen özel beslenme stratejisine ihtiyacınız yoktur. Her bir makro besin ögesinin spor öncesi ve sonrasında belirli bir rolü vardı</p>
                `,
          author: "Ogeday Mercan",
          fav: false,
          comments: [
            {
              name: "Yunus",
              content: "Elinize sağlık güzel bir yazı olmuş",
              img:
                "https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583336/AAA/4.jpg",
              date: "15.09.2020 09:10",
            },
            {
              name: "Serhat Berker",
              content: "Youtube videolarıma bakabilirsiniz.",
              img:
                "https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg",
              date: "22.12.2020 22:15",
            },
            {
              name: "Dami",
              content: "Dami İçerik",
              img:
                "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg",
              date: moment().format("DD.MM.YYYY H:mm"),
            },
          ],
        },
        {
          id: 1,
          name: "Featured",
          content: `With supporting text below as <br> a natural lead-in to additional content.`,
          author: "Ogeday Mercan",
          fav: false,
          comments: [],
        },
        {
          id: 2,
          name: "Featured 2",
          content: `With supporting text below as <br> a natural lead-in to additional content. 2`,
          author: "Ogeday Mercan 2",
          fav: false,
          comments: [],
        },
      ],
      comment: {
        name: null,
        content: null,
        img:
          " https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg",
        date: moment().format("DD.MM.YYYY H:mm"),
      },
    };
  },
  methods: {
    addFav(question) {
      question.fav = true;
      this.$emit("addQuestionToMainpage", question);
    },
    addComment(question) {
      let obj = {
        name: this.comment.name,
        content: this.comment.content,
        img:
          " https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg",
        date: moment().format("DD.MM.YYYY H:mm"),
      };
      question.comments.push(obj);
      this.comment.name = null;
      this.comment.content = null;
    },
  },
  mounted() {
    if (this.approveQuestions.length > 0) {
      this.approveQuestions.map((q) => {
        this.questions.push(q);
      });
    }
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
button.fav {
  padding: 0;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border-radius: 50%;
  color: #c79500;
  background-color: #fde499;
  border-color: #c79500;
  border-width: 1px;
  font-size: 15px;
  right: 15px;
}

.customCom .card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0px solid transparent;
  border-radius: 0px;
}

.customCom .card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
}

.customCom .card .card-title {
  position: relative;
  font-weight: 600;
  margin-bottom: 10px;
}

.customCom .comment-widgets {
  position: relative;
  margin-bottom: 10px;
}

.customCom .comment-widgets .comment-row {
  border-bottom: 1px solid transparent;
  padding: 14px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 10px 0;
}

.customCom .p-2 {
  padding: 0.5rem !important;
}
.customCom h6 {
  font-size: 15px;
}

.customCom .comment-text {
  padding-left: 15px;
  font-size: 13px;
  text-align: left;
}

.customCom .w-100 {
  width: 100% !important;
}

.customCom .m-b-15 {
  margin-bottom: 15px;
}

.customCom .btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.76563rem;
  line-height: 1.5;
  border-radius: 1px;
}

.customCom .btn-cyan {
  color: #fff;
  background-color: #27a9e3;
  border-color: #27a9e3;
}

.customCom .btn-cyan:hover {
  color: #fff;
  background-color: #1a93ca;
  border-color: #198bbe;
}

.customCom .comment-widgets .comment-row:hover {
  background: rgba(0, 0, 0, 0.05);
}
</style>