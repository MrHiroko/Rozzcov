<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const title = ref("По умолчанию");
const showHeader = ref(true);

title.value = route.meta.title || "По умолчанию";

title.value = route.meta.title || "По умолчанию";
showHeader.value = route.meta.showHeader !== false;

watch(
  () => route.meta,
  (newMeta) => {
    title.value = newMeta.title || "По умолчанию";
    showHeader.value = newMeta.showHeader !== false;
    document.title = title.value;
  },
  { immediate: true }
);
</script>

<template>
  <header v-if="showHeader" class="">
    <div class="header">
      <div class="header__title">
        {{ title }}
      </div>
      <div class="search">
        <img
          class="search__icon"
          src="../assets/icons/search.svg"
          alt="search"
          width="20px"
        />
        <input
          v-model="searchQuery"
          class="search__input"
          type="text"
          placeholder="Поиск"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%; /* w-full */
  display: flex; /* flex */
  flex-direction: column; /* flex-col */
}

.header__title {
  font-family: "Murs Gothic", sans-serif; /* font-MursGothic */
  font-weight: 900; /* font-black соответствует font-weight: 900 */
  margin-top: 1.25rem; /* mt-5 соответствует margin-top: 1.25rem; */
  margin-bottom: 1.25rem; /* mb-5 соответствует margin-bottom: 1.25rem; */
  color: blue; /* text-regal-blue - предполагаемый цвет (замените на актуальный hexadecimal или RGB) */
  font-size: 1rem; /* Базовый размер шрифта (по умолчанию) */
}

/* Адаптивные размеры текста */
@media (min-width: 640px) {
  /* xs: text-3xl */
  .header__title {
    font-size: 1.875rem; /* Примерный размер для text-3xl */
  }
}

@media (min-width: 768px) {
  /* md: text-4xl */
  .header__title {
    font-size: 2.25rem; /* Примерный размер для text-4xl */
  }
}

.search {
  position: relative;
}
.search__icon {
  position: absolute;
  top: 8px;
  left: 5px;
}
.search__input {
  padding-left: 30px;
  color: #000;
  width: 100%; /* w-full */
  border: 1px solid #a0aec0; /* border и border-gray-400 */
  outline: none; /* outline-none */
  border-radius: 9999px; /* rounded-full для создания округленного края */
  margin-bottom: 2rem;
}

/* Состояние фокуса */
.search__input:focus {
  border-color: #4a5568; /* focus:border-gray-600 (замените на актуальный цвет) */
}
</style>
