<script>
import MenuStr from './components/kurses/MenuStr.vue';
import KursCard from './components/kurses/kurs-card.vue';
import AppKurs from './components/kurses/app-kurs.vue'


export default {
  components:{
    KursCard,
    MenuStr,
    AppKurs,

  },
  data(){
    return{

    };
  },
  mounted() {

},

methods: {
  
},

}

</script>
<template>
  <div class="row">
    <div class="">
      <menu-str ></menu-str>
        </div>
      <div class="col">

        <div class="row content">
  

          <div class="col-12">
            <app-kurs></app-kurs>

          </div>
<div class="col-12">
  
  <kurs-card></kurs-card>

         
</div>
         </div>

      </div>

      </div>
    
 </template>  
