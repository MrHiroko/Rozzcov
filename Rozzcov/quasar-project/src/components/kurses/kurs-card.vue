<script>

export default {

  data(){
    return{

       cards: [
         {title:"ОЛИМПИАДЫ ПО ИСТОРИИ",textes: ["Отечественная история","Мировая история","Культура"],color:["#7800FF"]},
         {title:"ОЛИМПИАДЫ ПО МЕЖДУНАРОДНЫМ ОТНОШЕНИЯМ",textes: ["Теория международных отношений","Международные организации"],color:["#4800FF"]},
         {title:"ОЛИМПИАДЫ ПО ПОЛИТОЛОГИИ", textes: ["Политология","Политический анализ","Философия"],color:["#3548FF"]},
         {title:"ОЛИМПИАДЫ ПО СОЦИОЛОГИИ", textes: ["В процессе разработки"],color:["#FFFFFF"]},

       ],
    
    };
  }

};
</script>
<template>

<div class="row cards">

            <div v-for="card in cards" :key="card.id" class="col-3 card"  :style="{background:card.color}" >
               <div class="card-tittle">
                  {{card.title}}
               </div>
               <div class="card-text">
               <ul  class="card-list">
                  <li v-for="(text,index) in card.textes" :key="index"  >{{ text }}</li>
               </ul>
            </div>
            </div>
    

         </div>
 </template>  


<style scoped>




/*.cards{
   display: flex;
   flex-wrap: wrap;
}*/

.card{
   width: 712px;
   height: 370px;
   border-radius: 5%;
   padding: 48px;
   margin: 20px;
   outline: 1px solid black;
}

.card{
   color:white;
}
.card:last-child{
   color:#737373;
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



</style>