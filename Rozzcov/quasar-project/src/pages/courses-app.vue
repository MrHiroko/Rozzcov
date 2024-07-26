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
<div class="col title">
Курсы
</div>
<div class="col">
   <q-input dense rounded outlined  bottom-slots v-model="text" label="Нажмите, чтобы начать поиск" >
        <template v-slot:prepend>
         <q-icon name="search" />
        </template>

      </q-input>
         
        
</div>

   <div class="row  cards" >
    
   <q-card @click="$router.push('/courseApp')"   v-for="card in cards" :key="card.id" class="  wrap justify-center items-center content-center col-6   card"  :style="{background:card.bg, color:card.color}" >

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


 <style scoped lang="scss">


@import '../css/pages/courses-app.scss';







</style>
