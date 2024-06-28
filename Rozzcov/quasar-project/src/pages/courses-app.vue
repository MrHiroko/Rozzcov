<script>




export default {
  components:{


  },
  data(){
    return{
      cards: [
         {title:"ОЛИМПИАДЫ ПО ИСТОРИИ",textes: ["Отечественная история","Мировая история","Культура"],bg:["#7800FF"], color:["#ffffff"]},
         {title:"ОЛИМПИАДЫ ПО МЕЖДУНАРОДНЫМ ОТНОШЕНИЯМ",textes: ["Теория международных отношений","Международные организации"], bg:["#4800FF"], color:["#ffffff"]},
         {title:"ОЛИМПИАДЫ ПО ПОЛИТОЛОГИИ", textes: ["Политология","Политический анализ","Философия"],bg:["#3548FF"], color:["#ffffff"]},
         {title:"ОЛИМПИАДЫ ПО СОЦИОЛОГИИ", textes: ["В процессе разработки"],bg:["#FFFFFF"], color:["#737373"]},
         {title:"ОЛИМПИАДЫ ПО ОБЩЕСТВОЗНАНИЮ", textes: ["В процессе разработки"],bg:["#FFFFFF"], color:["#737373"]},
         {title:"ОЛИМПИАДЫ ПО ПРАВУ", textes: ["В процессе разработки"],bg:["#FFFFFF"], color:["#737373"]},

       ],
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
         
        
</div>

   <div class="row  cards" >
    
   <q-card @click="$router.push('/courseApp')"   v-for="card in cards" :key="card.id" class="col-5 card"  :style="{background:card.bg, color:card.color}" >

      <div class="card-tittle">
         
         {{card.title}}
      </div>
      
      <div class="card-text">
  
      <ul  class="card-list">
         <li v-for="(text,index) in card.textes" :key="index"  >{{ text }}</li>
      </ul>

   </div>


   </q-card>


</div>



</div>





 </template>  


 <style scoped>

.card{
   width: 712px;
   height: 370px;
   border-radius: 30px;
   padding: 48px;
   margin: 20px;
   outline: 1px solid #000000;
   color:#ffffff;
}



.card-tittle{
   font-size: 50px;
   line-height: 140%;
}
.card-list > li{
   font-size: 20px;
line-height: 250%;
position: relative;
padding-left: 20px;
}
.card-list > li::before{
   content: '';
  display: block;
  position: absolute;
  top: 50%;
  left: 7px;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
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
