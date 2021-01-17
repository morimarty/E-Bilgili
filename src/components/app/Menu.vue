
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">E-Bilgili</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" tag="a" class="nav-link">Ana Sayfa</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Questions" tag="a" class="nav-link"
              >Sorular</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/AddQuestion" tag="a" class="nav-link"
              >Soru Ekle</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/AnswerQuestion"
              v-if="isLogin"
              tag="a"
              class="nav-link"
              >Soru Cevapla</router-link
            >
          </li>
        </ul>
        <div class="navbar-text">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/SignUp" v-if="!isLogin" tag="a" class="nav-link"
                >Kayıt Ol</router-link
              >
            </li>
            <li class="nav-item" v-if="!isLogin">
              <router-link to="/SignIn" tag="a" class="nav-link"
                >Giriş Yap</router-link
              >
            </li>
            <li class="nav-item" v-if="isLogin">
              <router-link to="/Admin" tag="a" class="nav-link"
                >Admin</router-link
              >
            </li>
            <li class="nav-item" v-if="isLogin">
              <router-link
                v-on:click.native="loginChange(false)"
                to="/"
                tag="a"
                class="nav-link"
                >Çıkış Yap</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    isLogin: {
      type: Boolean,
    },
  },
  data() {
    let l = this.isLogin;
    return {
      menu: [
        {
          id: 0,
          name: "Ana Sayfa",
          url: "/",
          type: 0,
          show: false,
        },

        {
          id: 3,
          name: "Sorular",
          url: "Questions",
          type: 0,
          show: l,
        },
        {
          id: 4,
          name: "Soru Ekle",
          url: "AddQuestion",
          type: 0,
          show: l,
        },
        {
          id: 9,
          name: "Soru Cevapla",
          url: "AnswerQuestion",
          type: 0,
          show: l,
        },
        {
          id: 1,
          name: "Kayıt Ol",
          url: "/SignUp",
          type: 1,
          show: l,
        },
        {
          id: 2,
          name: "Giriş Yap",
          url: "/SignIn",
          type: 1,
          show: l,
        },
        {
          id: 5,
          name: "Admin",
          url: "",
          type: 1,
          show: l,
        },
        {
          id: 6,
          name: "Çıkış Yap",
          url: "",
          type: 1,
          show: l,
        },
      ],
    };
  },
  created() {
    console.log("Menu ", this.isLogin);
  },
  methods: {
    loginChange() {
      this.$emit("loginChange", false);
    },
  },
};
</script>
