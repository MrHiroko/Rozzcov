<script>




export default {
  components:{


  },
  data(){
    return{
      cards: [
         {title:"БИОЛОГИЯ",bg:["#1de1ba"], color:["#ffffff"]},
         {title:"ФИЗИКА",bg:["#17ecd5"], color:["#ffffff"]},
         {title:"МАТЕМАТИКА",bg:["#14dfe6"], color:["#ffffff"]},
         {title:"ОБЩЕСТВОЗНАНИЕ",bg:["#2fc3d0"], color:["#ffffff"]},
         {title:"МЕЖДУНАРОДНЫЕ ОТНОШЕНИЯ",bg:["#00c6ff"], color:["#ffffff"]},
         {title:"ПОЛИТОЛОГИЯ",bg:["#009cff"], color:["#ffffff"]},
         {title:"СОЦИОЛОГИЯ",bg:["#0072ff"], color:["#ffffff"]},
         {title:"ИСТОРИЯ",bg:["#2837ff"], color:["#ffffff"]},
         {title:"МХК",bg:["#4800ff"], color:["#ffffff"]},
         {title:"ФИЛОСОФИЯ",bg:["#4d5be3"], color:["#ffffff"]},
         {title:"ЛИТЕРАТУРА",bg:["#7800ff"], color:["#ffffff"]},
         {title:"ФИЛОЛОИГИЯ",bg:["#9600ff"], color:["#ffffff"]},
         {title:"АНГЛИЙСКИЙ ЯЗЫК",bg:["#be61ff"], color:["#ffffff"]},
         {title:"РУССКИЙ ЯЗЫК",bg:["#d130ff"], color:["#ffffff"]},
         {title:"КИТАЙСКИЙ ЯЗЫК",bg:["#fc27ff"], color:["#ffffff"]},


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
ТЕОРИЯ
</div>
<div class="col">
   <q-input dense rounded outlined  bottom-slots v-model="text" label="Нажмите, чтобы начать поиск" >
        <template v-slot:prepend>
         <q-icon name="search" />
        </template>

      </q-input>
         
        
</div>

   <div class="row  cards" >
    
   <q-card @click="$router.push('/courseApp')"   v-for="card in cards" :key="card.id" class="  wrap justify-center items-center content-center col-4   card"  :style="{background:card.bg, color:card.color}" >

      <div class="card-tittle">
         
         {{card.title}}
      </div>
      



   </q-card>


</div>



</div>





 </template>  


 <style scoped lang="scss">


@import '../css/pages/courses-app.scss';







</style>
