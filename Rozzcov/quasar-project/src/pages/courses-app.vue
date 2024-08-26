<script>
import axios from "axios"; // Импортируем axios
import { onMounted, ref } from "vue"; // Импортируем рефы и хук onMounted из Vue

export default {
  setup() {
    const cards = ref([]); // Создаем реф для хранения данных

    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://e16e5957e31c1073.mokky.dev/cards"
        );
        cards.value = response.data; // Сохраняем данные в реф
      } catch (error) {
        console.error("Ошибка при получении данных:", error); // Обработка ошибок
      }
    };

    // Вызываем функцию получения данных при монтировании
    onMounted(fetchCards);

    // Возвращаем переменную cards, чтобы она была доступна в шаблоне
    return {
      cards,
    };
  },
};
</script>
<template>
  <div class="row-3">
    <div class="col title">ТЕОРИЯ</div>
    <div class="col">
      <q-input
        dense
        rounded
        outlined
        bottom-slots
        v-model="text"
        label="Нажмите, чтобы начать поиск"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <div class="row cards">
      <q-card
        @click="$router.push('/courseApp')"
        v-for="card in cards"
        :key="card.id"
        class="wrap justify-center items-center content-center col-4 card"
        :style="{ background: card.bg, color: card.color }"
      >
        <div class="card-tittle">
          {{ card.title }}
        </div>
      </q-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../css/pages/courses-app.scss";
</style>
