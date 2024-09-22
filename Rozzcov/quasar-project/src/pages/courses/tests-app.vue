<script setup>
import axios from "axios"; // Импортируем axios
import { onMounted, ref } from "vue"; // Импортируем рефы и хук onMounted из Vue

const cards = ref([]); // Создаем реф для хранения данных

const fetchCards = async () => {
  try {
    const response = await axios.get(
      "https://e16e5957e31c1073.mokky.dev/carts"
    );
    cards.value = response.data; // Сохраняем данные в реф
  } catch (error) {
    console.error("Ошибка при получении данных:", error); // Обработка ошибок
  }
};

onMounted(fetchCards);
</script>

<template>
  <div class="row">
    <div class="col-12 row content">
      <q-card
        @click="$router.push('/test')"
        v-for="card in cards"
        :key="card.id"
        class="col-5 card row"
        :style="{ background: card.bg, color: card.color }"
      >
        <div class="card-tittle col-12">
          {{ card.title }}
        </div>
        <div class="card-text">
          {{ card.text }}
        </div>

        <div
          class="card-persent fit row wrap justify-end items-end content-end"
        >
          {{ card.persent }}
        </div>
      </q-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/css/pages/tests-app.scss";
</style>
