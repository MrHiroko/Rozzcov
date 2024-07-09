<script>




export default {
  components:{


  },
  data(){
    return{
 
    };
  },
  mounted() {

},

methods: {
  
},

}

</script>
<template>
<div class="row-3">
<div class="col tittle">
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
<div class="col-12 number">
   <q-span class="num">14 (0101014) </q-span>
   <q-span class="history">история</q-span>
   <q-span class="ft-history">отечественная история</q-span>
   <q-span class="upper-prob">ВШЭ - Высшая проба</q-span>
</div>

<div class="col-12 answer row">
   <div class="option col-12">
      <q-span>A) Назовите три мирных договора или перемирия, заключенные в XVII в. между Русским царством и Речью Посполитой 
         (в порядке возрастания по дате подписания).</q-span>
      <q-input class="input" rounded outlined v-model="text"   type="text" dense   label="Введите ответ" ></q-input>
      <q-input class="input" rounded outlined v-model="text"   type="text" dense   label="Введите ответ" ></q-input>
      <q-input  class="input" rounded outlined v-model="text"   type="text" dense   label="Введите ответ" ></q-input>
   </div>
   <div class="option col-12">
      <q-span>Б) В каких годах они были подписаны?</q-span>
      <q-input class="input" rounded outlined v-model="text"   type="text" dense   label="Введите ответ" ></q-input>
      <q-input class="input" rounded outlined v-model="text"   type="text" dense   label="Введите ответ" ></q-input>
      <q-input class="input" rounded outlined v-model="text"   type="text" dense   label="Введите ответ" ></q-input>
   </div>

</div>
<div class="col-12 fit row wrap justify-between items-center content-center">
   <div class="button">
   <q-btn class="answer-btn" >ответить</q-btn>
   <q-btn class="true-btn">показать правильные ответы</q-btn>
</div>
<div class="task ">
   1/2
</div>
</div>



</q-card>








</div>





 </template>  


 <style scoped lang="scss">

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


.input{
   margin: 10px 0px;
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

.tittle{
   font-family: 'Murs Gothic', sans-serif;
   font-weight: bold;
   margin-bottom: 35px;
   font-size: 4vw;
   color: blue;
   font-family: 'Murs-Gothic';
}
</style>
