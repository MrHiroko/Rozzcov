<script>
export default {
    components: {

    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>

<template>
    <div class="title">
        НАСТАВНИЧЕСТВО
    </div>

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
            <button class='subscribe_btn' @click="$router.push('/settings')">нажмите, чтобы оформить подписку</button><br>
            <button @click="$router.push('/tutor-choice')"  class='tutorship_btn'>нажмите, чтобы выбрать наставникa</button>
        </div>
        <div class="img_people_block">
            <img src="src/assets/img/people.svg" class="people_img">
        </div>
    </q-card>
</template>


<style scoped>
.title {
    font-family: 'Murs Gothic', sans-serif;
    font-weight: bold;
    margin-bottom: 35px;
    font-size: 4vw;
    color: blue;
    font-family: 'Murs-Gothic';
}

.tutorship_card {
    width: 1500px;
    height: 700px;
    border-radius: 30px;
    padding-left: 30px;
    padding-top: 25px;
    margin-left: 10px;
    outline: 1px solid #000000;

}

.card-title-text {
    font-size: 1.8rem;
    color: black;
}

.tutorship_list {
    line-height: 35px;
    color: black;
    font-weight: normal;
    font-size: 20px;
    margin-top: 5px;
}

.tutorship_list li::before {
    content: '•';
    font-size: 40px;
    margin-right: 15px;
}

.subscribe_li {
    color: grey;
}

.button_block {
    margin-top: 160px;
}

.subscribe_btn {
    color: white;
    background-color: #0000FF;
    width: 550px;
    height: 60px;
    border-radius: 50px;
    font-size: 24px;
}

.tutorship_btn {
    margin-top: 25px;
    color: black;
    background-color: white;
    width: 550px;
    height: 60px;
    border-radius: 50px;
    font-size: 24px;
    border: 1px solid #000000;
}

.people_img {
    
    
}
.img_people_block{
    width: 700px;
    height: 600px;
    position: absolute;
    top: 145px;
    left: 600px;
}
</style>