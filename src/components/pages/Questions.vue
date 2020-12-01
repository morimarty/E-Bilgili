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
        <button class="btn likeButtons dislike float-right">-</button>
        <button class="btn likeButtons like float-right">+</button>
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
  name: "Questions",
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
        },
        {
          id: 1,
          name: "Featured",
          content: `With supporting text below as <br> a natural lead-in to additional content.`,
          author: "Ogeday Mercan",
        },
        {
          id: 2,
          name: "Featured 2",
          content: `With supporting text below as <br> a natural lead-in to additional content. 2`,
          author: "Ogeday Mercan 2",
        },
      ],
    };
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