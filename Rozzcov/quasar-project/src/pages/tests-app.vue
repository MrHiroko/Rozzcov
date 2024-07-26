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

<style lang="scss" scoped>


@import '../css/pages/tests-app.scss';


</style>