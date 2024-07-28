<script>
export default{
   components:{

   },
   data(){
      return{
         video: [
         {title:"Блок 1: Европейский союз",time:"00:00:00",button:"начать просмотр",icon:`    <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="book">
    <path fill="white" id="Прямоугольник_588" data-name="Прямоугольник 588" class="cls-1" d="M106,0H441V500H106a46,46,0,0,1-46-46V46A46,46,0,0,1,106,0Zm20,418H441v43H126a21,21,0,0,1-21-21v-1A21,21,0,0,1,126,418Z"/>
  </g>
`},
         {title:"Блок 2: Европейский союз",time:"00:00:00",button:"начать просмотр",icon:`
  <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="book">
    <path fill="white" id="Прямоугольник_588" data-name="Прямоугольник 588" class="cls-1" d="M106,0H441V500H106a46,46,0,0,1-46-46V46A46,46,0,0,1,106,0Zm20,418H441v43H126a21,21,0,0,1-21-21v-1A21,21,0,0,1,126,418Z"/>
  </g>
`},
         {title:"Блок 3: Европейский союз", time:"00:00:00",button:"читать учебник",icon:`
  <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="book">
    <path fill="white" id="Прямоугольник_588" data-name="Прямоугольник 588" class="cls-1" d="M106,0H441V500H106a46,46,0,0,1-46-46V46A46,46,0,0,1,106,0Zm20,418H441v43H126a21,21,0,0,1-21-21v-1A21,21,0,0,1,126,418Z"/>
  </g>
`},
         {title:"Блок 4: Европейский союз", time:"00:00:00",button:"читать учебник",icon:`
  <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="book">
    <path fill="white" id="Прямоугольник_588" data-name="Прямоугольник 588" class="cls-1" d="M106,0H441V500H106a46,46,0,0,1-46-46V46A46,46,0,0,1,106,0Zm20,418H441v43H126a21,21,0,0,1-21-21v-1A21,21,0,0,1,126,418Z"/>
  </g>
`},
        
       ],
       tests: [
         {title:"Тесы 1: Европейский союз",work:"14/30",button:"начать решение",icon:`
  <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="book">
    <path fill="white" id="Прямоугольник_588" data-name="Прямоугольник 588" class="cls-1" d="M106,0H441V500H106a46,46,0,0,1-46-46V46A46,46,0,0,1,106,0Zm20,418H441v43H126a21,21,0,0,1-21-21v-1A21,21,0,0,1,126,418Z"/>
  </g>
`},
         {title:"Тест 2: Европейский союз",work:"15/30",button:"начать решение",icon:`
  <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="book">
    <path fill="white" id="Прямоугольник_588" data-name="Прямоугольник 588" class="cls-1" d="M106,0H441V500H106a46,46,0,0,1-46-46V46A46,46,0,0,1,106,0Zm20,418H441v43H126a21,21,0,0,1-21-21v-1A21,21,0,0,1,126,418Z"/>
  </g>
`},

        
       ],

      }
   },
   mounted() {

},

methods: {
  
},
}


</script>

<template>
   <div class="row">
      <div class="col-12 title">
         КУРСЫ <q-span class="arrow">></q-span> <q-span class="title_second title">ОЛИМПИАДЫ ПО М.О.</q-span> <q-span class="arrow">></q-span> <q-span class="title title_third">МЕЖДУНАРОДНЫЕ ОРГАНИЗАЦИИ</q-span>
</div>
<div class="col-12">
   <q-input dense rounded outlined  bottom-slots v-model="text" label="Нажмите, чтобы начать поиск" >
        <template v-slot:prepend>
         <q-icon name="search" />
        </template>

      </q-input>
         
        
</div>
<div class="col-12 content">
<div class="col-12  row wrap justify-between items-start content-start">
   <q-span>Материал</q-span>
   <q-span>Выполнено 65%</q-span>
</div>
<div v-for="item in video" :key="item" class=" card  row wrap justify-between items-center content-center">

   <div class="title-block ">{{ item.title }}</div>
   <div class="row  content-block">
   <div class="time ">{{item.time}} 
    <q-btn @click="$router.push('/politicaltextbook')"  class="button "><svg width="20" height="20" viewBox="0 0 500 500"  v-html="item.icon"></svg>{{item.button}}</q-btn>
  </div>
  </div>
</div>


<div class="col-12 tests  row wrap justify-between items-start content-start">
   <q-span>Тесты</q-span>

</div>
<div v-for="item in tests" :key="item" class=" card  row wrap justify-between items-center content-center">

   <div class="title-block">{{ item.title }}</div>
   <div class="row content-block">
   <div class="work ">{{item.work}} <q-btn   class="button "><svg width="20" height="20" viewBox="0 0 500 500"  v-html="item.icon"></svg>{{item.button}}</q-btn></div>
  </div>
</div>



</div>
   </div>
</template>

<style lang="scss" scoped>

@import '../css/pages/theme-course.scss';


</style>