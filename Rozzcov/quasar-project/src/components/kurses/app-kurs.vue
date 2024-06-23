<script>
export default {
   components:{

  },
  data(){
    return{



    
    };
  }

}



</script>

<template>

        <div class="row content">
         <div class="col-12 tittle">
            КУРСЫ
         </div>
         <div class="col-12 search">


            <q-input rounded outlined  bottom-slots v-model="text" label="Нажмите, чтобы начать поиск" >
        <template v-slot:prepend>
         <q-icon name="search" />
        </template>

      </q-input>

           
         </div>



    
         
         </div>

    
 </template>  


<style scoped>


.search{
   position: relative;
   left: 0;

}

.tittle{
   font-family: 'Murs Gothic', sans-serif;
   font-weight: bold;
   margin-bottom: 35px;
   font-size: 62px;
   color: blue;
}






</style>