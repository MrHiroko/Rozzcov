<script>

export default {
    components: {
        
    },
    data() {
        return {
          drawerState: false,
            menuNav: [{ title: "курсы", image:`  <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="book">
    <path id="Прямоугольник_588" data-name="Прямоугольник 588" class="cls-1" d="M106,0H441V500H106a46,46,0,0,1-46-46V46A46,46,0,0,1,106,0Zm20,418H441v43H126a21,21,0,0,1-21-21v-1A21,21,0,0,1,126,418Z"/>
  </g>` ,path:"/"},
            { title: "раписание", image: `  <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="calendar">
    <path id="Прямоугольник_9_копия_4" data-name="Прямоугольник 9 копия 4" class="cls-1" d="M653,68h395c29.27,0,52,23.729,52,53V446a53,53,0,0,1-53,53H653a53,53,0,0,1-53-53V121A53,53,0,0,1,653,68ZM713,0h30a17,17,0,0,1,17,17V68H696V17A17,17,0,0,1,713,0ZM958,0h30a17,17,0,0,1,17,17V68H941V17A17,17,0,0,1,958,0ZM668.168,382.2h33.937a17,17,0,0,1,17,17v33.937a17,17,0,0,1-17,17H668.168a17,17,0,0,1-17-17V399.2A17,17,0,0,1,668.168,382.2Zm109.909,0h33.937a17,17,0,0,1,17,17v33.937a17,17,0,0,1-17,17H778.077a17,17,0,0,1-17-17V399.2A17,17,0,0,1,778.077,382.2Zm109.909,0h33.937a17,17,0,0,1,17,17v33.937a17,17,0,0,1-17,17H887.986a17,17,0,0,1-17-17V399.2A17,17,0,0,1,887.986,382.2Zm109.909,0h33.935a17,17,0,0,1,17,17v33.937a17,17,0,0,1-17,17H997.9a17,17,0,0,1-17-17V399.2A17,17,0,0,1,997.9,382.2ZM668.168,276.016h33.937a17,17,0,0,1,17,17v33.937a17,17,0,0,1-17,17H668.168a17,17,0,0,1-17-17V293.016A17,17,0,0,1,668.168,276.016Zm109.909,0h33.937a17,17,0,0,1,17,17v33.937a17,17,0,0,1-17,17H778.077a17,17,0,0,1-17-17V293.016A17,17,0,0,1,778.077,276.016Zm109.909,0h33.937a17,17,0,0,1,17,17v33.937a17,17,0,0,1-17,17H887.986a17,17,0,0,1-17-17V293.016A17,17,0,0,1,887.986,276.016Zm109.909,0h33.935a17,17,0,0,1,17,17v33.937a17,17,0,0,1-17,17H997.9a17,17,0,0,1-17-17V293.016A17,17,0,0,1,997.9,276.016Z" transform="translate(-600)"/>
  </g>`,path:"/tests"},
            { title: "тесты", image: `
  <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="test">
    <path id="Прямоугольник_8" data-name="Прямоугольник 8" class="cls-1" d="M1308,0h289a49,49,0,0,1,49,49V451a49,49,0,0,1-49,49H1308a49,49,0,0,1-49-49V49A49,49,0,0,1,1308,0Zm25,48h234a22,22,0,0,1,0,44H1333A22,22,0,0,1,1333,48Z" transform="translate(-1200)"/>
  </g>


`,  path:"/tests"},
            { title: "наставничество", image: `  <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="guide">
    <path id="Эллипс_1" data-name="Эллипс 1" class="cls-1" d="M2647.13,168h1.81c101.65,0,184.05,82.4,184.05,184.055V500H2466.01V349.118A181.119,181.119,0,0,1,2647.13,168ZM2650.06-.121A84.06,84.06,0,1,1,2566,83.94,84.057,84.057,0,0,1,2650.06-.121Z" transform="translate(-2400)"/>
  </g>`,path:"/tutorship" },
            { title: "поддержка", image: `  <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="chat">
    <path id="Прямоугольник_10" data-name="Прямоугольник 10" class="cls-1" d="M3053,0h394a53,53,0,0,1,53,53V311a53,53,0,0,1-53,53H3053a53,53,0,0,1-53-53V53A53,53,0,0,1,3053,0Zm14,364h211.01L3067.49,500H3067V364Z" transform="translate(-3000)"/>
  </g>` ,path:"/tests"}],
          
        };
 
    },

    mounted() {

    },

    methods: {

      toggleDrawer() {
      this.drawerState = !this.drawerState;
    }
    }
    
    

};
</script>

<template>
    <q-layout view="lHh Lpr lFf">
      <q-page-container>


   

        <q-btn @click="toggleDrawer" icon="menu"  flat round class="q-mr-md menu_burger" />

        <q-drawer
      v-model="drawerState"
      show-if-above
      :breakpoint="lg"
      :width="320"
    >
    <div class="menu_user">
        <div class="ro_logo">
            <img src="src/assets/img/RO_main_logo.svg" width="143px" height="35px">
        </div>
        <div class="container">
        <div class="account_user">
            <img src="src/assets/img/avatar.png" width="40px" height="40px">
            <div class="account_user_text">Мишанов Е.А.</div>
            <img src="src/assets/icons/settings.svg" width="16px" alt="">
            <img src="src/assets/icons/lock.svg" width="16px" alt="">
        </div>
        <div class="menu">
        <nav class="nav_menu">
            <ul>
            
                <li class="nav_li" v-for="item in menuNav" :key="item.id"><button @click="$router.push( item.path )" > <svg width="21" height="21" viewBox="0 0 500 500"  v-html="item.image"></svg> <span>{{ item.title }}</span></button></li>
            </ul>
        </nav>
    </div>
        <div class="social_media">
            <div class="social_media_youtube"><img class="youtube" src="src/assets/icons/youtube.svg"></div>
            <div class="social_media_vk"><img src="src/assets/icons/vk.svg"></div> 
        </div>
    </div>
    </div>
  </q-drawer>





      <router-view></router-view>
    </q-page-container>
</q-layout>

</template>

<style scoped >



.menu_burger{
    color: blue;
}

.youtube svg{
    fill: black;
    
}

.ro_logo {
    text-align: center;
    padding-top: 38px;

}

.menu_user {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 286px;
    height: 100vh;
    
}

.account_user {

    margin-top: 38px;
    display: flex;
    align-items: center;
    gap: 13px;
    width: 200px;
    height: 40px;
}

.nav_menu {
    font-size: 14px;
    margin-top: 20px;
    height: 300px;
}

.nav_li {
    width: 200px;
    height: 34px;
    margin-top: 18px;
    font-size: 16px;

}

.nav_li button {
    height: 34px;
    width: 172px;
    border-radius: 15px;
    background: none;
    transition: .2s ease-out;
    padding-left: 10px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.nav_li button:hover {
    background-color: #0000FF;
    transition: .2s ease-out;
    color: white;
    fill: white;
}



.aside{
    position: relative;
    height: 100%;

}
.social_media {
    position: absolute;
    margin-top: 140%;
    width: 80px;
    height: 30px;
    display: flex;
    gap: 15px;
    align-items: center;
    bottom: 20px;
    
}
.active{
display: none;
}


</style>