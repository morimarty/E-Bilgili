
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
          <li
            class="nav-item"
            v-for="(item, index) in menu"
            v-bind:key="index"
            v-show="item.type == 0"
          >
            <router-link :to="item.url" tag="a" class="nav-link">{{
              item.name
            }}</router-link>
          </li>
        </ul>
        <div class="navbar-text">
          <ul class="navbar-nav mr-auto">
            <li
              class="nav-item"
              v-for="(item, index) in menu"
              v-bind:key="index"
              v-show="item.type == 1"
            >
              <router-link :to="item.url" tag="a" class="nav-link">{{
                item.name
              }}</router-link>
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
  data() {
    return {
      menu: [
        {
          id: 0,
          name: "Ana Sayfa",
          url: "/",
          type: 0,
        },
        {
          id: 1,
          name: "Kayıt Ol",
          url: "/SignUp",
          type: 1,
        },
        {
          id: 2,
          name: "Login",
          url: "/SignIn",
          type: 1,
        },
        {
          id: 3,
          name: "Sorular",
          url: "Questions",
          type: 0,
        },
        {
          id: 4,
          name: "Soru Ekle",
          url: "AddQuestion",
          type: 0,
        },
      ],
    };
  },
};
</script>
