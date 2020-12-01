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
        <div class="form-group row text-left">
          <label class="col-sm-3 col-form-label"></label>
          <div class="col-sm-9">
            <button @click="loginUser()" type="submit" class="btn btn-primary">
              Giriş
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
      user: {
        id: 1,
        username: "morimarty",
        password: "654321",
      },
    };
  },
  methods: {
    loginUser() {
      if (
        this.user.username == this.username &&
        this.user.password == this.password
      ) {
        window.location.href = "/";
      } else {
        this.$toasted.show("Bilgilerinizi kontrol ediniz!", { type: "error" });
      }
    },
  },
};
</script>

<style>
</style>