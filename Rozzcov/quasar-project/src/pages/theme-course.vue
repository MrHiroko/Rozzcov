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
         КУРСЫ > <q-span>ОЛИМПИАДЫ ПО М.О.</q-span> > <q-span>МЕЖДУНАРОДНЫЕ ОРГАНИЗАЦИИ</q-span>
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

<style scoped>
.button{
   
}
svg{
  position: absolute;
  left: 20px;
}
.title{
   font-family: 'Murs Gothic', sans-serif;
   font-weight: bold;
   margin-bottom: 35px;
   font-size: 30px;
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
width: 260px;
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

@media  (min-width: 320px) and (max-width: 375px) {
  .content{
    font-size: 16px;
  }
  .work{
    text-align: center;
  }
  .test{
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
position: relative;
top: 0;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
   margin: 10px;
   height: 140px;

padding: 0 20px;

   border-radius: 30px;
  }
  .time{
    text-align: center;
  }
  .content-block{
    line-height: 250%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
  }
  .card{
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
position: relative;
top: 0;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
   margin: 10px;
   height: 140px;

padding: 0 20px;

   border-radius: 30px;
}
.button{
width: 240px;
   margin-left: 30px;
   border-radius: 20px;
height: 10px;
background: blue;
   box-shadow: none;
   text-shadow: none;
   color: white;
}
.title{
   font-family: 'Murs Gothic', sans-serif;
   font-weight: bold;
   margin-bottom: 35px;
   font-size: 18px;
   color: blue;
   font-family: 'Murs-Gothic';
}
 }

 @media  (min-width: 375px) and (max-width: 425px) {
  .content{
    font-size: 18px;
  }
  .work{


    font-size: 16px;
    text-align: center;
  }
  .title-block{
    font-size: 18px;
  }
  .test{
    
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    font-size: 20px;
position: relative;
top: 0;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
   margin: 10px;
   height: 140px;

padding: 0 20px;

   border-radius: 30px;
  }
  .time{
    text-align: center;
  }
  .content-block{
    font-size: 16px;
    line-height: 250%;
    display: flex;

    justify-content: center;
    align-items: center;
    justify-self: center;
  }
  .card{
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
position: relative;
top: 0;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
   margin: 10px;
   height: 150px;

padding: 0 20px;

   border-radius: 30px;
}
.button{
width: 280px;
   margin-left: 30px;
   border-radius: 20px;
height: 10px;
background: blue;
   box-shadow: none;
   text-shadow: none;
   color: white;
}
.title{
   font-family: 'Murs Gothic', sans-serif;
   font-weight: bold;
   margin-bottom: 35px;
   font-size: 20px;
   color: blue;
   font-family: 'Murs-Gothic';
}
 }


 @media  (min-width: 425px) and (max-width: 471px) {
  
  .content{
    font-size: 18px;
  }
  .work{


    font-size: 16px;
    text-align: center;
  }
  .title-block{
    font-size: 18px;
  }
  .test{
    
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    font-size: 20px;
position: relative;
top: 0;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
   margin: 10px;
   height: 140px;

padding: 0 20px;

   border-radius: 30px;
  }
  .time{
    text-align: center;
  }
  .content-block{
    font-size: 16px;
    line-height: 250%;
    display: flex;

    justify-content: center;
    align-items: center;
    justify-self: center;
  }
  .card{
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
position: relative;
top: 0;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
   margin: 10px;
   height: 150px;

padding: 0 20px;

   border-radius: 30px;
}
.button{
width: 280px;
   margin-left: 30px;
   border-radius: 20px;
height: 10px;
background: blue;
   box-shadow: none;
   text-shadow: none;
   color: white;
}
.title{
   font-family: 'Murs Gothic', sans-serif;
   font-weight: bold;
   margin-bottom: 35px;
   font-size: 20px;
   color: blue;
   font-family: 'Murs-Gothic';
}
 }
 @media  (min-width: 472px) and (max-width: 768px) {
  
  .content{
    font-size: 18px;
  }
  .work{
display: flex;
flex-direction: column;

    font-size: 16px;
    text-align: center;
  }
  .title-block{
    font-size: 18px;
  }
  .test{
    
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    font-size: 20px;
position: relative;
top: 0;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
   margin: 10px;
   height: 140px;

padding: 0 20px;

   border-radius: 30px;
  }
  .time{
display: flex;
flex-direction: column;
text-align: center;
  }
  .content-block{
    
    font-size: 16px;
    line-height: 250%;
    display: flex;

    justify-content: center;
    align-items: center;
    justify-self: center;
  }
  .card{
    
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
position: relative;
top: 0;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
   margin: 10px;
   height: 150px;

padding: 0 20px;

   border-radius: 30px;
}
.button{
width: 280px;
   margin-left: 30px;
   border-radius: 20px;
height: 10px;
background: blue;
   box-shadow: none;
   text-shadow: none;
   color: white;
}
.title{
   font-family: 'Murs Gothic', sans-serif;
   font-weight: bold;
   margin-bottom: 35px;
   font-size: 20px;
   color: blue;
   font-family: 'Murs-Gothic';
}
 }
 @media  (min-width: 768px) and (max-width: 1024px) {

  .test{

position: relative;
top: 0;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
   margin: 10px;
   height: 100px;

padding: 0 20px;

   border-radius: 30px;
  }
  .time{

  }
  .content-block{
font-size: 16px;

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
width: 240px;
   margin-left: 30px;
   border-radius: 20px;
height: 10px;
background: blue;
   box-shadow: none;
   text-shadow: none;
   color: white;
}
.title{
   font-family: 'Murs Gothic', sans-serif;
   font-weight: bold;
   margin-bottom: 35px;
   font-size: 26px;
   color: blue;
   font-family: 'Murs-Gothic';
}
 }

 @media  (min-width: 1024px) and (max-width: 1440px) {

.tittle{
   font-family: 'Murs Gothic', sans-serif;
   font-weight: bold;
   margin-bottom: 35px;
   font-size: 30px;
   color: blue;
   font-family: 'Murs-Gothic';
}
 }

 @media  (min-width: 1440px) and (max-width: 1920px) {

.tittle{
   font-family: 'Murs Gothic', sans-serif;
   font-weight: bold;
   margin-bottom: 35px;
   font-size: 30px;
   color: blue;
   font-family: 'Murs-Gothic';
}
 }

 @media  screen and (min-width: 1920px)  {

.tittle{
   font-family: 'Murs Gothic', sans-serif;
   font-weight: bold;
   margin-bottom: 35px;
   font-size: 60px;
   color: blue;
   font-family: 'Murs-Gothic';
}
 }

</style>