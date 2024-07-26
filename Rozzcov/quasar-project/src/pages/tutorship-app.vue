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
            <button class='subscribe_btn' @click="$router.push('/settings')">нажмите, чтобы оформить
                подписку</button><br>
            <button @click="$router.push('/tutor-choice')" class='tutorship_btn'>нажмите, чтобы выбрать
                наставникa</button>
        </div>
        <div class="img_people_block">
            <img src="src/assets/img/people.svg" class="people_img">
        </div>
    </q-card>
</template>


<style scoped>


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

.people_img {}

.img_people_block {
    width: 700px;
    height: 600px;
    position: absolute;
    top: 145px;
    left: 600px;
}

@media (min-width:320px) and (max-width:374px) {
    .tutorship_card {
        width: 300px;
        height: 600px;
    }

    .card-title-text {
        font-size: 1rem;
    }

    .tutorship_list {
        font-size: 11px;
    }

    .tutorship_list li::before {
        content: '•';
        font-size: 20px;
        margin-right: 15px;
    }

    .subscribe_btn {

        width: 180px;
        height: 30px;
        border-radius: 25px;
        font-size: 8px;
    }

    .tutorship_btn {
        margin-top: 25px;
        width: 180px;
        height: 30px;
        border-radius: 25px;
        font-size: 8px;

    }

    .button_block {
        margin-top: 140px;
        margin-left: 25px;
    }

    .img_people_block {
        width: 150px;
        height: 150px;
        position: absolute;
        top: 350px;
        left: 70px;
    }
}

@media (min-width:375px) and (max-width:424px) {
    .tutorship_card {
        width: 355px;
        height: 700px;
    }

    .card-title-text {
        font-size: 1.2rem;
    }

    .tutorship_list {
        font-size: 14px;
    }

    .tutorship_list li::before {
        content: '•';
        font-size: 20px;
        margin-right: 15px;
    }

    .subscribe_btn {

        width: 240px;
        height: 35px;
        border-radius: 25px;
        font-size: 11px;
    }

    .tutorship_btn {
        margin-top: 25px;
        width: 240px;
        height: 35px;
        border-radius: 25px;
        font-size: 11px;

    }

    .button_block {
        margin-top: 180px;
        margin-left: 24px;
    }

    .img_people_block {
        width: 210px;
        height: 210px;
        position: absolute;
        top: 380px;
        left: 72px;
    }
}

@media (min-width:425px) and (max-width:767px) {
    .tutorship_card {
        width: 400px;
        height: 800px;
        margin: 0 auto;
    }

    .card-title-text {
        font-size: 1.4rem;
    }

    .tutorship_list {
        font-size: 15px;
    }

    .tutorship_list li::before {
        content: '•';
        font-size: 22px;
        margin-right: 15px;
    }

    .subscribe_btn {

        width: 300px;
        height: 42px;
        border-radius: 30px;
        font-size: 14px;
    }

    .tutorship_btn {
        margin-top: 25px;
        width: 300px;
        height: 42px;
        border-radius: 30px;
        font-size: 14px;

    }

    .button_block {
        margin-top: 275px;
        margin-left: 20px;
    }

    .img_people_block {
        width: 260px;
        height: 260px;
        position: absolute;
        top: 380px;
        left: 70px;
    }
}

@media (min-width:768px) and (max-width:1023px) {
    .tutorship_card {
        width: 700px;
        height: 500px;
        margin: 0 auto;
    }

    .card-title-text {
        font-size: 1.4rem;
    }

    .tutorship_list {
        font-size: 15px;
    }

    .tutorship_list li::before {
        content: '•';
        font-size: 24px;
        margin-right: 15px;
    }

    .subscribe_btn {

        width: 330px;
        height: 45px;
        border-radius: 30px;
        font-size: 15px;
    }

    .tutorship_btn {
        margin-top: 25px;
        width: 330px;
        height: 45px;
        border-radius: 30px;
        font-size: 15px;

    }

    .button_block {
        margin-top: 30px;
        margin-left: 0px;
    }

    .img_people_block {
        width: 310px;
        height: 300px;
        position: absolute;
        top: 253px;
        left: 385px;
    }
}
@media (min-width:1024px) and (max-width:1439px) {
    .tutorship_card {
        width: 680px;
        height: 500px;
        
    }

    .card-title-text {
        font-size: 1.4rem;
    }

    .tutorship_list {
        font-size: 15px;
    }

    .tutorship_list li::before {
        content: '•';
        font-size: 24px;
        margin-right: 15px;
    }

    .subscribe_btn {

        width: 330px;
        height: 45px;
        border-radius: 30px;
        font-size: 15px;
    }

    .tutorship_btn {
        margin-top: 25px;
        width: 330px;
        height: 45px;
        border-radius: 30px;
        font-size: 15px;

    }

    .button_block {
        margin-top: 30px;
        margin-left: 0px;
    }

    .img_people_block {
        width: 300px;
        height: 300px;
        position: absolute;
        top: 261px;
        left: 380px;
    }
}
@media (min-width:1440px) and (max-width:1850px) {
    .tutorship_card {
        width: 1090px;
        height: 600px;
        
    }

    .card-title-text {
        font-size: 1.6rem;
    }

    .tutorship_list {
        font-size: 17px;
    }

    .tutorship_list li::before {
        content: '•';
        font-size: 30px;
        margin-right: 15px;
    }

    .subscribe_btn {

        width: 400px;
        height: 48px;
        border-radius: 40px;
        font-size: 18px;
    }

    .tutorship_btn {
        margin-top: 25px;
        width: 400px;
        height: 48px;
        border-radius: 40px;
        font-size: 18px;

    }

    .button_block {
        margin-top: 85px;
        margin-left: 0px;
    }

    .img_people_block {
        width: 500px;
        height: 600px;
        position: absolute;
        top: 202px;
        left: 500px;
    }
}
</style>