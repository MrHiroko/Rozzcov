<script>
export default {
   components: {

   },
   data() {
      return {
         cards: [
            { title: "ИСТОРИЯ", persent: "36%", bg: ["#7800FF"], color: ["#ffffff"] },
            { title: "МЕЖДУНАРОДНЫЕ ОТНОШЕНИЯ", persent: "36%", bg: ["#4800FF"], color: ["#ffffff"] },
            { title: "ПОЛИТОЛОГИЯ", persent: "36%", bg: ["#3548FF"], color: ["#ffffff"] },
            { title: "СОЦИОЛОГИЯ", persent: "36%", bg: ["#FFFFFF"], color: ["#737373"] },

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
         ТЕСТЫ
      </div>
      <div class="col-12">
         <q-input rounded outlined dense bottom-slots v-model="text" label="Нажмите, чтобы начать поиск">
            <template v-slot:prepend>
               <q-icon name="search" />
            </template>

         </q-input>


      </div>
      <div class="col-12 row content">

         <q-card @click="$router.push('/test')" v-for="card in cards" :key="card.id" class="col-5 card row  "
            :style="{ background: card.bg, color: card.color }">

            <div class="card-tittle col-12">

               {{ card.title }}
            </div>

            <div class="card-persent fit row wrap justify-end items-end content-end">
               {{ card.persent }}
            </div>


         </q-card>


      </div>
   </div>
</template>

<style scoped>
.title {
   font-family: 'Murs Gothic', sans-serif;
   font-weight: bold;
   margin-bottom: 35px;
   font-size: 4vw;
   color: blue;
   font-family: 'Murs-Gothic';
}

.card {
   margin: 4vh;
   padding: 30px;
   border: 1px solid black;
   width: 600px;
   height: 200px;
   border-radius: 30px;
}

.card-tittle {
   font-size: 2rem;
}

.card-persent {
   position: relative;
   bottom: 30px;
}
@media (min-width:320px) and (max-width:374px){
   .content{
      justify-content: center;
      
   }
   .card{
      width: 300px;
      height: 100px;
      display: flex;
      align-items: center;
      
   }
   .card-tittle{
      font-size: 0.9rem;
   }
   .card-persent{
      position: absolute;
      right:20px;
      bottom:10px;
   }
}
@media (min-width:375px) and (max-width:424px){
   .content{
      justify-content: center;
      
   }
   .card{
      width: 350px;
      height: 120px;
      display: flex;
      align-items: center;
      
   }
   .card-tittle{
      font-size: 1.2rem;
   }
   .card-persent{
      position: absolute;
      right:20px;
      bottom:10px;
   }
}
@media (min-width:425px) and (max-width:767px){
   .content{
      justify-content: center;
      
   }
   .card{
      width: 400px;
      height: 140px;
      display: flex;
      align-items: center;
      
   }
   .card-tittle{
      font-size: 1.4rem;
   }
   .card-persent{
      position: absolute;
      right:20px;
      bottom:10px;
   }
}
@media (min-width:768px) and (max-width:1023px){
   .content{
      justify-content: center;
      
   }
}
@media (min-width:1024px) and (max-width:1439px){
   .content{
      justify-content: center;
      
   }
}
@media (min-width:1400px) and (max-width:1692px){
   .content{
      justify-content: center;
      
   }
}
/* width: 600px;
height: 200px; */
</style>