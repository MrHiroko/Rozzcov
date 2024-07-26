<script>
export default{
   components:{

   },
   data(){
      return{
         cards: [
         {title:"ОТЕЧЕСТВЕННАЯ ИСТОРИЯ",persent: "36%",bg:["#7800FF"], color:["#ffffff"]},
         {title:"МИРОВАЯ ИСТОРИЯ",persent: "36%", bg:["#4800FF"], color:["#ffffff"]},
         {title:"КУЛЬТУРА", persent: "36%",bg:["#3548FF"], color:["#ffffff"]},

        
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
       ТЕСТЫ > ИСТОРИЯ
</div>
<div class="col-12">
   <q-input rounded outlined dense bottom-slots v-model="text" label="Нажмите, чтобы начать поиск" >
        <template v-slot:prepend>
         <q-icon name="search" />
        </template>

      </q-input>
         
        
</div>
<div class="col-12 row content">

   <q-card @click="$router.push('/test-task-1')"   v-for="card in cards" :key="card.id" class="col-5 card row  "  :style="{background:card.bg, color:card.color}" >

<div class="card-tittle col-12">
   
   {{card.title}}
</div>

<div class="card-persent fit row wrap justify-end items-end content-end">
   {{ card.persent  }}
</div>


</q-card>


</div>
   </div>
</template>

<style lang="scss" scoped>
@import '../css/pages/test-app';

</style>