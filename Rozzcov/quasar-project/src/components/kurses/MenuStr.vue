<script>
export default {
    components: {

    },
    data() {
        return {
            isTrue: true,
            menuNav: [{ title: "курсы", image: 'search' },
            { title: "раписание", image: 'event' },
            { title: "тесты", image: 'description' },
            { title: "статистика", image: 'trending_up' },
            { title: "наставничество", image: 'perm_identity' },
            { title: "поддержка", image: 'question_answer' }],
          
        };
 
    },

    mounted() {

    },

    methods: {
        toggleValue() {
      this.isTrue = !this.isTrue;
    }
    },
};
</script>

<template>
   
   <q-toolbar class="text-primary">
      <q-btn  @click="toggleValue" class="menu_burger" flat round dense icon="menu" />
    </q-toolbar>
<div :class="{active: isTrue}" class="menu_full">
    <div class="menu_user">
        <div class="ro_logo">
            <img src="src/assets/img/logo.png" width="143px" height="35px">
        </div>
        <div class="container">
        <div class="account_user">
            <img src="src/assets/img/avatar.png" width="40px" height="40px">
            <div class="account_user_text">Мишанов Е.А.</div>
            <q-icon name="logout" />
        </div>
        <div class="menu">
        <nav class="nav_menu">
            <ul>
                <li class="nav_li" v-for="item in menuNav" :key="item.id"><button><q-icon :name="item.image"/><span>{{ item.title }}</span></button></li>
            </ul>
        </nav>
    </div>
        <div class="social_media">
            <div class="social_media_youtube"><img src="src/assets/icons/youtube.svg"></div>
            <div class="social_media_vk"><img src="src/assets/icons/vk.svg"></div>
        </div>
    </div>
    </div>
</div>
</template>

<style >
.menu_burger{
    color: blue;
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
}


.menu_full{
    position: relative;
    display: flex;

    flex: 1 0 auto;
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