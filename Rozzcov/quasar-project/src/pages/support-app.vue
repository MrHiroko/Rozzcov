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
        ПОДДЕРЖКА
    </div>
<q-card class="support_card">
    <q-span class="support_text">
Если у вас есть вопросы или появилась проблема, мы готовы вам помочь:) <br>
<q-span class="support_subtext">Свяжитесь с нами в любое удобное время, и мы постараемся ответить вам как можно скорее!</q-span>
    </q-span>
    <q-btn class="support_btn">Нажмите, чтобы с нами связаться</q-btn>
</q-card>
<q-span class="support_text_subtext">
По вопросам сотрудничества: <br>
rocoop@yandex.ru
</q-span>

</template>


<style>
.title {
    font-family: 'Murs Gothic', sans-serif;
    font-weight: bold;
    margin-bottom: 35px;
    font-size: 4vw;
    color: blue;
    font-family: 'Murs-Gothic';
}
.support_text_subtext{
    display: block;
margin-top: 20px;
margin-left: 20px;
font-size: 1.5rem;
}

.support_card {
    position: relative;
    width: 1500px;
    height: 350px;
    border-radius: 30px;
    padding-left: 30px;
    padding-top: 25px;
    margin-left: 10px;
    outline: 1px solid #000000;

}
.support_text{
    font-size: 1.6rem;
}

.support_subtext{
    color: grey;
    font-size: 1rem;
}






.support_btn {
    position: absolute;
    left: 20px;
    bottom: 20px;
    color: white;
    background-color: #0000FF;
    width: 550px;
    height: 60px;
    border-radius: 50px;
    font-size: 24px;
}




</style>