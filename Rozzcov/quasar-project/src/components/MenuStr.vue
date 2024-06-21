<script>
export default {
    components: {

    },
    data() {
        return {
            menuNav: [{ title: "курсы", image: 'src/assets/img_MenuStr/kurs.svg' },
            { title: "раписание", image: 'src/assets/img_MenuStr/schedule.svg' },
            { title: "тесты", image: 'src/assets/img_MenuStr/tests.svg' },
            { title: "статистика", image: 'src/assets/img_MenuStr/static.svg' },
            { title: "наставничество", image: 'src/assets/img_MenuStr/mentoring.svg' },
            { title: "поддержка", image: 'src/assets/img_MenuStr/support.svg' }],
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<template>
    <div class="menu_user">
        <div class="ro_logo">
            <img src="src/assets/img_MenuStr/Group_1.svg" width="143px" height="35px">
        </div>
        <div class="account_user">
            <img src="src/assets/img_MenuStr/M.svg" width="40px" height="40px">
            <div class="account_user_text">Мишанов Е.А.</div>
            <img src="src/assets/img_MenuStr/exit.svg" width="19px" height="19px">
        </div>
        <nav class="nav_menu">
            <ul>
                <li class="nav_li" v-for="item in menuNav" :key="item.id"><button><img class="nav_img"
                            :src="item.image"><span>{{ item.title }}</span></button></li>
            </ul>
        </nav>
        <div class="social_media">
            <div class="social_media_youtube"><img src="src/assets/img_MenuStr/youtube.svg"></div>
            <div class="social_media_vk"><img src="src/assets/img_MenuStr/vk.svg"></div>
        </div>
    </div>
</template>

<style>
* {
    padding: 0;
    margin: 0;
    border: 0;
}

*,
*:before,
*:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

:focus,
:active {
    outline: none;
}

a:focus,
a:active {
    outline: none;
}

nav,
footer,
header,
aside {
    display: block;
}

html,
body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
    font-family: inherit;
}

input::-ms-clear {
    display: none;
}

button {
    cursor: pointer;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

a,
a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

ul li {
    list-style: none;
}

img {
    vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: inherit;
}

/*--------------------*/
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
    border-right: 2px solid black;
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



.social_media {
    margin-top: 140%;
    width: 80px;
    height: 30px;
    display: flex;
    gap: 15px;
    align-items: center;
    
}
</style>