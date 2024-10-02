<script></script>

<template>
  <q-card class="card_profile">
    <div class="row">
      <div class="logo_block col-12">
        <img src="src/assets/img/RO_main_logo.svg" />
      </div>
      <div class="title_block col-12">
        <q-span>Регистрация</q-span>
      </div>
      <div class="input_block col-12">
        <div class="name_input_block">
          <label class="label">Имя</label>
          <q-input rounded outlined type="text" class="name_input" dense />
        </div>
        <div class="name_input_block block_surname">
          <label class="label">Фамилия</label>
          <q-input
            rounded
            outlined
            type="text"
            class="name_input surname_input"
            dense
          />
        </div>
        <div class="name_input_block block_patronymic">
          <label class="label">Отчество (при наличии)</label>
          <q-input
            rounded
            outlined
            type="text"
            class="name_input patronymic_input"
            dense
          />
        </div>
        <div class="name_input_block block_surname">
          <label>Дата рождения</label>
          <q-input
            class="date_input name_input"
            dense
            outlined
            rounded
            v-model="text"
            hint=""
            type="date"
          />
        </div>
      </div>
      <div class="btn_block col-12">
        <q-btn class="login_btn" @click="$router.push('/choose_subscription')"
          >Далее</q-btn
        >
      </div>
    </div>
  </q-card>
</template>

<style scoped>
@import "src/css/pages/RegistrationName.scss";
</style>
