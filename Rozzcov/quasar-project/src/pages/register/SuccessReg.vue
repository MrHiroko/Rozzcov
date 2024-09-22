<script></script>

<template>
  <q-card class="card_profile">
    <div class="row">
      <div class="logo_block col-12">
        <img src="src/assets/img/RO_main_logo.svg" />
      </div>
      <div class="title_block col-12">
        <div class="reg_title">
          <q-span>Регистрация</q-span>
        </div>
        <div class="success_title">
          <q-span>Вы успешно зарегистрировались!</q-span>
        </div>
      </div>

      <div class="btn_block col-12">
        <q-btn class="login_btn" @click="$router.push('/coursesApp')"
          >Далее</q-btn
        >
      </div>
    </div>
  </q-card>
</template>

<style scoped>
@import url(../css/pages/SuccessReg.scss);
</style>
