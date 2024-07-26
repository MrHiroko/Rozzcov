<script>
export default{
   components:{

   },
   data(){
      return{

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
         КУРСЫ > <q-span>ОЛИМПИАДЫ ПО М.О.</q-span> > <q-span>МЕЖДУНАРОДНЫЕ ОРГАНИЗАЦИИ > БЛОК 1</q-span>
</div>
<div class="col-12">
   <q-input rounded outlined  bottom-slots v-model="text" label="Нажмите, чтобы начать поиск" >
        <template v-slot:prepend>
         <q-icon name="search" />
        </template>

      </q-input>
         
        
</div>
<div class="col-12 content">
   <div class="q-pa-md">
    <q-video
      :ratio="16/9"
      src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
    class="video"/>
  </div>
  <div class="col sub-text">
   <q-span class="sub-title">Европейский союз</q-span> <br>
   <q-span class="label">автор материала И.М. Рожков</q-span>
  </div>
</div>
   </div>
</template>

<style lang="scss" scoped>

@import '../css/pages/video-app.scss';



</style>