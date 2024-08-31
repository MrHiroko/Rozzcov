<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<template>
  <div class="title">НАСТАВНИЧЕСТВО</div>

  <q-card class="tutorship_card">
    <q-span class="card-title-text">НАСТАВНИЧЕСТВО - ЭТО...</q-span>
    <ul class="tutorship_list">
      <li>Индивидуальная подготовка к перечневым олимпиадам</li>
      <li>4 индивидуальных занятия в месяц</li>
      <li>Персональный план обучения</li>
      <li>Помощь в творческих проектах</li>
      <li>Контакт 24/7</li>
      <li>Обучение в написании эссе для олимпиад</li>
      <li class="subscribe_li">Входит в подписку <b>PRO</b></li>
    </ul>
    <div class="button_block">
      <button class="subscribe_btn" @click="$router.push('/settings')">
        нажмите, чтобы оформить подписку</button
      ><br />
      <button @click="$router.push('/tutor-choice')" class="tutorship_btn">
        нажмите, чтобы выбрать наставникa
      </button>
    </div>
    <div class="img_people_block">
      <img src="~assets/img/people.svg" class="people_img" />
    </div>
  </q-card>
</template>

<style lang="scss" scoped>
@import "../css/pages/tutorship-app.scss";
</style>
