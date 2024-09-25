<script setup>
import axios from "axios"; // Предположительно, используете axios для запросов
import testTaskList from "src/components/testTaskList.vue";
import { onMounted, ref } from "vue";

const isActive = ref(false);
const tasks = ref([]);
const tasks2 = ref([]);
const tasks3 = ref([]);
const tasks4 = ref([]);

// Функция для загрузки данных
const fetchTasks = async () => {
  try {
    const response = await axios.get(
      "https://e16e5957e31c1073.mokky.dev/tasks"
    ); // Замените адресом вашего API
    tasks.value = response.data; // обратите внимание на структуру данных и измените по необходимости
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
};

onMounted(() => {
  fetchTasks();
});
</script>

<template>
  <div>
    <div class="container">
      <div class="filters">
        Фильтры:
        <button
          :class="['filter-button', { active: isActive }]"
          @click="isActive = !isActive"
        >
          ВШЭ - Высшая проба
        </button>
        <button class="filter-button">РАНХиГС</button>
        <button class="filter-button">Ломоносов</button>
        <button class="filter-button">СПбГУ</button>
      </div>
      <testTaskList
        :tasks="tasks"
        :tasks2="tasks2"
        :tasks3="tasks3"
        :tasks4="tasks4"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 4rem; /* Увеличьте число, чтобы увеличить отступ для других экранов */
}

/* Устанавливаем различные отступы для разных размеров экрана */
@media (min-width: 640px) {
  .container {
    margin-top: 3rem;
  }
}

@media (min-width: 768px) {
  .container {
    margin-top: 4rem; /* или другое значение для среднего экрана */
  }
}

.filters {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem; /* добавим небольшой отступ снизу */
}

.filter-button {
  margin-left: 0.5rem; /* ml-2 */
  padding: 0.5rem 1rem; /* p-2 */
  border-radius: 1.5rem; /* rounded-3xl */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* shadow-sm shadow-black */
  background: white; /* базовый цвет фона */
  transition: background 0.3s, color 0.3s; /* добавим плавность */
}

.filter-button.active {
  background: blue; /* цвет фона для активной кнопки */
  color: white; /* цвет текста для активной кнопки */
}
</style>
