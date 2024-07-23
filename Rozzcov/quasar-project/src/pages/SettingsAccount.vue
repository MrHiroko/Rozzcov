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

<style>


.name_block {
    margin-right: 30px;
    height: 97px;


}

.family_block {
    margin-right: 30px;
    height: 97px;


}

.secondfam_block {
    margin-top: 20px;
    margin-right: 30px;
    margin-top: 45px;

}

.icon_person {
    width: 35px;
    height: 35px;
    
}

.icon_block {

    height: 60px;
    display: flex;
    align-items: center;
    gap: 20px;
}

.title {
    font-family: 'Murs Gothic', sans-serif;
    font-weight: bold;
    margin-bottom: 35px;
    font-size: 4vw;
    color: blue;
    font-family: 'Murs-Gothic';
}

.card {
    
    padding-top: 15px;
    padding-left: 35px;
    border: 1px solid black;
    width: 700px;

    border-radius: 30px;
}

.card-data {
    height: 300px;
}

.data-text {
    font-size: 30px;
}

.card-security {
    height: 480px;
    margin-top: 20px;
}

.input {
    font-size: 18px;
    height: 10px;
}

.change-btn-block {

    margin-left: auto;
    margin-right: auto;
    height: 97px;
}

.posta_block {
    height: 150px;

}

.input_posta {
    height: 30px;
}

.change_btn {

    margin-left: 30px;
    color: white;
    background-color: #0000FF;
    width: 150px;
    height: 40px;
    border-radius: 50px;
    font-size: 14px;
}

.conf_btn {

    color: white;
    background-color: grey;
    width: 180px;
    height: 35px;
    border-radius: 50px;
    font-size: 12px;
    text-align: center;
}

.conf_text {
    font-size: 12px;
    color: grey;
    margin-left: 20px;
}

.conf_posta {
    margin-top: 20px;
}

.password_block {
    margin-top: 25px;
}

.card_block {
    margin-top: 40px;
}

.card_control {
    height: 857px;
}

.statuses {
    margin-top: 15px;
    margin-left: 20px;
}

.statuses_text {
    margin-top: 5px;
    font-size: 16px;

}
.choice_plan span{
    font-size: 22px;
}
.subscribe{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap:20px;
}
.free{
    background-color: #59B3FF;
}
.sub_block{
    position: relative;
    width:611px;
    height: 143px;
    
    border-radius: 30px;
}
.sub_title{
    color:white;
    font-size: 34px;
    margin-left: 30px;
    margin-top: 10px;
}
.sub_text{
    font-size: 16px;
    color:white;
    margin-left: 30px;
    margin-top: -20px;
}
.price{
    font-size: 30px;
    color:white;
    position: absolute;
    left:400px;
    top:10px;
}
.plan_btn{
    width: 170px;
    height: 35px;
    font-size: 14px;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
    position: absolute;
    left:400px;
    top:85px;
}
.base{
    background-color: #0000FF;
}
.price_base{
    left:658px;
}
.pro{
    background-color:#5A00FF ;
}
.price_pro{
    left:337px;
}
.pro_tutorship_text{
    font-size: 11px;
    color:white;
    margin-left: 30px;
    margin-top: -15px;
}

@media (min-width:320px) and (max-width:375px) {

    .price{
    font-size: 16px;
    color:white;
    left:49px;
    top: 140px;
}
    .price_base{
        font-size: 16px;
    left:49px;
    top: 140px;
}

.price_free{
        font-size: 16px;
    left:49px;
    top: 140px;
}

.price_pro{
        text-align: center;
        font-size: 16px;
    left:44px;
    top: 190px;
}


    .card {
    
    padding-top: 15px;
    padding-left: 30px;
    border: 1px solid black;
    width: 300px;

    border-radius: 30px;
}

.data-text {
    font-size: 16px;
}

.card-data {
    height: 400px;
    margin-bottom: 50px;
}
.secondfam_block {
    margin-top: 20px;
    margin-right: 30px;
    margin-top: 35px;

}
.name_block {
    margin-right: 30px;
    height: 97px;
    margin-top: 35px;

}

.family_block {
    margin-right: 30px;
    height: 97px;
    margin-top: 35px;

}

.card-security {
    height: 600px;
    margin-top: 20px;

    
}
.card-security  .input{
    margin-bottom: 10px;

}

.change_btn{
margin-left: 40px;
}
.conf_posta{
    margin-left: 50px;
}
.card_control {
    height: 1250px;
    margin-top: 20px;
}
.subscribe{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap:20px;
}
.plan_btn{
    width: 170px;
    height: 35px;
    font-size: 14px;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
    position: absolute;
    left:20px;
    top:240px;
}

.sub_block{
    position: relative;
    width:200px;
    height: 300px;
    
    border-radius: 30px;
}
.sub_text{
    font-size: 16px;
}
.pro_tutorship_text{
    font-size: 14px;
}
.title{
    font-size: 20px;
}

.content{
    display: flex;
    justify-content: center;
}


}

