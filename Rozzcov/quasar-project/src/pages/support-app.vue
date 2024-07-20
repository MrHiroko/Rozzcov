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
    <div class="support_block">
        <q-card class="support_card">
            <q-span class="support_text">
                Если у вас есть вопросы или появилась проблема, мы готовы вам помочь:) <br>
                <q-span class="support_subtext">Свяжитесь с нами в любое удобное время, и мы постараемся ответить вам
                    как можно скорее!</q-span>
            </q-span>
            <q-btn class="support_btn">Нажмите, чтобы с нами связаться</q-btn>
        </q-card>
        <q-span class="support_text_subtext">
            По вопросам сотрудничества: <br>
            rocoop@yandex.ru
        </q-span>
    </div>

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

.support_text_subtext {
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

.support_text {
    font-size: 1.6rem;
}

.support_subtext {
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

@media(min-width:320px) and (max-width:374px) {
    .support_card {
        width: 300px;
        height: 250px;
        margin-left: 0px;
    }
    .support_block{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .support_text {
        font-size: 1rem;
    }

    .support_subtext {
        font-size: 0.6rem;
    }

    .support_btn {
        width: 250px;
        height: 35px;
        font-size: 10px;
        left:25px;
    }

    
    .support_text_subtext {
        margin-top: 20px;
        margin-left: 00px;
    font-size: 1rem;
}

}
@media(min-width:375px) and (max-width:424px) {
    .support_card {
        width: 350px;
        height: 300px;
        margin-left: 0px;
    }
    .support_block{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .support_text {
        font-size: 1.2rem;
    }

    .support_subtext {
        font-size: 0.7rem;
    }

    .support_btn {
        width: 300px;
        height: 40px;
        font-size: 12px;
        left:25px;
    }

    
    .support_text_subtext {
        margin-top: 20px;
        margin-left: 00px;
    font-size: 1.2rem;
}

}
@media(min-width:375px) and (max-width:424px) {
    .support_card {
        width: 350px;
        height: 300px;
        margin-left: 0px;
    }
    .support_block{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .support_text {
        font-size: 1.2rem;
    }

    .support_subtext {
        font-size: 0.7rem;
    }

    .support_btn {
        width: 300px;
        height: 40px;
        font-size: 12px;
        left:25px;
    }

    
    .support_text_subtext {
        margin-top: 20px;
        margin-left: 00px;
    font-size: 1.2rem;
    }
}


@media(min-width:425px) and (max-width:767px) {
    .support_card {
        width: 400px;
        height: 300px;
        margin-left: 0px;
    }
    .support_block{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .support_text {
        font-size: 1.4rem;
    }

    .support_subtext {
        font-size: 0.8rem;
    }

    .support_btn {
        width: 330px;
        height: 45px;
        font-size: 14px;
        left:35px;
    }

    
    .support_text_subtext {
        margin-top: 20px;
        margin-left: 00px;
    font-size: 1.3rem;
}

}
@media(min-width:768px) and (max-width:1023px) {
    .support_card {
        width: 740px;
        height: 315px;
        margin-left: 0px;
    }
    .support_block{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .support_text {
        font-size: 1.5rem;
    }

    .support_subtext {
        font-size: 1rem;
    }

    .support_btn {
        width: 380px;
        height: 50px;
        font-size: 16px;
        left:170px;
    }

    
    .support_text_subtext {
        margin-top: 20px;
        margin-left: 00px;
    font-size: 1.5rem;
}

}
@media(min-width:1024px) and (max-width:1439px) {
    .support_card {
        width: 680px;
        height: 315px;
        margin-left: 0px;
    }
    .support_block{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .support_text {
        font-size: 1.5rem;
    }

    .support_subtext {
        font-size: 1rem;
    }

    .support_btn {
        width: 380px;
        height: 50px;
        font-size: 16px;
        left:150px;
    }

    
    .support_text_subtext {
        margin-top: 20px;
        margin-left: 00px;
    font-size: 1.5rem;
}

}
@media(min-width:1440px) and (max-width:1830px) {
    .support_card {
        width: 1050px;
        height: 315px;
        margin-left: 10px;
    }
    .support_block{
        display: flex;
        flex-direction: column;
        

    }
    .support_text {
        font-size: 1.6rem;
    }

    .support_subtext {
        font-size: 1rem;
    }

    .support_btn {
        width: 500px;
        height: 55px;
        font-size: 20px;
        left:20px;
        bottom:20px;
    }

    
    .support_text_subtext {
        margin-top: 20px;
        margin-left: 20px;
    font-size: 1.5rem;
}

}

/* width: 1500px;
    height: 350px; */
</style>