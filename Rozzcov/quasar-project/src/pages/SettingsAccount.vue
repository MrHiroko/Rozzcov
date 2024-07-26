<script>

</script>

<template>
    <div class="title">
        НАСТРОЙКИ
    </div>
    <div class="row content">
 <div class="col-lg-6 column">
    <div class="col-lg-5">
        <q-card class="card card-data">
                    <div class="icon_block">
                        <img class="icon_person" src="src/assets/icons/person.svg">
                        <span class="data-text">Личные данные</span>
                    </div>
                    <div class="q-pa-md example-row-equal-width data_input_block">

                        <div class="row">
                            <div class="col-xs-12  col-lg-5  family_block">
                                <label>Фамилия</label>
                                <q-input dense rounded outlined class="input input_family"></q-input>
                            </div>
                            <div class="col-xs-12 col-lg-5 name_block">
                                <label>Имя</label>
                                <q-input dense rounded outlined class="input input_name input-sm"></q-input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-lg-5 secondfam_block">
                                <label>Отчество</label>
                                <q-input dense rounded outlined class="input input_second input-sm"></q-input>
                            </div>
                            <div class="col-xs-12 col-lg-5 secondfam_block birthday_block ">
                                <label>Дата рождения</label>
                                <q-input  class="input_date" dense  outlined rounded v-model="text" hint="" 
                                    type="date" />
                            </div>
                        </div>
                    </div>
                </q-card></div>
    <div class="col-lg-6">
        <q-card class="card card-security">
                    <div class="icon_block">
                        <img class="icon_person" src="src/assets/icons/key.svg">
                        <span class="data-text security-text">Вход и безопасность</span>
                    </div>
                    <div class="q-pa-md example-row-equal-width security_input_block ">
                        <div class="row fit row wrap justify-center items-center content-center posta_block">
                            <div class="col ">

                                <div class="row fit row wrap justify-center items-center content-center posta_grid">
                                    <label class="posta_label col-12">Почта</label>
                                    <q-input dense rounded outlined class="input input_posta col-xs-12 input-sm col-lg-8"
                                        type="email"></q-input>
                                    <div class="change-btn-block col-xs-12 col-lg-4">
                                        <q-btn class="change_btn">Изменить</q-btn>
                                    </div>
                                    <div class="col-12 conf_posta">
                                        <q-btn class="conf_btn">Подтвердить почту</q-btn>
                                        <span class="conf_text">почта подтверждена!</span>
                                    </div>
                                </div>

                            </div>

                        </div>



                        <div class="row fit row wrap justify-center items-center content-center password_block">
                            <div class="col password_block">

                                <div class="row fit row wrap justify-center items-center content-center password_grid">
                                    <label class="password_label col-12">Пароль</label>
                                    <q-input dense rounded outlined class="input input_password col-xs-12 col-lg-8"
                                        type="password"></q-input>
                                    <div class="change-btn-block col-xs-12  col-lg-4">
                                        <q-btn class="change_btn">Изменить</q-btn>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div class="row fit row wrap justify-center items-center content-center card_block">
                            <div class="col">

                                <div class="row fit row wrap justify-center items-center content-center card_grid">
                                    <label class="card_label col-12">Привязанная карта</label>
                                    <q-input dense rounded outlined class="input input_card col-xs-12  col-lg-8" type="text"></q-input>
                                    <div class="change-btn-block col-xs-12 col-lg-4">
                                        <q-btn class="change_btn ">Изменить</q-btn>
                                    </div>

                                </div>

                            </div>

                        </div>



                    </div>
                </q-card>
</div>
 </div>
<div class="col-md-6">
    <q-card class="card card_control">
                  <div class="icon_block">
                      <img class="icon_person" src="src/assets/icons/rouble.svg">
                      <span class="data-text">Управление подпиской</span>
                  </div>
                  <div class="statuses">
                      <div class="actual">
                          <span>Текущий статус:</span>
                          <p class="statuses_text">FREE</p>
                      </div>
                      <div class="next">
                          <span>Следующее списание:</span>
                          <p class="statuses_text">-</p>
                      </div>
                      <div class="choice_plan">
                          <span>Выбор плана</span>
                          <div class="subscribe">
                              <div class="free sub_block">
                                  <p class="sub_title">FREE</p>
                                  <p class="sub_text">Доступ к бесплатному материалу</p>
                                  <p class="price">0 руб./мес.</p>
                                  <button class="plan_btn free">Текущий план</button>
                              </div>
                              <div class="base sub_block">
                                  <p class="sub_title">BASE</p>
                                  <p class="sub_text">Доступ ко всему материалу</p>
                                  <p class="price price_base">500 руб./мес.</p>
                                  <button class="plan_btn free">Оформить</button>
                              </div>
                              <div class="pro sub_block">
                                  <p class="sub_title">PRO</p>
                                  <p class="sub_text">Доступ ко всему материалу и наставничеству</p>
                                  <p class="price price_pro">5000 руб./мес.</p>
                                  <p class="pro_tutorship_text">подробнее про наставничество тут</p>
                                  <button class="plan_btn free">Оформить</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </q-card>

</div>
              


          

     
        </div>

     


</template>

<style lang="scss" >



@import '../css/pages/SettingsAccount';
</style>