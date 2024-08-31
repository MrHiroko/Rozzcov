<script>
export default {
  components: {},
  data() {
    return {
      drawerState: false,
      menuNav: [
        {
          title: "теория",
          image: `  <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="book">
    <path id="Прямоугольник_588" data-name="Прямоугольник 588" class="cls-1" d="M106,0H441V500H106a46,46,0,0,1-46-46V46A46,46,0,0,1,106,0Zm20,418H441v43H126a21,21,0,0,1-21-21v-1A21,21,0,0,1,126,418Z"/>
  </g>`,
          path: "/coursesApp",
        },

        {
          title: "задания",
          image: `
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


`,
          path: "/tests",
        },
        {
          title: "наставничество",
          image: `  <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="guide">
    <path id="Эллипс_1" data-name="Эллипс 1" class="cls-1" d="M2647.13,168h1.81c101.65,0,184.05,82.4,184.05,184.055V500H2466.01V349.118A181.119,181.119,0,0,1,2647.13,168ZM2650.06-.121A84.06,84.06,0,1,1,2566,83.94,84.057,84.057,0,0,1,2650.06-.121Z" transform="translate(-2400)"/>
  </g>`,
          path: "/tutorship",
        },
        {
          title: "поддержка",
          image: `  <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="chat">
    <path id="Прямоугольник_10" data-name="Прямоугольник 10" class="cls-1" d="M3053,0h394a53,53,0,0,1,53,53V311a53,53,0,0,1-53,53H3053a53,53,0,0,1-53-53V53A53,53,0,0,1,3053,0Zm14,364h211.01L3067.49,500H3067V364Z" transform="translate(-3000)"/>
  </g>`,
          path: "/support",
        },
      ],
    };
  },

  mounted() {},

  methods: {
    toggleDrawer() {
      this.drawerState = !this.drawerState;
    },
  },
};
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-btn
        @click="toggleDrawer"
        icon="menu"
        flat
        round
        class="q-mr-md menu_burger"
      />

      <q-drawer
        v-model="drawerState"
        show-if-above
        :breakpoint="lg"
        :width="320"
      >
        <div class="menu_user">
          <div class="ro_logo">
            <img
              src="~assets/img/RO_main_logo.svg"
              width="143px"
              height="35px"
            />
          </div>
          <div class="container">
            <div class="account_user">
              <img src="~assets/img/avatar.png" width="40px" height="40px" />
              <div class="account_user_text">Мишанов Е.А.</div>
              <router-link to="/settings"
                ><img src="~assets/icons/settings.svg" width="16px" alt=""
              /></router-link>
              <img src="~assets/icons/exit.svg" width="16px" alt="" />
            </div>
            <div class="menu">
              <nav class="nav_menu">
                <ul>
                  <li class="nav_li" v-for="item in menuNav" :key="item.id">
                    <button @click="$router.push(item.path)">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 500 500"
                        v-html="item.image"
                      ></svg>
                      <span>{{ item.title }}</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="social_media">
              <div class="social_media_text">
                <p class="RO">ROZHKOV OLIMPIAD</p>
                <p class="info">вся информация о нас тут</p>
              </div>
              <div class="social_media_block">
                <div class="social_media_youtube">
                  <img
                    class="youtube"
                    src="~assets/icons/youtube.svg"
                    width="40px"
                  />
                </div>
                <div class="social_media_vk">
                  <img src="~assets/icons/vk.svg" width="43px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-drawer>

      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.menu_burger {
  color: blue;
}

.youtube svg {
  fill: black;
}

.ro_logo {
  text-align: center;
  padding-top: 38px;
}
.RO {
  font-size: 16px;
  font-weight: 1000;
}
.info {
  font-size: 12px;
  color: grey;
  margin-top: -15px;
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
  transition: 0.2s ease-out;
  padding-left: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav_li button:hover {
  background-color: #0000ff;
  transition: 0.2s ease-out;
  color: white;
  fill: white;
}

.aside {
  position: relative;
  height: 100%;
}

.social_media {
  display: flex;
  flex-direction: column;
  position: absolute;

  width: 200px;
  height: 200px;
  display: flex;

  align-items: center;
  bottom: -50px;
}
.social_media_block {
  width: 80px;
  display: flex;
  align-items: center;
}

.active {
  display: none;
}
</style>
