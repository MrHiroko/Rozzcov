<script>
export default {

  data(){
    return{

       cards: [
         {title:"ОЛИМПИАДЫ ПО ИСТОРИИ",textes: ["Отечественная история","Мировая история","Культура"],color:["#7800FF"]},
         {title:"ОЛИМПИАДЫ ПО МЕЖДУНАРОДНЫМ ОТНОШЕНИЯМ",textes: ["Теория международных отношений","Международные организации"],color:["#4800FF"]},
         {title:"ОЛИМПИАДЫ ПО ПОЛИТОЛОГИИ", textes: ["Политология","Политический анализ","Философия"],color:["#3548FF"]},
         {title:"ОЛИМПИАДЫ ПО СОЦИОЛОГИИ", textes: ["В процессе"],color:"#FFFFFF"},

       ],
    
    };
  }

}

</script>

<template>
  <div class="row">
      <div class="menu col-2">
        menu
      </div>
      <div class="col">
         <div class="container">
        <div class="row content">
         <div class="col-12 tittle">
            <span>КРУРСЫ</span>
         </div>
         <div class="col-12 search">


           <q-input   class='search-input'  rounded outlined v-model="text" label="Нажмите чтобы начать поиск" />

           
         </div>



            <div v-for="card in cards" :key="card.id" class="col-4 card"  :style="{background:card.color}" >
               <div class="card-tittle">
                  {{card.title}}
               </div>
               <div class="card-text">
               <ul  class="card-list">
                  <li v-for="(card,index) in cards" :key="index.id"  >{{ card.textes[index] }}</li>
               </ul>
            </div>
            </div>
    
         
         </div>
        </div>
      </div>
      </div>
    
 </template>  


<style scoped>

.search-input {
   height: 30px;
   margin-bottom: 60px;
}

.tittle{
   margin-bottom: 35px;
}

.card-tittle > li{
    
}
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
}
.card-list > li::after{
   content: ' ';
   position: relative;
   left: -5;
   width: 5px;
   height: 5px;
   background: white;
   border-radius: 50%;
}

</style>