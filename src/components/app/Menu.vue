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
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(item, index) in menu" v-bind:key="index">
            <a class="nav-link" :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
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
          name: "Ana Sayfa",
          url: "/",
        },
        {
          name: "Kayıt Ol",
          url: "SignUp",
        },
        {
          name: "Sorular",
          url: "Questions",
        },
      ],
    };
  },
};
</script>
