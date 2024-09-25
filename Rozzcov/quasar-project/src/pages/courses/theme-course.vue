<script setup>
import axios from "axios";
import ThemeList from "src/components/ThemeList.vue";
import { onMounted, ref } from "vue"; // Импортируем рефы и хук onMounted из Vue

const themes = ref([]); // Создаем реф для хранения данных

const fetchthemes = async () => {
  try {
    const response = await axios.get(
      "https://e16e5957e31c1073.mokky.dev/themes"
    );
    themes.value = response.data; // Сохраняем данные в реф
  } catch (error) {
    console.error("Ошибка при получении данных:", error); // Обработка ошибок
  }
};

onMounted(fetchthemes);
</script>
<template>
  <div class="row">
    <div class="col-12 content">
      <div class="col-12 row wrap justify-between items-start content-start">
        <q-span>Материал</q-span>
        <q-span>Выполнено {{ themes.percent }} %</q-span>
        <ThemeList :themes="themes"></ThemeList>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12 content">
      <div class="col-12 row wrap justify-between items-start content-start">
        <q-span>Тесты</q-span>
        <q-span>Выполнено {{ themes.percent }} %</q-span>
        <ThemeList :themes="themes"></ThemeList>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/css/pages/theme-course.scss";
</style>
