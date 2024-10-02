<script setup></script>

<template>
  <q-card class="card_profile">
    <div class="row">
      <div class="logo_block col-12">
        <img src="src/assets/img/RO_main_logo.svg" />
      </div>
      <div class="title_block col-12">
        <q-span>Оплата</q-span>
      </div>
      <div class="input_block col-12">
        <div class="number_input_block">
          <label class="label">Номер карты</label>
          <q-input rounded outlined type="text" class="number_input" dense />
        </div>
        <div class="period_cvc_block">
          <div class="block_period">
            <label class="label">Срок действия</label>
            <q-input
              rounded
              outlined
              type="text"
              class="number_input period_input"
            />
          </div>
          <div class="block_cvc">
            <label class="label">CVV/CVC</label>
            <q-input
              rounded
              outlined
              type="text"
              class="number_input period_input cvc_input"
            />
          </div>
        </div>
      </div>
      <div class="payment col-12">
        <div class="selected">
          <q-span class="status">Выбранный статус:</q-span><br /><q-span
            class="fix_payment status_now"
            >BASE</q-span
          >
        </div>
        <div class="for_pay">
          <q-span class="status pay">К оплате:</q-span><br /><q-span
            class="fix_payment price"
            >500 рублей</q-span
          >
        </div>
      </div>

      <div class="btn_block col-12">
        <q-btn class="login_btn" @click="$router.push('/succsess-reg')"
          >Далее</q-btn
        >
      </div>
    </div>
  </q-card>
</template>

<style scoped>
@import "src/css/pages/PaymentApp.scss";
</style>
