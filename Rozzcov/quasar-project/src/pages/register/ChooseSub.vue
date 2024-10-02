<script></script>

<template>
  <div class="content">
    <div class="subscription_title">
      <q-span>Выберите уровень подписки:</q-span>
    </div>
    <div class="subscription">
      <div class="subscription_free">
        <q-card class="free_card card">
          <q-span class="card_title free_title">FREE</q-span>
          <ul class="list free_list">
            <li>
              <b>теория</b> для олимпиад по 15 дисциплинам <b>(250+ часов)</b>
            </li>
            <li>ежемесячное обновление материала</li>
          </ul>
          <div class="sub_block sub_block_free">
            <div class="price price_free">
              <q-span>0 руб./мес.</q-span>
            </div>
            <button class="btn btn_free" @click="$router.push('/coursesApp')">
              выбрать
            </button>
          </div>
        </q-card>
      </div>
      <div class="subscription_base">
        <q-card class="base_card card">
          <q-span class="card_title base_title">BASE</q-span>
          <ul class="list base_list">
            <li>
              <b>вся теория</b> для олимпиад по 15 дисциплинам
              <b>(300+ часов)</b>
            </li>
            <li><b>1000+ заданий</b> для подготовки</li>
            <li>ежемесячное обновление материала</li>
          </ul>
          <div class="sub_block sub_block_base">
            <div class="price price_base">
              <q-span>500 руб./мес.</q-span>
            </div>
            <button class="btn btn_base" @click="$router.push('/PaymentApp')">
              выбрать
            </button>
          </div>
        </q-card>
      </div>
      <div class="subscription_pro">
        <q-card class="pro_card card">
          <q-span class="card_title pro_title">PRO</q-span>
          <ul class="list pro_list">
            <li>
              <b>вся теория</b> для олимпиад по 15 дисциплинам
              <b>(300+ часов)</b>
            </li>
            <li><b>1000+ заданий</b> для подготовки</li>
            <li><b>индивидуальный наставник</b></li>
            <li>ежемесячное обновление материала</li>
          </ul>
          <div class="sub_block sub_block_pro">
            <div class="price price_pro">
              <q-span>5000 руб./мес.</q-span>
            </div>
            <button class="btn btn_pro" @click="$router.push('/PaymentApp')">
              выбрать
            </button>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "src/css/pages/ChooseSub.scss";
</style>
