<script>




export default {
  components:{


  },
  data(){
    return{
      text_a:'',
      text_b:'',
      text_c:'',
      error_text:'',
      
    };
  },
  mounted() {

},

methods: {
  answer(){
   if(this.text_a == '' || this.text_b == '' || this.text_c == ''){
      this.error_text = 'Заполните все поля!'
      
   }
  }
},

}

</script>
<template>
<div class="row-3">
<div class="col title">
Курсы 
</div>
<div class="col">
   <q-input rounded outlined  bottom-slots v-model="text" label="Нажмите, чтобы начать поиск" >
        <template v-slot:prepend>
         <q-icon name="search" />
        </template>

      </q-input>
      <div class="col frame fit row wrap justify-between items-center content-center">
         <div class="filters">
            <q-span>фильтры:</q-span>
            <q-btn class="filter" color="primary">ВШЭ - Высшая проба</q-btn>
            <q-btn class="filter">РАНХиГС</q-btn>
            <q-btn class="filter">Ломоносов</q-btn>
            <q-btn class="filter">СПбГУ</q-btn>
         </div>
         <div class="percent">
            <q-span>ВЫПОЛНЕНО:</q-span>
            <q-span>65%</q-span>
         </div>
      </div>
         
        
</div>


<q-card class="row test">
<div class="col-12 number fit row wrap justify-start items-start content-start">
   <q-span class="num">14 (0101014) </q-span>
   <q-span class="history">история</q-span>
   <q-span class="ft-history">отечественная история</q-span>
   <q-span class="upper-prob">ВШЭ - Высшая проба</q-span>
</div>
<div class="text fit">
<div class="col-12 title-text ">Прочтите отрывок  из сочинения историка  С.М. Соловьева и ответьте на вопросы.</div>
<div class="col-12 text-test">«…Пришел безбожный царь (1) на Русскую землю со множеством воинов… и стал станом на реке на Воронеже, близ (2) земли. И прислал в (3) к великому князю 
Юрию Ингоревичу… послов без пользы для дела, прося десятины во всем: в князьях, и в людях всех сословий, и во всем. И услышал великий князь Юрий Ингоревич… 
о приходе безбожного царя (1), и быстро послал в город Владимир к благоверному великому князю Георгию Всеволодовичу Владимирскому, прося у него либо помощи 
воинами против безбожного царя (1), либо чтобы он сам войска привел. Князь же великий Георгий Всеволодович Владимирский и сам войско не повел, и на помощь
воинов не послал, желая сам, в одиночку, сразиться с (1). …И послал сына своего князя Федора Юрьевича… к безбожному царю (1) с дарами и великими мольбами 
не воевать (2) земли. Князь Федор Юрьевич пришел на реку Воронеж к царю (1) и принес ему дары и молил царя, чтобы не воевал он (2) земли. Безбожный царь (1), 
будучи лжив и немилосерд, принял дары и неискренне обещал не ходить войною на (2) землю. И грозился-хвалился воевать землю Русскую». </div>
</div>
<div class="col-12 answer row">
   <div class="option col-12">
      <q-span>A) О каком российском правителе идёт речь?</q-span>
      <q-input rounded outlined v-model="text_a"   type="text" dense   label="Введите ответ" ></q-input>
   </div>
   <div class="option col-12">
      <q-span>Б) Назовите дату начала его правления</q-span>
      <q-input rounded outlined v-model="text_b" dense label="Введите ответ" ></q-input>
   </div>
   <div class="option col-12">
      <q-span>В) Назовите имя следующего за ним царя</q-span>
      <q-input rounded outlined v-model="text_c" dense label="Введите ответ" ></q-input>
   </div>
   <q-span> Примечание: вводить имена и прозвища людей нужно только кириллическми символами. Например, «Пётр Первый», а не «Пётр 1» или «Пётр I»  </q-span>
 
</div>
<div class="col-12 fit row wrap justify-between items-center content-center">
   <div class="button">
   <q-btn class="answer-btn" @click="answer">ответить </q-btn>
   <q-btn class="true-btn">показать правильные ответы</q-btn>
   <q-span class="error">{{ this.error_text }}</q-span>
</div>

<div class="task ">
   0/3
</div>
</div>



</q-card>








</div>





 </template>  


 <style scoped lang="scss">

.title-text{
margin-bottom: 10px;
   font-size: 18px;
   text-align: center;
   
    }
   .num {
      color: blue;
   
   }
   .history {
      background: #7800ff;
      color: white;
      padding: 5px;
      border-radius: 20px;
      margin: 0 10px;
   }
   .ft-history {
      color: white;
      background: #3c00ff;
      padding: 5px;
      border-radius: 20px;
      margin: 0 10px;
   }
   .upper-prob {
      color: white;
      background: #008aff;
      padding: 5px;
      border-radius: 20px;
      margin: 0 10px;
   }
   
   
   .error{
      font-size: 18px;
      color:red;
      font-weight: 600;
   }
   
    .task{
      color: gray;
      font-size: 1.4rem;
    }
    .test{
   
      margin: 10px;
      padding: 20px;
      border: 1px solid black;
      border-radius: 20px;
   
    }
    .true-btn{
      background: gray;
      color: white;
      border-radius: 20px;
      margin-top: 20px;
    }
    .answer-btn{
      background: $standart;
      color: white;
      border-radius: 20px;
      margin-top: 20px;
      margin-right: 20px;
    }
   
   .filter{
      margin: 0 10px;
      border-radius: 20px;
   }
   .frame{
      padding: 10px;
   }
   
   .answer{
      margin-top: 20px;
   }
   .option{
      margin-top: 10px;
   }
   .option q-input{
      height: 40px;
   }
   
   .search{
      position: relative;
      left: 0;
   
   }



</style>
