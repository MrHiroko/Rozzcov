<script>
export default{
   components:{

   },
   data(){
      return{
         video: [
         {title:"Блок 1: Европейский союз",time:"00:00:00",button:"начать просмотр"},
         {title:"Блок 2: Европейский союз",time:"00:00:00",button:"начать просмотр"},
         {title:"Блок 3: Европейский союз", time:"00:00:00",button:"начать просмотр"},
         {title:"Блок 4: Европейский союз", time:"00:00:00",button:"начать просмотр"},
        
       ],
       tests: [
         {title:"Тесы 1: Европейский союз",work:"14/30",button:"начать решение"},
         {title:"Тест 2: Европейский союз",work:"15/30",button:"начать решение"},

        
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
         КУРСЫ > <q-span>ОЛИМПИАДЫ ПО М.О.</q-span> > <q-span>МЕЖДУНАРОДНЫЕ ОРГАНИЗАЦИИ</q-span>
</div>
<div class="col-12">
   <q-input rounded outlined  bottom-slots v-model="text" label="Нажмите, чтобы начать поиск" >
        <template v-slot:prepend>
         <q-icon name="search" />
        </template>

      </q-input>
         
        
</div>
<div class="col-12 content">
<div class="col-12  row wrap justify-between items-start content-start">
   <q-span>Видео</q-span>
   <q-span>Выполнено 65%</q-span>
</div>
<div v-for="item in video" :key="item" class=" card  row wrap justify-between items-center content-center">

   <div class="title-block">{{ item.title }}</div>
   <div class="time">{{item.time}} <q-btn @click="$router.push('/videoApp')" icon="play_arrow" class="button">{{item.button}}</q-btn></div>

</div>


<div class="col-12 tests  row wrap justify-between items-start content-start">
   <q-span>Тесты</q-span>

</div>
<div v-for="item in tests" :key="item" class=" test  row wrap justify-between items-center content-center">

   <div class="title-block">{{ item.title }}</div>
   <div class="time">{{item.work}} <q-btn  icon="play_arrow" class="button">{{item.button}}</q-btn></div>

</div>



</div>
   </div>
</template>

<style scoped>
.title{
   font-family: 'Murs Gothic', sans-serif;
   font-weight: bold;
   margin-bottom: 35px;
   font-size: 1.8vw;
   color: blue;
   font-family: 'Murs-Gothic';
}
.content{
   position: relative;
   padding: 0 10px;
}
.card{
position: relative;
top: 0;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
   margin: 10px;
   height: 50px;

padding: 0 20px;

   border-radius: 30px;
}
.button{

   margin-left: 30px;
   border-radius: 20px;
height: 10px;
background: blue;
   box-shadow: none;
   text-shadow: none;
   color: white;
}
.tests{
   margin-top: 60px;
}
.test{

box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
   margin: 10px;
   height: 50px;

padding: 0 20px;

   border-radius: 30px;
}


</style>