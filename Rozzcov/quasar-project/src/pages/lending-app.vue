<script>
export default {};
</script>
<template>
  <div class="page">
    <header class="header">
      <div class="header_container">
        <div class="">
          <img
            class="header_logo"
            width="100px"
            src="~assets/img/ro_stack_wh.svg"
            alt=""
          />
        </div>
        <div class="">
          <q-btn class="header_button" @click="$router.push('/login-profile')"
            >ВОЙТИ</q-btn
          >
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <div class="bg_foto">
          <div class="title">
            <div class="text-title">ПОСТУПИ НА БЮДЖЕТ</div>

            <div class="text-middle">В ВУЗ МЕЧТЫ</div>

            <div class="text-end">ПО БВИ</div>
          </div>
          <q-btn class="main_button" @click="$router.push('/login-profile')"
            >попробывать</q-btn
          >
        </div>
      </div>

      <div class="theme">
        <div class="theme-title">
          ГОТОВИМ К ОЛИМПИАДАМ <br />
          <span class="theme-subtitle">ПО 15 ДИСЦИПЛИНАМ</span>
        </div>
        <div class="theme-text">
          · физика · математика · обществознание · русский язык · международные
          отношения · английский язык · социология · философия · история ·
          политология · литература · МХК · филология · китайский язык · биология
        </div>
      </div>

      <div class="about">
        <div class="about_items">
          <div class="about_text">
            <div class="about_title">О НАС</div>

            <div class="about_text-item">
              <img class="about_logo" src="~assets/img/ro_long_bl.svg" alt="" />
              — это <b> онлайн-школа</b>, готовящая учащихся школ 9-11 классов к
              <b>олимпиадам из перечня Минобрнауки</b> — к олимпиадам, дающим
              <b>100 баллов</b> при поступлении в ВУЗ по соответствующему
              предмету ЕГЭ и поступление на желаемый факультет
              <b> без вступительных испытаний</b>.
            </div>
            <div class="about_text-item">
              Выбирая нас, вы <b> экономите огромные деньги </b> на подготовке к
              ЕГЭ, поскольку с олимпиадами высокие баллы на экзамене
              необязательны - хватит лишь 75 по соответствующему предмету.
            </div>
          </div>
          <div class="">
            <div class="about_video-block"></div>
          </div>
        </div>
      </div>
      <div class="education">
        <div iv class="education_text">
          <div class="education_title">
            ЛУЧШЕЕ ОБУЧЕНИЕ - <br />
            ЭТО САМООБРАЗОВАНИЕ
          </div>
          <div class="education_subtitle">
            В нашей онлайн-школе находится в открытом и бесплатном доступе
            <b>огромное количество теоретического материала</b>, по которому
            легко подготовиться к любой олимпиаде.
          </div>
        </div>
        <div class="education_img">
          <div class="education_img-item"></div>
          <div class="education_img-item"></div>
        </div>
        <q-btn
          class="education_button button"
          @click="$router.push('/login-profile')"
          >перейти к теории</q-btn
        >
      </div>
      <div class="coach">
        <div class="coach_items">
          <div class="coach_item-1">
            <div class="coach_text">
              <div class="coach_title">НАСТАВНИКИ</div>
              <div class="coach_subtitle-1">
                Только в нашей школе есть
                <b>уникальная система наставничества.</b> Вам больше не нужно
                искать репетиторов или групповые занятия, чтобы подготовиться.
              </div>
            </div>
            <div class="coach_subtitle-2">
              Купив подписку PRO, Вы <b>получите на выбор одного наставника</b>,
              который <b>будет курировать ваше обучение</b> на протяжении
              месяца. Вы сможете выбрать того преподавателя, который прошел тот
              же олимпиадный путь, что предстоити Вам.
            </div>
          </div>
          <div class="coach_item-2">
            <div class="coach_img">
              <div class="coach_img-item">
                <div class="coach_img-item-circle circle-1">
                  <div class="coach_img-item-circle-online"></div>
                </div>
                <div class="coach_img-item-subtitle">онлайн</div>
              </div>
              <div class="coach_img-item center-circle">
                <div class="coach_img-item-circle center circle-2">
                  <div class="coach_img-item-circle-online center-online"></div>
                </div>
                <div class="coach_img-item-subtitle">онлайн</div>
              </div>
              <div class="coach_img-item">
                <div class="coach_img-item-circle circle-3">
                  <div class="coach_img-item-circle-online"></div>
                </div>
                <div class="coach_img-item-subtitle">онлайн</div>
              </div>
            </div>

            <q-btn
              class="coach_button button"
              @click="$router.push('/login-profile')"
              >выбрать наставника</q-btn
            >
          </div>
        </div>
        <div class="coach_card">
          <div class="coach_card-subscribe">
            <div class="coach_card-title">
              <span class="coach_card-title-1"> ПОДПИСКА</span> <br />
              <span class="coach_card-title-2">PRO</span>
            </div>
            <div class="coach_card-text">
              <ul>
                <li>· 4 индивидуальных занятия в месяц</li>
                <li>· курирование в творческих проектах</li>
                <li>· обучение в написании эссе</li>
                <li>· индвидуальный план обучения</li>
                <li>· контакт 24/7</li>
                <li>· доступ ко всему материалу на сайте</li>
              </ul>
            </div>
          </div>
          <div class="coach_card-items">
            <div class="coach_card-price">5000 руб./мес.</div>
            <q-btn
              class="btn coach_card-button"
              @click="$router.push('/login-profile')"
              >оформить</q-btn
            >
          </div>
        </div>
      </div>
      <div class="prepare">
        <div iv class="prepare_text">
          <div class="prepare_title">ПОДГОТОВЬСЯ САМ</div>
          <div class="prepare_subtitle">
            Внутренняя система заданий с автоматической проверкой позволит Вам
            натренировать свои навыки в решении олимпиадных заданий. Каждый
            месяц в банк добавляется 700 заданий, поэтому покупкамесячной
            подписки BASE крайне выгодна.
          </div>
        </div>
        <div class="prepare_img">
          <div class="prepare_img-item"></div>
          <div class="prepare_img-item"></div>
        </div>
        <q-btn
          class="prepare_button button"
          @click="$router.push('/login-profile')"
          >перейти к заданиям</q-btn
        >
        <div class="prepare_card">
          <div class="prepare_card-subscribe">
            <div class="prepare_card-title">
              <span class="prepare_card-title-1"> ПОДПИСКА </span> <br />
              <span class="prepare_card-title-2">BASE</span>
            </div>
            <div class="prepare_card-text">
              <ul>
                <li>
                  · вся теория для олимпиад по 15 дисциплинам (300+ часов)
                </li>
                <li>· 1000+ заданий для подготовки</li>
                <li>· ежемесячное обновление материала</li>
              </ul>
            </div>
          </div>
          <div class="prepare_card-items">
            <div class="prepare_card-price">500 руб./мес.</div>
            <q-btn
              class="btn prepare_card-button"
              @click="$router.push('/login-profile')"
              >оформить</q-btn
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped lang="scss">
.page {
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

.button {
  text-align: center;
  color: #ffffff;
  width: 100%;
  height: 25px;
  border-radius: 42px;
  background-color: #0000ff;
  border: 0px solid #000000;
}

.header {
  background: blue;
  height: 100px;
}

.header_container {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header_button {
  width: 113px;
  height: 34px;
  border-radius: 16px;
  color: white;
  background-color: #0000ff;
  border: 2px solid #ffffff;
}
.bg_foto {
  height: 400px;
  background-size: cover;
  background-image: url("../assets/img/mgu.jpg");
  padding-left: 150px;
}

.main_button {
  width: 150px;
  height: 30px;
  border-radius: 32px;
  color: #ffffff;
  background-color: #0000ff;
  border: 0px solid #ffffff;
}
.title {
  color: white;
  font-family: "Murs-Gothic";
  font-weight: bold;
  line-height: 130%;
}

.text-title {
  font-size: 40px;
  padding-top: 40px;
}
.text-middle {
  font-size: 67px;
}
.text-end {
  margin-top: 30px;
  font-size: 118px;
}
.theme {
  color: #ffffff;
  position: relative;
  padding: 40px;
  height: 458px;
  background-image: linear-gradient(180deg, #0000ff 0%, #ffffff 100%);
  border: 0px solid #ffffff;
}
.theme-title {
  font-size: 20px;
  font-family: "Murs-Gothic";
  font-weight: bold;
  text-align: center;
  position: absolute;
}
.theme-text {
  bottom: 190px;
  position: absolute;
  font-size: 31px;
  display: flex;
  flex-wrap: wrap;
}
.theme-subtitle {
  font-size: 38px;
  font-family: "Murs-Gothic";
  font-weight: bold;
}

.about {
  padding: 20px;
  &_title {
    color: #0000ff;
    font-size: 66px;
    font-weight: bold;
  }

  &_items {
    display: flex;
  }

  &_text {
    font-size: 22px;
  }

  &_text-item {
    margin-top: 20px;
  }

  &_video {
    width: 587px;
    height: 334px;
    border-radius: 34px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
}

.education {
  padding: 10px;
}
.education_text {
}
.education_title {
  color: #0000ff;
  font-weight: bold;
  font-size: 23px;
}
.education_subtitle {
  font-size: 18px;
}
.education_img {
}
.education_img-item {
  margin: 20px 0;
  width: 100%;
  height: 200px;
  border-radius: 49px;
  background-color: #ffffff;
  border: 1px solid #000000;
}
.education_button {
  text-align: center;
  color: #ffffff;
  width: 100%;
  height: 25px;
  border-radius: 42px;
  background-color: #0000ff;
  border: 0px solid #000000;
}

.coach {
  display: flex;
  padding: 10px;

  flex-direction: column;
}
.coach_text {
  flex-direction: column;
}
.coach_title {
  font-size: 36px;
  color: blue;
}
.coach_subtitle-1 {
}
.coach_subtitle-2 {
  margin-top: 10px;
}
.coach_img {
  position: relative;
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  height: 200px;
}
.coach_img-item {
}
.coach_img-item-circle {
  width: 100px;
  height: 100px;
  border-radius: 224px;
  background-color: #ffffff;
  border: 1px solid #000000;
}
.circle-1 {
  background-image: url("../assets/img/circle-1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.circle-2 {
  background-image: url("../assets/img/circle-2.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
}
.circle-3 {
  background-image: url("../assets/img/circle-3.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.coach_img-item-circle-center {
  position: absolute;
  top: 20px;
  left: 70px;
  width: 150px;
  height: 150px;
  border-radius: 224px;
  background-color: #ffffff;
  border: 1px solid #000000;
}
.coach_img-item-subtitle-center {
  position: absolute;
  bottom: -25px;
  left: 45px;
  font-size: 18px;
}
.coach_img-item-circle-online-1 {
  bottom: 55px;
  right: 210px;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #a3a3ff;
  border: 0px solid #ffffff;
}
.coach_img-item-circle-online-2 {
  bottom: 30px;
  right: 90px;
  position: absolute;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background-color: #a3a3ff;
  border: 0px solid #ffffff;
}
.coach_img-item-circle-online-3 {
  bottom: 60px;
  right: 0;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #a3a3ff;
  border: 0px solid #ffffff;
}

.coach_img-item-subtitle {
}
.coach_button {
}

.coach_card {
  margin-top: 20px;
  color: #ffffff;
  padding: 20px;
  width: 100%;
  height: 370px;
  border-radius: 30px;
  background-color: #5a00ff;
}
.coach_card-title {
  line-height: 280%;
}
.coach_card-title-1 {
  font-size: 24px;
}
.coach_card-title-2 {
  font-size: 68px;
  font-weight: bold;
}
.coach_card-items {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.coach_card-text {
  font-size: 14px;
}
.coach_card-price {
}
.coach_card-button {
  border-radius: 14px;
  color: #000000;
  width: 100px;
  background-color: #ffffff;
  border: 1px solid #000000;
}

.prepare {
  padding: 10px;
}
.prepare_text {
}
.prepare_title {
  color: #0000ff;
  font-weight: bold;
  font-size: 23px;
}
.prepare_subtitle {
  font-size: 18px;
}
.prepare_img {
}
.prepare_img-item {
  margin: 20px 0;
  width: 100%;
  height: 200px;
  border-radius: 49px;
  background-color: #ffffff;
  border: 1px solid #000000;
}
.prepare_button {
  text-align: center;
  color: #ffffff;
  width: 100%;
  height: 25px;
  border-radius: 42px;
  background-color: #0000ff;
  border: 0px solid #000000;
}

.prepare_card {
  order: 5;
  margin-top: 20px;
  color: #ffffff;
  padding: 20px;
  width: 100%;
  height: 300px;
  border-radius: 30px;
  background-color: #0000ff;
}
.prepare_card-title {
  line-height: 280%;
}
.prepare_card-title-1 {
  font-size: 24px;
}
.prepare_card-title-2 {
  font-size: 55px;
  font-weight: bold;
}
.prepare_card-items {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.prepare_card-text {
  font-size: 14px;
}
.prepare_card-price {
}
.prepare_card-button {
  border-radius: 14px;
  color: #000000;
  width: 100px;
  background-color: #ffffff;
  border: 1px solid #000000;
}

@media (min-width: 320px) and (max-width: 375px) {
  .header {
    background: blue;
    height: 100px;
  }

  .header_container {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header_button {
    width: 113px;
    height: 34px;
    border-radius: 16px;
    color: white;
    background-color: #0000ff;
    border: 2px solid #ffffff;
  }
  .bg_foto {
    background: url("../assets/img/mgu.jpg");
    padding-left: 50px;
    background-size: cover;
  }

  .main_button {
    width: 150px;
    height: 30px;
    border-radius: 32px;
    color: #ffffff;
    background-color: #0000ff;
    border: 0px solid #ffffff;
  }
  .title {
    color: white;
    font-family: "Murs-Gothic";
    font-weight: bold;
    line-height: 120%;
  }

  .text-title {
    text-align: left;
    font-size: 20px;
    padding-top: 40px;
  }
  .text-middle {
    font-size: 34px;
  }
  .text-end {
    margin-top: 15px;
    font-size: 61px;
  }
  .theme {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    color: #ffffff;
    position: relative;
    padding: 20px;
    height: 458px;
    background-image: linear-gradient(180deg, #0000ff 0%, #ffffff 100%);
    border: 0px solid #ffffff;
  }
  .theme-title {
    font-size: 16px;
    font-family: "Murs-Gothic";
    font-weight: bold;
    text-align: justify;
  }

  .theme-text {
    padding: 10px;
    bottom: 55%;
    position: absolute;
    font-size: 14px;
    text-align: justify;
  }
  .theme-subtitle {
    font-size: 20px;
    font-family: "Murs-Gothic";
    font-weight: bold;
  }

  .about {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    &_title {
      font-family: "Murs-Gothic";
      color: #0000ff;
      font-size: 66px;
      font-weight: bold;
    }

    &_items {
      display: flex;
      flex-direction: column;
    }

    &_text {
      font-size: 22px;
    }

    &_text-item {
      margin-top: 20px;
    }

    &_video {
      width: 100%;
      height: 334px;
      border-radius: 34px;
      background-color: #ffffff;
      border: 1px solid #000000;
    }
  }

  .education {
    padding: 10px;
  }
  .education_text {
  }
  .education_title {
    color: #0000ff;
    font-weight: bold;
    font-size: 23px;
  }
  .education_subtitle {
    font-size: 18px;
  }
  .education_img {
  }
  .education_img-item {
    margin: 20px 0;
    width: 100%;
    height: 200px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .education_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .coach {
    display: flex;
    padding: 10px;

    flex-direction: column;
  }
  .coach_text {
    flex-direction: column;
  }
  .coach_title {
    font-size: 36px;
    color: blue;
  }
  .coach_subtitle-1 {
    order: 1;
  }
  .coach_subtitle-2 {
    order: 4;
    margin-top: 10px;
  }
  .coach_img {
    order: 2;
    position: relative;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    height: 200px;
  }
  .coach_img-item {
  }
  .coach_img-item-circle {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .center {
    position: relative;
    z-index: 10;
    width: 150px;
    height: 150px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .center-circle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .circle-1 {
    background-image: url("../assets/img/circle-1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .circle-2 {
    background-image: url("../assets/img/circle-2.png");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }
  .circle-3 {
    background-image: url("../assets/img/circle-3.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .coach_img-item-subtitle {
    font-size: 18px;
  }
  .coach_img-item-circle-online {
    position: absolute;
    bottom: 0;
    right: 0px;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: #a3a3ff;
  }

  .center-online {
    position: absolute;
    bottom: 0;
    right: 10px;
  }

  .coach_img-item-subtitle {
  }
  .coach_button {
    order: 3;
  }

  .coach_card {
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;
    width: 100%;
    height: 370px;
    border-radius: 30px;
    background-color: #5a00ff;
  }
  .coach_card-title {
    line-height: 280%;
  }
  .coach_card-title-1 {
    font-size: 24px;
  }
  .coach_card-title-2 {
    font-size: 68px;
    font-weight: bold;
  }
  .coach_card-items {
    align-items: center;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .coach_card-text {
    font-size: 14px;
  }
  .coach_card-price {
  }
  .coach_card-button {
    border-radius: 14px;
    color: #000000;
    width: 100px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }

  .prepare {
    padding: 10px;
  }
  .prepare_text {
  }
  .prepare_title {
    color: #0000ff;
    font-weight: bold;
    font-size: 23px;
  }
  .prepare_subtitle {
    font-size: 18px;
  }
  .prepare_img {
  }
  .prepare_img-item {
    margin: 20px 0;
    width: 100%;
    height: 200px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .prepare_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .prepare_card {
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;
    width: 100%;
    height: 300px;
    border-radius: 30px;
    background-color: #0000ff;
  }
  .prepare_card-title {
    line-height: 280%;
  }
  .prepare_card-title-1 {
    font-size: 24px;
  }
  .prepare_card-title-2 {
    font-size: 55px;
    font-weight: bold;
  }
  .prepare_card-items {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .prepare_card-text {
    font-size: 14px;
  }
  .prepare_card-price {
  }
  .prepare_card-button {
    border-radius: 14px;
    color: #000000;
    width: 100px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
}

@media (min-width: 375px) and (max-width: 425px) {
  .header {
    background: blue;
    height: 100px;
  }

  .header_container {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header_button {
    width: 113px;
    height: 34px;
    border-radius: 16px;
    color: white;
    background-color: #0000ff;
    border: 2px solid #ffffff;
  }
  .bg_foto {
    background: url("../assets/img/mgu.jpg");
    padding-left: 50px;
    background-size: cover;
  }

  .main_button {
    width: 150px;
    height: 30px;
    border-radius: 32px;
    color: #ffffff;
    background-color: #0000ff;
    border: 0px solid #ffffff;
  }
  .title {
    color: white;
    font-family: "Murs-Gothic";
    font-weight: bold;
    line-height: 120%;
  }

  .text-title {
    text-align: left;
    font-size: 20px;
    padding-top: 40px;
  }
  .text-middle {
    font-size: 34px;
  }
  .text-end {
    margin-top: 15px;
    font-size: 61px;
  }
  .theme {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    color: #ffffff;
    position: relative;
    padding: 20px;
    height: 458px;
    background-image: linear-gradient(180deg, #0000ff 0%, #ffffff 100%);
    border: 0px solid #ffffff;
  }
  .theme-title {
    font-size: 16px;
    font-family: "Murs-Gothic";
    font-weight: bold;
    text-align: justify;
  }

  .theme-text {
    padding: 10px;
    bottom: 55%;
    position: absolute;
    font-size: 14px;
    text-align: justify;
  }
  .theme-subtitle {
    font-size: 20px;
    font-family: "Murs-Gothic";
    font-weight: bold;
  }

  .about {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    &_title {
      font-family: "Murs-Gothic";
      color: #0000ff;
      font-size: 66px;
      font-weight: bold;
    }

    &_items {
      display: flex;
      flex-direction: column;
    }

    &_text {
      font-size: 22px;
    }

    &_text-item {
      margin-top: 20px;
    }

    &_video {
      width: 100%;
      height: 334px;
      border-radius: 34px;
      background-color: #ffffff;
      border: 1px solid #000000;
    }
  }

  .education {
    padding: 10px;
  }
  .education_text {
  }
  .education_title {
    color: #0000ff;
    font-weight: bold;
    font-size: 23px;
  }
  .education_subtitle {
    font-size: 18px;
  }
  .education_img {
  }
  .education_img-item {
    margin: 20px 0;
    width: 100%;
    height: 200px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .education_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .coach {
    display: flex;
    padding: 10px;

    flex-direction: column;
  }
  .coach_text {
    flex-direction: column;
  }
  .coach_title {
    font-size: 36px;
    color: blue;
  }
  .coach_subtitle-1 {
    order: 1;
  }
  .coach_subtitle-2 {
    order: 4;
    margin-top: 10px;
  }
  .coach_img {
    padding: 25px;
    order: 2;
    position: relative;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    height: 200px;
  }
  .coach_img-item {
  }
  .coach_img-item-circle {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .center {
    position: relative;
    z-index: 10;
    width: 150px;
    height: 150px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .center-circle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .circle-1 {
    background-image: url("../assets/img/circle-1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .circle-2 {
    background-image: url("../assets/img/circle-2.png");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }
  .circle-3 {
    background-image: url("../assets/img/circle-3.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .coach_img-item-subtitle {
    font-size: 18px;
  }
  .coach_img-item-circle-online {
    position: absolute;
    bottom: 0;
    right: 0px;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: #a3a3ff;
  }

  .center-online {
    position: absolute;
    bottom: 0;
    right: 10px;
  }

  .coach_img-item-subtitle {
  }
  .coach_button {
    order: 3;
  }

  .coach_card {
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;
    width: 100%;
    height: 370px;
    border-radius: 30px;
    background-color: #5a00ff;
  }
  .coach_card-title {
    line-height: 280%;
  }
  .coach_card-title-1 {
    font-size: 24px;
  }
  .coach_card-title-2 {
    font-size: 68px;
    font-weight: bold;
  }
  .coach_card-items {
    align-items: center;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .coach_card-text {
    font-size: 14px;
  }
  .coach_card-price {
  }
  .coach_card-button {
    border-radius: 14px;
    color: #000000;
    width: 100px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }

  .prepare {
    padding: 10px;
  }
  .prepare_text {
  }
  .prepare_title {
    color: #0000ff;
    font-weight: bold;
    font-size: 23px;
  }
  .prepare_subtitle {
    font-size: 18px;
  }
  .prepare_img {
  }
  .prepare_img-item {
    margin: 20px 0;
    width: 100%;
    height: 200px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .prepare_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .prepare_card {
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;
    width: 100%;
    height: 300px;
    border-radius: 30px;
    background-color: #0000ff;
  }
  .prepare_card-title {
    line-height: 280%;
  }
  .prepare_card-title-1 {
    font-size: 24px;
  }
  .prepare_card-title-2 {
    font-size: 55px;
    font-weight: bold;
  }
  .prepare_card-items {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .prepare_card-text {
    font-size: 14px;
  }
  .prepare_card-price {
  }
  .prepare_card-button {
    border-radius: 14px;
    color: #000000;
    width: 100px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
}

@media (min-width: 425px) and (max-width: 768px) {
  .header {
    background: blue;
    height: 100px;
  }

  .header_container {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header_button {
    width: 113px;
    height: 34px;
    border-radius: 16px;
    color: white;
    background-color: #0000ff;
    border: 2px solid #ffffff;
  }
  .bg_foto {
    background: url("../assets/img/mgu.jpg");
    padding-left: 50px;
    background-size: cover;
  }

  .main_button {
    width: 150px;
    height: 30px;
    border-radius: 32px;
    color: #ffffff;
    background-color: #0000ff;
    border: 0px solid #ffffff;
  }
  .title {
    color: white;
    font-family: "Murs-Gothic";
    font-weight: bold;
    line-height: 120%;
  }

  .text-title {
    text-align: left;
    font-size: 20px;
    padding-top: 40px;
  }
  .text-middle {
    font-size: 34px;
  }
  .text-end {
    margin-top: 15px;
    font-size: 61px;
  }
  .theme {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    color: #ffffff;
    position: relative;
    padding: 20px;
    height: 458px;
    background-image: linear-gradient(180deg, #0000ff 0%, #ffffff 100%);
    border: 0px solid #ffffff;
  }
  .theme-title {
    font-size: 16px;
    font-family: "Murs-Gothic";
    font-weight: bold;
    text-align: justify;
  }

  .theme-text {
    padding: 10px;
    bottom: 55%;
    position: absolute;
    font-size: 14px;
    text-align: justify;
  }
  .theme-subtitle {
    font-size: 20px;
    font-family: "Murs-Gothic";
    font-weight: bold;
  }

  .about {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    &_title {
      font-family: "Murs-Gothic";
      color: #0000ff;
      font-size: 66px;
      font-weight: bold;
    }

    &_items {
      display: flex;
      flex-direction: column;
    }

    &_text {
      font-size: 22px;
    }

    &_text-item {
      margin-top: 20px;
    }

    &_video {
      width: 100%;
      height: 334px;
      border-radius: 34px;
      background-color: #ffffff;
      border: 1px solid #000000;
    }
  }

  .education {
    padding: 10px;
  }
  .education_text {
  }
  .education_title {
    color: #0000ff;
    font-weight: bold;
    font-size: 23px;
  }
  .education_subtitle {
    font-size: 18px;
  }
  .education_img {
  }
  .education_img-item {
    margin: 20px 0;
    width: 100%;
    height: 200px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .education_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .coach {
    display: flex;
    padding: 10px;

    flex-direction: column;
  }
  .coach_text {
    flex-direction: column;
  }
  .coach_title {
    font-size: 36px;
    color: blue;
  }
  .coach_subtitle-1 {
    order: 1;
  }
  .coach_subtitle-2 {
    order: 4;
    margin-top: 10px;
  }
  .coach_img {
    padding: 50px;
    order: 2;
    position: relative;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    height: 200px;
  }
  .coach_img-item {
  }
  .coach_img-item-circle {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .center {
    position: relative;
    z-index: 10;
    width: 150px;
    height: 150px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .center-circle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .coach_img-item-subtitle {
    font-size: 18px;
  }
  .coach_img-item-circle-online {
    position: absolute;
    bottom: 0;
    right: 0px;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: #a3a3ff;
  }

  .center-online {
    position: absolute;
    bottom: 0;
    right: 10px;
  }

  .coach_img-item-subtitle {
  }
  .coach_button {
    order: 3;
  }

  .coach_card {
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;
    width: 100%;
    height: 370px;
    border-radius: 30px;
    background-color: #5a00ff;
  }
  .coach_card-title {
    line-height: 280%;
  }
  .coach_card-title-1 {
    font-size: 24px;
  }
  .coach_card-title-2 {
    font-size: 68px;
    font-weight: bold;
  }
  .coach_card-items {
    align-items: center;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .coach_card-text {
    font-size: 14px;
  }
  .coach_card-price {
  }
  .coach_card-button {
    border-radius: 14px;
    color: #000000;
    width: 100px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }

  .prepare {
    padding: 10px;
  }
  .prepare_text {
  }
  .prepare_title {
    color: #0000ff;
    font-weight: bold;
    font-size: 23px;
  }
  .prepare_subtitle {
    font-size: 18px;
  }
  .prepare_img {
  }
  .prepare_img-item {
    margin: 20px 0;
    width: 100%;
    height: 200px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .prepare_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .prepare_card {
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;
    width: 100%;
    height: 300px;
    border-radius: 30px;
    background-color: #0000ff;
  }
  .prepare_card-title {
    line-height: 280%;
  }
  .prepare_card-title-1 {
    font-size: 24px;
  }
  .prepare_card-title-2 {
    font-size: 55px;
    font-weight: bold;
  }
  .prepare_card-items {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .prepare_card-text {
    font-size: 14px;
  }
  .prepare_card-price {
  }
  .prepare_card-button {
    border-radius: 14px;
    color: #000000;
    width: 100px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .header {
    background: blue;
    height: 100px;
  }
  .header_logo {
    width: 200px;
  }

  .header_container {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header_button {
    width: 200px;
    height: 40px;
    border-radius: 16px;
    color: white;
    background-color: #0000ff;
    border: 2px solid #ffffff;
  }
  .bg_foto {
    background: url("../assets/img/mgu.jpg");
    padding-left: 50px;
    background-size: cover;
  }

  .main_button {
    width: 200px;
    height: 30px;
    border-radius: 32px;
    color: #ffffff;
    background-color: #0000ff;
    border: 0px solid #ffffff;
  }
  .title {
    color: white;
    font-family: "Murs-Gothic";
    font-weight: bold;
    line-height: 120%;
  }

  .text-title {
    text-align: left;
    font-size: 24px;
    padding-top: 40px;
  }
  .text-middle {
    font-size: 40px;
  }
  .text-end {
    margin-top: 15px;
    font-size: 71px;
  }
  .theme {
    display: flex;
    flex-wrap: wrap;

    justify-content: start;
    color: #ffffff;
    position: relative;
    padding: 20px;
    height: 458px;
    background-image: linear-gradient(180deg, #0000ff 0%, #ffffff 100%);
    border: 0px solid #ffffff;
  }
  .theme-title {
    font-size: 24px;
    font-family: "Murs-Gothic";
    font-weight: bold;
    text-align: justify;
  }

  .theme-text {
    padding: 10px;
    bottom: 60%;
    position: absolute;
    font-size: 18px;
    text-align: justify;
  }
  .theme-subtitle {
    font-size: 30px;
    font-family: "Murs-Gothic";
    font-weight: bold;
  }

  .about {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    font-family: "Murs-Gothic";

    &_title {
      font-family: "Murs-Gothic";
      color: #0000ff;
      font-size: 66px;
      font-weight: bold;
    }

    &_items {
      display: flex;
      flex-direction: column;
    }

    &_text {
      font-size: 24px;
    }

    &_text-item {
      margin-top: 20px;
    }

    &_video {
      width: 100%;
      height: 334px;
      border-radius: 34px;
      background-color: #ffffff;
      border: 1px solid #000000;
    }
  }

  .education {
    padding: 10px;
  }
  .education_text {
  }
  .education_title {
    font-family: "Murs-Gothic";
    color: #0000ff;
    font-weight: bold;
    font-size: 32px;
  }
  .education_subtitle {
    font-size: 24px;
  }
  .education_img {
  }
  .education_img-item {
    margin: 20px 0;
    width: 100%;
    height: 400px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .education_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    font-size: 20px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .coach {
    display: flex;
    padding: 10px;

    flex-direction: column;
  }
  .coach_text {
    flex-direction: column;
  }
  .coach_title {
    font-family: "Murs-Gothic";
    font-size: 36px;
    color: blue;
  }
  .coach_subtitle-1 {
    font-size: 24px;
    order: 1;
  }
  .coach_subtitle-2 {
    font-size: 24px;
    order: 4;
    margin-top: 10px;
  }
  .coach_img {
    padding: 0 160px;
    order: 2;
    position: relative;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    height: 250px;
  }
  .coach_img-item {
  }
  .coach_img-item-circle {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .circle-1 {
    background-image: url("../assets/img/circle-1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .circle-2 {
    background-image: url("../assets/img/circle-2.png");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }
  .circle-3 {
    background-image: url("../assets/img/circle-3.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .center {
    position: relative;
    z-index: 10;
    width: 200px;
    height: 200px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .center-circle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .coach_img-item-subtitle {
    font-size: 18px;
  }
  .coach_img-item-circle-online {
    position: absolute;
    bottom: 0;
    right: 0px;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: #a3a3ff;
  }

  .center-online {
    position: absolute;
    bottom: 0;
    right: 10px;
  }

  .coach_img-item-subtitle {
  }
  .coach_button {
    font-size: 18px;
    order: 3;
  }

  .coach_card {
    display: flex;
    flex-direction: column;
    justify-content: end;
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;
    width: 100%;
    height: 370px;
    border-radius: 30px;
    background-color: #5a00ff;
  }
  .coach_card-subscribe {
    display: flex;
    margin-bottom: 50px;
    justify-content: space-between;
  }
  .coach_card-title {
    text-align: left;

    line-height: 400%;
  }
  .coach_card-title-1 {
    font-size: 32px;
  }
  .coach_card-title-2 {
    font-size: 95px;
    font-weight: bold;
  }
  .coach_card-items {
    align-items: center;
    margin-top: 20px;
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
  .coach_card-text {
    margin-left: 20px;
    font-size: 24px;
  }
  .coach_card-price {
    font-size: 24px;
  }
  .coach_card-button {
    border-radius: 24px;
    color: #000000;
    width: 120px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }

  .prepare {
    padding: 10px;
  }
  .prepare_text {
  }
  .prepare_title {
    font-family: "Murs-Gothic";
    color: #0000ff;
    font-weight: bold;
    font-size: 32px;
  }
  .prepare_subtitle {
    font-size: 24px;
  }
  .prepare_img {
  }
  .prepare_img-item {
    margin: 20px 0;
    width: 100%;
    height: 400px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .prepare_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    font-size: 18px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .prepare_card {
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;
    width: 100%;
    height: 300px;
    border-radius: 30px;
    background-color: #0000ff;
  }
  .prepare_card-subscribe {
    display: flex;
    margin-bottom: 50px;
    justify-content: space-between;
  }
  .prepare_card-title {
    line-height: 420%;
    text-align: left;
    margin-right: 40px;
  }
  .prepare_card-title-1 {
    font-size: 40px;
  }
  .prepare_card-title-2 {
    font-size: 90px;
    font-weight: bold;
  }
  .prepare_card-items {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .prepare_card-text {
    font-size: 24px;
  }
  .prepare_card-price {
    font-size: 24px;
  }
  .prepare_card-button {
    border-radius: 14px;
    color: #000000;
    width: 120px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
}

@media (min-width: 1024px) and (max-width: 1440px) {
  .header {
    background: blue;
    height: 100px;
  }

  .header_container {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header_button {
    width: 200px;
    height: 34px;
    border-radius: 16px;
    color: white;
    background-color: #0000ff;
    border: 2px solid #ffffff;
  }
  .bg_foto {
    background: url("../assets/img/mgu.jpg");
    padding-left: 50px;
    background-size: cover;
  }

  .main_button {
    width: 200px;
    height: 30px;
    border-radius: 32px;
    font-size: 20px;
    color: #ffffff;
    background-color: #0000ff;
    border: 0px solid #ffffff;
  }
  .title {
    color: white;
    font-family: "Murs-Gothic";
    font-weight: bold;
    line-height: 120%;
  }

  .text-title {
    text-align: left;
    font-size: 28px;
    padding-top: 40px;
  }
  .text-middle {
    font-size: 48px;
  }
  .text-end {
    margin-top: 15px;
    font-size: 86px;
  }
  .theme {
    display: flex;
    flex-wrap: wrap;

    justify-content: start;
    color: #ffffff;
    position: relative;
    padding: 20px;
    height: 458px;
    background-image: linear-gradient(180deg, #0000ff 0%, #ffffff 100%);
    border: 0px solid #ffffff;
  }
  .theme-title {
    font-size: 28px;
    font-family: "Murs-Gothic";
    font-weight: bold;
    text-align: justify;
  }

  .theme-text {
    padding: 10px;
    bottom: 50%;
    position: absolute;
    font-size: 24px;
    text-align: justify;
  }
  .theme-subtitle {
    font-size: 35px;
    font-family: "Murs-Gothic";
    font-weight: bold;
  }

  .about {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    font-family: "Murs-Gothic";

    &_title {
      font-family: "Murs-Gothic";
      color: #0000ff;
      font-size: 66px;
      font-weight: bold;
    }

    &_items {
      display: flex;
      flex-direction: column;
    }

    &_text {
      font-size: 28px;
    }

    &_text-item {
      margin-top: 20px;
    }

    &_video {
      width: 100%;
      height: 400px;
      border-radius: 34px;
      background-color: #ffffff;
      border: 1px solid #000000;
    }
  }

  .education {
    padding: 10px;
  }
  .education_text {
  }
  .education_title {
    font-family: "Murs-Gothic";
    color: #0000ff;
    font-weight: bold;
    font-size: 36px;
  }
  .education_subtitle {
    font-size: 32px;
  }
  .education_img {
  }
  .education_img-item {
    margin: 20px 0;
    width: 100%;
    height: 400px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .education_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    font-size: 24px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .coach {
    display: flex;
    padding: 10px;

    flex-direction: column;
  }
  .coach_text {
    flex-direction: column;
  }
  .coach_title {
    font-family: "Murs-Gothic";
    font-size: 42px;
    color: blue;
  }
  .coach_subtitle-1 {
    font-size: 28px;
    order: 1;
  }
  .coach_subtitle-2 {
    font-size: 28px;
    order: 4;
    margin-top: 10px;
  }
  .coach_img {
    padding: 0 220px;
    order: 2;
    position: relative;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    height: 300px;
  }
  .coach_img-item {
  }
  .circle-1 {
    background-image: url("../assets/img/circle-1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .circle-2 {
    background-image: url("../assets/img/circle-2.png");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }
  .circle-3 {
    background-image: url("../assets/img/circle-3.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .coach_img-item-circle {
    position: relative;

    width: 200px;
    height: 200px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .coach_img-item-circle-photo {
  }
  .center {
    position: relative;

    z-index: 10;
    width: 250px;
    height: 250px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .center-circle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .coach_img-item-subtitle {
    font-size: 24px;
  }
  .coach_img-item-circle-online {
    position: absolute;
    bottom: 0;
    right: 0px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #a3a3ff;
  }

  .center-online {
    position: absolute;
    bottom: 0;
    right: 10px;
  }

  .coach_img-item-subtitle {
  }
  .coach_button {
    font-size: 24px;
    order: 3;
  }

  .coach_card {
    display: flex;
    flex-direction: column;
    justify-content: end;
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;

    width: 100%;
    height: 370px;
    border-radius: 30px;
    background-color: #5a00ff;
  }
  .coach_card-subscribe {
    display: flex;
    margin-bottom: 30px;
    justify-content: space-between;
  }
  .coach_card-title {
    text-align: left;

    line-height: 600%;
  }
  .coach_card-title-1 {
    font-size: 52px;
  }
  .coach_card-title-2 {
    font-size: 155px;
    font-weight: bold;
  }
  .coach_card-items {
    align-items: center;
    margin-top: 20px;
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
  .coach_card-text {
    margin-left: 20px;
    font-size: 28px;
  }
  .coach_card-price {
    font-size: 28px;
  }
  .coach_card-button {
    border-radius: 24px;
    color: #000000;
    font-size: 20px;
    width: 160px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }

  .prepare {
    padding: 10px;
  }
  .prepare_text {
  }
  .prepare_title {
    font-family: "Murs-Gothic";
    color: #0000ff;
    font-weight: bold;
    font-size: 42px;
  }
  .prepare_subtitle {
    font-size: 28px;
  }
  .prepare_img {
  }
  .prepare_img-item {
    margin: 20px 0;
    width: 100%;
    height: 400px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .prepare_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    font-size: 24px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .prepare_card {
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;
    width: 100%;
    height: 300px;
    border-radius: 30px;
    background-color: #0000ff;
  }
  .prepare_card-subscribe {
    display: flex;
    margin-bottom: 50px;
    justify-content: space-between;
  }
  .prepare_card-title {
    line-height: 420%;
    text-align: left;
    margin-right: 40px;
  }
  .prepare_card-title-1 {
    font-size: 40px;
  }
  .prepare_card-title-2 {
    font-size: 90px;
    font-weight: bold;
  }
  .prepare_card-items {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .prepare_card-text {
    font-size: 24px;
  }
  .prepare_card-price {
    font-size: 28px;
  }
  .prepare_card-button {
    border-radius: 24px;
    color: #000000;
    font-size: 20px;
    width: 160px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
}

@media (min-width: 1440px) and (max-width: 1680px) {
  .header {
    background: blue;
    height: 100px;
  }

  .header_container {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header_logo {
    width: 250px;
  }
  .header_button {
    width: 200px;
    height: 34px;
    border-radius: 16px;
    color: white;
    background-color: #0000ff;
    border: 2px solid #ffffff;
  }
  .bg_foto {
    height: 700px;
    background: url("../assets/img/mgu.jpg");
    padding-left: 50px;
    background-size: cover;
  }

  .main_button {
    width: 200px;
    height: 30px;
    border-radius: 32px;
    font-size: 20px;
    color: #ffffff;
    background-color: #0000ff;
    border: 0px solid #ffffff;
  }
  .title {
    color: white;
    font-family: "Murs-Gothic";
    font-weight: bold;
    line-height: 200%;
  }

  .text-title {
    text-align: left;
    font-size: 56px;
    padding-top: 60px;
  }
  .text-middle {
    font-size: 95px;
    margin-top: -20px;
  }
  .text-end {
    margin-top: 25px;
    font-size: 170px;
  }
  .theme {
    display: flex;
    flex-wrap: wrap;

    justify-content: start;
    color: #ffffff;
    position: relative;
    padding: 20px;
    height: 458px;
    background-image: linear-gradient(180deg, #0000ff 0%, #ffffff 100%);
    border: 0px solid #ffffff;
  }
  .theme-title {
    font-size: 28px;
    font-family: "Murs-Gothic";
    font-weight: bold;
    text-align: justify;
  }

  .theme-text {
    padding: 10px;
    bottom: 50%;
    position: absolute;
    font-size: 24px;
    text-align: justify;
  }
  .theme-subtitle {
    font-size: 35px;
    font-family: "Murs-Gothic";
    font-weight: bold;
  }

  .about {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    font-family: "Murs-Gothic";

    &_title {
      font-family: "Murs-Gothic";
      color: #0000ff;
      font-size: 66px;
      font-weight: bold;
    }

    &_logo {
      width: 350px;
      height: 50px;
    }

    &_items {
      display: flex;
      flex-direction: column;
    }

    &_text {
      font-size: 28px;
    }

    &_text-item {
      margin-top: 20px;
    }

    &_video {
      width: 100%;
      height: 800px;
      border-radius: 34px;
      background-color: #ffffff;
      border: 1px solid #000000;
    }
  }

  .education {
    padding: 10px;
  }
  .education_text {
  }
  .education_title {
    font-family: "Murs-Gothic";
    color: #0000ff;
    font-weight: bold;
    font-size: 36px;
  }
  .education_subtitle {
    font-size: 32px;
  }
  .education_img {
  }
  .education_img-item {
    margin: 20px 0;
    width: 100%;
    height: 600px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .education_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    font-size: 24px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .coach {
    display: flex;
    padding: 10px;

    flex-direction: column;
  }
  .coach_text {
    flex-direction: column;
  }
  .coach_title {
    font-family: "Murs-Gothic";
    font-size: 42px;
    color: blue;
  }
  .coach_subtitle-1 {
    font-size: 28px;
    order: 1;
  }
  .coach_subtitle-2 {
    font-size: 28px;
    order: 4;
    margin-top: 10px;
  }
  .coach_img {
    padding: 0 440px;
    order: 2;
    position: relative;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    height: 300px;
  }
  .coach_img-item {
  }
  .circle-1 {
    background-image: url("../assets/img/circle-1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .circle-2 {
    background-image: url("../assets/img/circle-2.png");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }
  .circle-3 {
    background-image: url("../assets/img/circle-3.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .coach_img-item-circle {
    position: relative;

    width: 200px;
    height: 200px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .coach_img-item-circle-photo {
  }
  .center {
    position: relative;

    z-index: 10;
    width: 250px;
    height: 250px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .center-circle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .coach_img-item-subtitle {
    font-size: 24px;
  }
  .coach_img-item-circle-online {
    position: absolute;
    bottom: 0;
    right: 0px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #a3a3ff;
  }

  .center-online {
    position: absolute;
    bottom: 0;
    right: 10px;
  }

  .coach_img-item-subtitle {
  }
  .coach_button {
    font-size: 24px;
    order: 3;
  }

  .coach_card {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: end;
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;

    width: 80%;
    height: 370px;
    border-radius: 30px;
    background-color: #5a00ff;
  }
  .coach_card-subscribe {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
  }
  .coach_card-title {
    text-align: left;

    line-height: 600%;
  }
  .coach_card-title-1 {
    font-size: 52px;
  }
  .coach_card-title-2 {
    font-size: 155px;
    font-weight: bold;
  }
  .coach_card-items {
    align-items: center;
    margin-top: 20px;
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
  .coach_card-text {
    margin-left: 20px;
    font-size: 28px;
  }
  .coach_card-price {
    font-size: 28px;
  }
  .coach_card-button {
    border-radius: 24px;
    color: #000000;
    font-size: 20px;
    width: 160px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }

  .prepare {
    padding: 10px;
  }
  .prepare_text {
  }
  .prepare_title {
    font-family: "Murs-Gothic";
    color: #0000ff;
    font-weight: bold;
    font-size: 42px;
  }
  .prepare_subtitle {
    font-size: 28px;
  }
  .prepare_img {
  }
  .prepare_img-item {
    margin: 20px 0;
    width: 100%;
    height: 600px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .prepare_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    font-size: 24px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .prepare_card {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;
    width: 80%;
    height: 300px;
    border-radius: 30px;
    background-color: #0000ff;
  }
  .prepare_card-subscribe {
    display: flex;
    margin-bottom: 50px;
    justify-content: space-between;
  }
  .prepare_card-title {
    line-height: 420%;
    text-align: left;
    margin-right: 40px;
  }
  .prepare_card-title-1 {
    font-size: 40px;
  }
  .prepare_card-title-2 {
    font-size: 90px;
    font-weight: bold;
  }
  .prepare_card-items {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .prepare_card-text {
    font-size: 26px;
  }
  .prepare_card-price {
    font-size: 28px;
  }
  .prepare_card-button {
    border-radius: 24px;
    color: #000000;
    font-size: 20px;
    width: 160px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
}

@media (min-width: 1680px) and (max-width: 1920px) {
  .header {
    background: blue;
    height: 100px;
  }

  .header_container {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header_logo {
    width: 250px;
  }
  .header_button {
    width: 200px;
    height: 34px;
    border-radius: 16px;
    color: white;
    background-color: #0000ff;
    border: 2px solid #ffffff;
  }
  .bg_foto {
    height: 900px;
    background: url("../assets/img/mgu.jpg");
    padding-left: 200px;
    background-size: cover;
  }

  .main_button {
    width: 200px;
    height: 30px;
    border-radius: 32px;
    font-size: 20px;
    color: #ffffff;
    background-color: #0000ff;
    border: 0px solid #ffffff;
  }
  .title {
    color: white;
    font-family: "Murs-Gothic";
    font-weight: bold;
    line-height: 200%;
  }

  .text-title {
    text-align: left;
    font-size: 64px;
    padding-top: 60px;
  }
  .text-middle {
    font-size: 108px;
    margin-top: -20px;
  }
  .text-end {
    margin-top: 25px;
    font-size: 192px;
  }
  .theme {
    display: flex;
    flex-wrap: wrap;

    justify-content: start;
    color: #ffffff;
    position: relative;
    padding: 20px;
    height: 458px;
    background-image: linear-gradient(180deg, #0000ff 0%, #ffffff 100%);
    border: 0px solid #ffffff;
  }
  .theme-title {
    font-size: 32px;
    font-family: "Murs-Gothic";
    font-weight: bold;
    text-align: justify;
  }

  .theme-text {
    padding: 10px;
    bottom: 50%;
    position: absolute;
    font-size: 32px;
    text-align: justify;
  }
  .theme-subtitle {
    font-size: 40px;
    font-family: "Murs-Gothic";
    font-weight: bold;
  }

  .about {
    font-family: "Murs-Gothic";

    &_title {
      font-family: "Murs-Gothic";
      color: #0000ff;
      font-size: 66px;
      font-weight: bold;
    }

    &_logo {
      width: 350px;
      height: 50px;
    }

    &_items {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &_text {
      font-size: 28px;
    }

    &_text-item {
      margin-top: 20px;
    }

    &_video-block {
      margin-top: 100px;
      width: 800px;
      height: 350px;
      border-radius: 34px;
      background-color: #ffffff;
      border: 1px solid #000000;
    }
  }

  .education {
    padding: 10px;
  }
  .education_text {
  }
  .education_title {
    font-family: "Murs-Gothic";
    color: #0000ff;
    font-weight: bold;
    font-size: 36px;
  }
  .education_subtitle {
    font-size: 32px;
  }
  .education_img {
    display: flex;
  }
  .education_img-item {
    margin: 20px 20px;
    width: 100%;
    height: 400px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .education_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    font-size: 24px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .coach {
    display: flex;
    padding: 10px;
  }

  .coach_items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .coach_item-1 {
  }
  .coach_item-2 {
  }
  .coach_text {
  }
  .coach_title {
    font-family: "Murs-Gothic";
    font-size: 42px;
    color: blue;
  }
  .coach_subtitle-1 {
    font-size: 28px;
    order: 1;
    padding: 0 400px 0 0;
  }
  .coach_subtitle-2 {
    padding: 0 400px 0 0;
    font-size: 28px;
    order: 2;
    margin-top: 50px;
  }
  .coach_img {
    height: 400px;
    padding: 0 20px;
    order: 3;
    position: relative;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
  }
  .coach_img-item {
  }
  .circle-1 {
    background-image: url("../assets/img/circle-1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .circle-2 {
    background-image: url("../assets/img/circle-2.png");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }
  .circle-3 {
    background-image: url("../assets/img/circle-3.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .coach_img-item-circle {
    width: 250px;
    height: 250px;
    position: relative;
    margin: 0 100px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }

  .center {
    position: relative;

    z-index: 10;
    width: 350px;
    height: 350px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .center-circle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .coach_img-item-subtitle {
    font-size: 24px;
  }
  .coach_img-item-circle-online {
    position: absolute;
    bottom: 0;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #a3a3ff;
  }

  .center-online {
    position: absolute;
    bottom: 0;
    right: 50px;
  }

  .coach_img-item-subtitle {
  }
  .coach_button {
    font-size: 24px;
    order: 3;
    width: 100%;
  }

  .coach_card {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: end;
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;

    width: 60%;
    height: 400px;
    border-radius: 30px;
    background-color: #5a00ff;
  }
  .coach_card-subscribe {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
  }
  .coach_card-title {
    text-align: left;

    line-height: 600%;
  }
  .coach_card-title-1 {
    font-size: 52px;
  }
  .coach_card-title-2 {
    font-size: 155px;
    font-weight: bold;
    margin-left: -6px;
  }
  .coach_card-items {
    align-items: center;
    margin-top: 20px;
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
  .coach_card-text {
    margin-left: 20px;
    font-size: 28px;
  }
  .coach_card-price {
    font-size: 28px;
  }
  .coach_card-button {
    border-radius: 24px;
    color: #000000;
    font-size: 20px;
    width: 160px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }

  .prepare {
    padding: 10px;
  }
  .prepare_text {
  }
  .prepare_title {
    font-family: "Murs-Gothic";
    color: #0000ff;
    font-weight: bold;
    font-size: 42px;
  }
  .prepare_subtitle {
    font-size: 28px;
  }
  .prepare_img {
    display: flex;
  }
  .prepare_img-item {
    margin: 20px 20px;
    width: 100%;
    height: 400px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .prepare_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    font-size: 24px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .prepare_card {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;
    width: 60%;
    height: 400px;
    border-radius: 30px;
    background-color: #0000ff;
  }
  .prepare_card-subscribe {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }
  .prepare_card-title {
    line-height: 480%;
    text-align: left;
    margin-right: 40px;
  }
  .prepare_card-title-1 {
    font-size: 64px;
  }
  .prepare_card-title-2 {
    font-size: 144px;
    font-weight: bold;
    margin-left: -5px;
  }
  .prepare_card-items {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .prepare_card-text {
    font-size: 26px;
  }
  .prepare_card-price {
    font-size: 28px;
  }
  .prepare_card-button {
    border-radius: 24px;
    color: #000000;
    font-size: 20px;
    width: 160px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
}
@media (min-width: 1920px) {
  .header {
    background: blue;
    height: 100px;
  }

  .header_container {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header_logo {
    width: 250px;
  }
  .header_button {
    width: 200px;
    height: 34px;
    border-radius: 16px;
    color: white;
    background-color: #0000ff;
    border: 2px solid #ffffff;
  }
  .bg_foto {
    height: 900px;
    background: url("../assets/img/mgu.jpg");
    padding-left: 200px;
    background-size: cover;
  }

  .main_button {
    width: 200px;
    height: 30px;
    border-radius: 32px;
    font-size: 20px;
    color: #ffffff;
    background-color: #0000ff;
    border: 0px solid #ffffff;
  }
  .title {
    color: white;
    font-family: "Murs-Gothic";
    font-weight: bold;
    line-height: 200%;
  }

  .text-title {
    text-align: left;
    font-size: 64px;
    padding-top: 60px;
  }
  .text-middle {
    font-size: 108px;
    margin-top: -20px;
  }
  .text-end {
    margin-top: 25px;
    font-size: 192px;
  }
  .theme {
    display: flex;
    flex-wrap: wrap;

    justify-content: start;
    color: #ffffff;
    position: relative;
    padding: 20px;
    height: 458px;
    background-image: linear-gradient(180deg, #0000ff 0%, #ffffff 100%);
    border: 0px solid #ffffff;
  }
  .theme-title {
    font-size: 32px;
    font-family: "Murs-Gothic";
    font-weight: bold;
    text-align: justify;
  }

  .theme-text {
    padding: 10px;
    bottom: 50%;
    position: absolute;
    font-size: 32px;
    text-align: justify;
  }
  .theme-subtitle {
    font-size: 40px;
    font-family: "Murs-Gothic";
    font-weight: bold;
  }

  .about {
    font-family: "Murs-Gothic";

    &_title {
      font-family: "Murs-Gothic";
      color: #0000ff;
      font-size: 66px;
      font-weight: bold;
    }

    &_logo {
      width: 350px;
      height: 50px;
    }

    &_items {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &_text {
      font-size: 28px;
    }

    &_text-item {
      margin-top: 20px;
    }

    &_video-block {
      margin-top: 100px;
      width: 800px;
      height: 350px;
      border-radius: 34px;
      background-color: #ffffff;
      border: 1px solid #000000;
    }
  }

  .education {
    padding: 10px;
  }
  .education_text {
  }
  .education_title {
    font-family: "Murs-Gothic";
    color: #0000ff;
    font-weight: bold;
    font-size: 36px;
  }
  .education_subtitle {
    font-size: 32px;
  }
  .education_img {
    display: flex;
  }
  .education_img-item {
    margin: 20px 20px;
    width: 100%;
    height: 400px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .education_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    font-size: 24px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .coach {
    display: flex;
    padding: 10px;
  }

  .coach_items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .coach_item-1 {
  }
  .coach_item-2 {
  }
  .coach_text {
  }
  .coach_title {
    font-family: "Murs-Gothic";
    font-size: 42px;
    color: blue;
  }
  .coach_subtitle-1 {
    font-size: 28px;
    order: 1;
    padding: 0 400px 0 0;
  }
  .coach_subtitle-2 {
    padding: 0 400px 0 0;
    font-size: 28px;
    order: 2;
    margin-top: 50px;
  }
  .coach_img {
    height: 400px;
    padding: 0 20px;
    order: 3;
    position: relative;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
  }
  .coach_img-item {
  }
  .circle-1 {
    background-image: url("../assets/img/circle-1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .circle-2 {
    background-image: url("../assets/img/circle-2.png");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  }
  .circle-3 {
    background-image: url("../assets/img/circle-3.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .coach_img-item-circle {
    width: 250px;
    height: 250px;
    position: relative;
    margin: 0 100px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }

  .center {
    position: relative;

    z-index: 10;
    width: 350px;
    height: 350px;
    border-radius: 224px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .center-circle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .coach_img-item-subtitle {
    font-size: 24px;
  }
  .coach_img-item-circle-online {
    position: absolute;
    bottom: 0;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #a3a3ff;
  }

  .center-online {
    position: absolute;
    bottom: 0;
    right: 50px;
  }

  .coach_img-item-subtitle {
  }
  .coach_button {
    font-size: 24px;
    order: 3;
    width: 100%;
  }

  .coach_card {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: end;
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;

    width: 60%;
    height: 400px;
    border-radius: 30px;
    background-color: #5a00ff;
  }
  .coach_card-subscribe {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
  }
  .coach_card-title {
    text-align: left;

    line-height: 600%;
  }
  .coach_card-title-1 {
    font-size: 52px;
  }
  .coach_card-title-2 {
    font-size: 155px;
    font-weight: bold;
    margin-left: -6px;
  }
  .coach_card-items {
    align-items: center;
    margin-top: 20px;
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
  .coach_card-text {
    margin-left: 20px;
    font-size: 28px;
  }
  .coach_card-price {
    font-size: 28px;
  }
  .coach_card-button {
    border-radius: 24px;
    color: #000000;
    font-size: 20px;
    width: 160px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }

  .prepare {
    padding: 10px;
  }
  .prepare_text {
  }
  .prepare_title {
    font-family: "Murs-Gothic";
    color: #0000ff;
    font-weight: bold;
    font-size: 42px;
  }
  .prepare_subtitle {
    font-size: 28px;
  }
  .prepare_img {
    display: flex;
  }
  .prepare_img-item {
    margin: 20px 20px;
    width: 100%;
    height: 400px;
    border-radius: 49px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
  .prepare_button {
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 25px;
    font-size: 24px;
    border-radius: 42px;
    background-color: #0000ff;
    border: 0px solid #000000;
  }

  .prepare_card {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    order: 5;
    margin-top: 20px;
    color: #ffffff;
    padding: 20px;
    width: 60%;
    height: 400px;
    border-radius: 30px;
    background-color: #0000ff;
  }
  .prepare_card-subscribe {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }
  .prepare_card-title {
    line-height: 480%;
    text-align: left;
    margin-right: 40px;
  }
  .prepare_card-title-1 {
    font-size: 64px;
  }
  .prepare_card-title-2 {
    font-size: 144px;
    font-weight: bold;
    margin-left: -5px;
  }
  .prepare_card-items {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .prepare_card-text {
    font-size: 26px;
  }
  .prepare_card-price {
    font-size: 28px;
  }
  .prepare_card-button {
    border-radius: 24px;
    color: #000000;
    font-size: 20px;
    width: 160px;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
}
</style>
