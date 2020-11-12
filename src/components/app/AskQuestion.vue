<template>
  <div>
    <div class="card text-center mt-5">
      <div class="card-header">Bize Soru Sorun!</div>
      <div class="card-body">
        <p class="card-text">
          Merak ettiğiniz herhangi bir konuda bize soru sorabilirsiniz.
        </p>
        <div class="input-group is-invalid">
          <div class="custom-file">
            <input type="text" class="form-control" placeholder="Soru alanı" />
          </div>
          <div class="input-group-append">
            <button class="btn btn-outline-primary" type="button">
              Soru Sor
            </button>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted">
        Sorular 4 saat içinde cevaplanacaktır.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AskQuestion",
  data() {
    return {};
  },
};
</script>
