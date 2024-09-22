<script setup>
import axios from "axios";
import CardList from "src/components/CardList.vue";
import { onMounted, ref } from "vue"; // Импортируем рефы и хук onMounted из Vue

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

onMounted(fetchCards);
</script>
<template>
  <div class="row">
    <div class="col">
      <div class="row cards">
        <CardList @click="$router.push('/courseApp')" :cards="cards" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/css/pages/courses-app.scss";
</style>
