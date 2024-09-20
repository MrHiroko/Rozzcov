<script>




export default {
  components: {


  },
  data() {
    return {
      cards: [
        { title: "ОЛИМПИАДЫ ПО ИСТОРИИ", textes: ["Отечественная история", "Мировая история", "Культура"], bg: ["#7800FF"], color: ["#ffffff"] },
        { title: "ОЛИМПИАДЫ ПО МЕЖДУНАРОДНЫМ ОТНОШЕНИЯМ", textes: ["Теория международных отношений", "Международные организации"], bg: ["#4800FF"], color: ["#ffffff"] },
        { title: "ОЛИМПИАДЫ ПО ПОЛИТОЛОГИИ", textes: ["Политология", "Политический анализ", "Философия"], bg: ["#3548FF"], color: ["#ffffff"] },
        { title: "ОЛИМПИАДЫ ПО СОЦИОЛОГИИ", textes: ["В процессе разработки"], bg: ["#FFFFFF"], color: ["#737373"] },
        { title: "ОЛИМПИАДЫ ПО ОБЩЕСТВОЗНАНИЮ", textes: ["В процессе разработки"], bg: ["#FFFFFF"], color: ["#737373"] },
        { title: "ОЛИМПИАДЫ ПО ПРАВУ", textes: ["В процессе разработки"], bg: ["#FFFFFF"], color: ["#737373"] },

      ],
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

    <div class="col">

      <div class="row content">


        <div class="col-12">
          <header>
            <div class="row content">

              <div class="col-12 title">
                КУРСЫ <q-span class="arrow">></q-span> <span class="title_second title">ОЛИМПИАДЫ ПО М.О.</span>
              </div>
              <div class="col-12 search">


                <q-input rounded outlined dense bottom-slots v-model="text" label="Нажмите, чтобы начать поиск">
                  <template v-slot:prepend>
                    <q-icon name="search" />
                  </template>

                </q-input>


              </div>





            </div>

          </header>

        </div>
        <div class="col-12">

          <main class="main">
            <div class="card_block row wrap justify-start items-start content-start">

              <q-card class="my-card big">
                <q-span class="card-recomend">рекомендуется</q-span>
                <q-card-section>
                  <q-span class="card-title-text">ОТЕЧЕСТВЕННАЯ <br> ИСТОРИЯ</q-span>
                  <br>
                  <q-span class="card-free">бесплатно</q-span>
                </q-card-section>
                <q-card-section class="frame_block">
                  <iframe frameborder="0" class="pleer" style="border-radius:30px;width:100%;height:450px;" width="100%" height="450" src="https://music.yandex.ru/iframe/#album/496406">Слушайте <a href='https://music.yandex.ru/album/496406'>channel ORANGE</a> — <a href='https://music.yandex.ru/artist/452028'>Frank Ocean</a> на Яндекс.Музыке</iframe>

                </q-card-section>
              </q-card>


              <q-card class="my-card">
                <q-card-section class="card-title">
                  <q-span>ТЕОРИЯ М.О.</q-span><br>
                  <q-span>доступ по подписке</q-span>
                </q-card-section>
                <q-card-section class="card-main">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 500 500">
                    <defs>
                    </defs>
                    <g id="lock">
                      <path fill="gray" id="Прямоугольник_583_копия" data-name="Прямоугольник 583 копия" class="cls-1"
                        d="M208.994,1200.99h89.991a65,65,0,0,1,65,65v59.02a65,65,0,0,1-65,65H208.994a65,65,0,0,1-65-65v-59.02A65,65,0,0,1,208.994,1200.99Zm12.5,38.07h64.992a34,34,0,0,1,34,34v63.39a34,34,0,0,1-34,34H221.5a34,34,0,0,1-34-34v-63.39A34,34,0,0,1,221.5,1239.06Z"
                        transform="translate(0 -1200)" />
                      <path fill="gray" id="Прямоугольник_593" data-name="Прямоугольник 593" class="cls-1"
                        d="M109,1305H399a53,53,0,0,1,53,53v290a53,53,0,0,1-53,53H109a53,53,0,0,1-53-53V1358A53,53,0,0,1,109,1305Zm145,98a61,61,0,1,1-61,61A61,61,0,0,1,254,1403Zm0,122a61.471,61.471,0,0,0,19-3v83a19,19,0,0,1-38,0v-83A62.048,62.048,0,0,0,254,1525Z"
                        transform="translate(0 -1200)" />
                    </g>
                  </svg>
                  <q-span>Нажмите, чтобы <br> оформить подписку</q-span>
                </q-card-section>

              </q-card>


              <q-card class="my-card">
                <q-card-section>
                  <q-span class="card-title-text">
                    МЕЖДУНАРОДНЫЕ ОРГАНИЗАЦИИ
                  </q-span>
                  <br>
                  <q-span class="card-free">
                    бесплатно
                  </q-span>
                </q-card-section>
                <q-section @click="$router.push('/themeCourse')" class="card-main-path">
                  <q-span class="card-main-bg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 500 500">
                      <defs>
                      </defs>
                      <g id="book">
                        <path fill="white" id="Прямоугольник_588" data-name="Прямоугольник 588" class="cls-1"
                          d="M106,0H441V500H106a46,46,0,0,1-46-46V46A46,46,0,0,1,106,0Zm20,418H441v43H126a21,21,0,0,1-21-21v-1A21,21,0,0,1,126,418Z" />
                      </g>
                    </svg> </q-span>
                  <q-span class="card-text">Нажмите, чтобы <br> перейти к блокам</q-span>

                </q-section>
                <q-section class="card-procent">65%</q-section>
              </q-card>

            </div>

          </main>


        </div>
      </div>

    </div>

  </div>

</template>

<style scoped>
@import url(../css/pages/course-app.scss);
</style>