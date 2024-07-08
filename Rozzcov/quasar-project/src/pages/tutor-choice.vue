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
        НАСТАВНИЧЕСТВО > ВЫБОР НАСТАВНИКА
    </div>

    <q-card class="tutor_card">
        <q-span class="card-title-text">Рожков Иван Михайлович</q-span>
        <ul class="tutor_list">
            <li>Победитель Межрегиональной олимпиады на базе <br>
               ведомственных организаций по обществознанию</li>
            <li>Победитель олимпиады СПбГУ по политологии</li>
            <li>Призер II-ой степени олимпиады СПбГУ по 
               международным отношениям</li>
            <li>Призер II-ой степени Московской олимпиады 
               школьников по истории</li>
            <li>Призер олимпиады РАНХиГС по обществознанию</li>
            <li>Призер III-й степени олимпиады "Высшая проба" по 
               обществознанию</li>
            <li >Призер регионального этапа ВСОШ по обществознанию</li>


        </ul>
        <q-span class="results">Результаты ЕГЭ (2024 г.): История - 100, Обществознание - 92, Русский язык - 89</q-span>
        <div class="button_block">
            <button class='subscribe_btn'><div class="lock"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 500 500">
  <defs>
  </defs>
  <g id="lock" fill="gray">
    <path id="Прямоугольник_583_копия" data-name="Прямоугольник 583 копия" class="cls-1" d="M208.994,1200.99h89.991a65,65,0,0,1,65,65v59.02a65,65,0,0,1-65,65H208.994a65,65,0,0,1-65-65v-59.02A65,65,0,0,1,208.994,1200.99Zm12.5,38.07h64.992a34,34,0,0,1,34,34v63.39a34,34,0,0,1-34,34H221.5a34,34,0,0,1-34-34v-63.39A34,34,0,0,1,221.5,1239.06Z" transform="translate(0 -1200)"/>
    <path id="Прямоугольник_593" data-name="Прямоугольник 593" class="cls-1" d="M109,1305H399a53,53,0,0,1,53,53v290a53,53,0,0,1-53,53H109a53,53,0,0,1-53-53V1358A53,53,0,0,1,109,1305Zm145,98a61,61,0,1,1-61,61A61,61,0,0,1,254,1403Zm0,122a61.471,61.471,0,0,0,19-3v83a19,19,0,0,1-38,0v-83A62.048,62.048,0,0,0,254,1525Z" transform="translate(0 -1200)"/>
  </g>
</svg></div><div class="text">нажмите, чтобы оформить подписку</div></button><br>
        </div>
        <div class="img_people_block">
            <img src="src/assets/img/ivan.svg" class="people_img">
        </div>
    </q-card>
</template>


<style>
.title {
    font-family: 'Murs Gothic', sans-serif;
    font-weight: bold;
    margin-bottom: 35px;
    font-size: 2vw;
    color: blue;
    font-family: 'Murs-Gothic';
}

.tutor_card {
    width: 1500px;
    height: 700px;
    border-radius: 30px;
    padding-left: 30px;
    padding-top: 25px;
    margin-left: 10px;
    outline: 1px solid #000000;
margin-bottom: 20px;
}

.card-title-text {
    font-size: 1.8rem;
    color: black;
}
.text{
   margin-left: 20px;
}

.tutor_list {
    line-height: 35px;
    color: black;
    font-weight: normal;
    font-size: 20px;
    margin-top: 5px;
}

.tutor_list li::before {
    content: '•';
    font-size: 40px;
    margin-right: 15px;
}




.results{
   display: block;
    margin-top: 20px;
    font-size: 1.1rem;

}

.button_block {
    margin-top: 160px;
}

.subscribe_btn {
   display: flex;
    color: gray;
align-self: center;
align-items: center;
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


.img_people_block{
    position: absolute;
    display: block;
right: 0px;
width: 650px;
    bottom: -40px;
}
</style>