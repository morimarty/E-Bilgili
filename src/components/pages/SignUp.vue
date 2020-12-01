<template>
  <div>
    <div class="card cardStaticWith m-auto">
      <div class="card-body">
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Kullanıcı Adı</label>
          <div class="col-sm-9">
            <input v-model="username" type="text" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Şifre</label>
          <div class="col-sm-9">
            <input v-model="password" type="password" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Şifreyi tekrar giriniz</label>
          <div class="col-sm-9">
            <input v-model="password2" type="password" class="form-control" />
          </div>
        </div>
        <div class="form-group row text-left">
          <label class="col-sm-3 col-form-label"></label>
          <div class="col-sm-9">
            <button
              @click="registerUser()"
              type="submit"
              class="btn btn-primary"
            >
              Kayıt Ol
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      username: null,
      password: null,
      password2: null,
    };
  },
  created() {},
  methods: {
    registerUser() {
      if (this.password == this.password2) alert("Kaydınız tamamlandı!");
      else {
        this.$toasted.show("Şifrenizi kontrol ediniz!", { type: "error" });
      }
    },
  },
};
</script>

<style>
</style>