@media (min-width:375px) and (max-width:425px) {
    .price{
    font-size: 16px;
    color:white;
    left:49px;
    top: 140px;
}
    .price_base{
        font-size: 16px;
    left:49px;
    top: 140px;
}

.price_free{
        font-size: 16px;
    left:49px;
    top: 140px;
}

.price_pro{
        text-align: center;
        font-size: 16px;
    left:44px;
    top: 190px;
}


    .card {
    
    padding-top: 15px;
    padding-left: 30px;
    border: 1px solid black;
    width: 300px;

    border-radius: 30px;
}

.data-text {
    font-size: 16px;
}

.card-data {
    height: 400px;
    margin-bottom: 50px;
}
.secondfam_block {
    margin-top: 20px;
    margin-right: 30px;
    margin-top: 35px;

}
.name_block {
    margin-right: 30px;
    height: 97px;
    margin-top: 35px;

}

.family_block {
    margin-right: 30px;
    height: 97px;
    margin-top: 35px;

}

.card-security {
    height: 600px;
    margin-top: 20px;

    
}
.card-security  .input{
    margin-bottom: 10px;

}

.change_btn{
margin-left: 40px;
}
.conf_posta{
    margin-left: 50px;
}
.card_control {
    height: 1250px;
    margin-top: 20px;
}
.subscribe{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap:20px;
}
.plan_btn{
    width: 170px;
    height: 35px;
    font-size: 14px;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
    position: absolute;
    left:20px;
    top:240px;
}

.sub_block{
    position: relative;
    width:200px;
    height: 300px;
    
    border-radius: 30px;
}
.sub_text{
    font-size: 16px;
}
.pro_tutorship_text{
    font-size: 14px;
}
.title{
    font-size: 26px;
}

.content{
    display: flex;
    justify-content: center;
}
}

@media (min-width:425px) and (max-width:600px) {
    .price{
    font-size: 16px;
    color:white;
    left:49px;
    top: 140px;
}
    .price_base{
        font-size: 16px;
    left:49px;
    top: 140px;
}

.price_free{
        font-size: 16px;
    left:49px;
    top: 140px;
}

.price_pro{
        text-align: center;
        font-size: 16px;
    left:44px;
    top: 190px;
}


    .card {
    
    padding-top: 15px;
    padding-left: 30px;
    border: 1px solid black;
    width: 300px;

    border-radius: 30px;
}

.data-text {
    font-size: 16px;
}

.card-data {
    height: 400px;

}
.secondfam_block {
    margin-top: 20px;
    margin-right: 30px;
    margin-top: 35px;

}
.name_block {
    margin-right: 30px;
    height: 97px;
    margin-top: 35px;

}

.family_block {
    margin-right: 30px;
    height: 97px;
    margin-top: 35px;

}

.card-security {
    height: 600px;


    
}
.card-security  .input{
    margin-bottom: 10px;

}

.change_btn{
margin-left: 40px;
}
.conf_posta{
    margin-left: 50px;
}
.card_control {
    height: 1250px;
    margin-top: 20px;
}
.subscribe{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap:20px;
}
.plan_btn{
    width: 170px;
    height: 35px;
    font-size: 14px;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
    position: absolute;
    left:20px;
    top:240px;
}

.sub_block{
    position: relative;
    width:200px;
    height: 300px;
    
    border-radius: 30px;
}
.sub_text{
    font-size: 16px;
}
.pro_tutorship_text{
    font-size: 14px;
}
.title{
    font-size: 20px;
}

.content{
    display: flex;
    justify-content: center;
}
}

@media (min-width:600px) and (max-width:768px) {
    .card-data{
height: 400px;
width: 580px;
}
.family_block{
    margin-bottom: 35px;
}
    .content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title{
    font-size: 28px;
}
.card-security{
    height: 600px;
    margin-bottom: 20px;
}
.change_btn{
position: relative;
    margin-top: 10px;
left: -32px;
}
.price_base{
  left: 350px;
}
.card-security{
    width: 580px;
}
.card_control{
    width: 580px;
}
.subscribe{
  margin-left: -40px;
}
.sub_block{
    width: 550px;
}
.plan_btn{
    width: 200px;
 top: 100px;
    left: 20px;
}
.price {
    font-size: 24px;
}
.sub_text{
    font-size: 12px;
}
}

@media (min-width:769px) and (max-width:1024px){
    .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.card-data{
height: 400px;
}
.family_block{
    margin-bottom: 35px;
}
.card-security{
    height: 600px;
    margin-bottom: 20px;
}
.change_btn{
position: relative;
    margin-top: 10px;
left: -32px;
}
.price_base{
  left: 350px;
}
}

@media (min-width:1024px) and (max-width:1440px){
    .content{
    display: flex;
    flex-direction: column;
    align-items: start;

}
.card-data{
height: 400px;
}
.family_block{
    margin-bottom: 35px;
}
.card-security{
    height: 600px;
    margin-bottom: 20px;
}
.change_btn{
position: relative;
    margin-top: 10px;
left: -32px;
}
.price_base{
  left: 350px;
}
}

.price_base{
  left: 350px;
}
</style>