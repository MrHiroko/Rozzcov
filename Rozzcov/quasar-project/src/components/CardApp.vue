<script setup>
defineProps({
  id: Number,
  title: String,
  bg: String,
  color: String,
});
</script>

<template>
  <div class="card" :style="{ background: bg, color: color }">
    <div class="card-tittle">
      {{ title }}
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 250px; /* Начальный размер */
  height: 140px;
  margin: 1rem; /* m-4 соответствует margin: 1rem; */
  outline: 1px solid black; /* outline-1 и outline-black соответствует этому */
  display: flex; /* flex */
  border-radius: 24px; /* rounded-3xl обычно соответствует 24px */
  cursor: pointer; /* cursor-pointer */
}

/* Адаптивные размеры */
@media (min-width: 640px) {
  .card {
    width: 220px; /* xs: w-[200px] */
  }
}

@media (min-width: 768px) {
  .card {
    width: 300px; /* sm: w-[300px] */
  }
}

@media (min-width: 1024px) {
  .card {
    width: 300px; /* md: w-[250px] */
  }
}

@media (min-width: 1280px) {
  .card {
    width: 380px; /* lg: w-[380px] */
  }
}

@media (min-width: 1536px) {
  .card {
    width: 440px; /* xl и 2xl w-[440px] */
  }
}

.card-tittle {
  margin-top: 1.25rem; /* mt-5 соответствует margin-top: 1.25rem; */
  margin-left: 1.25rem; /* ml-5 соответствует margin-left: 1.25rem; */
  font-size: 1rem; /* Базовый размер шрифта по умолчанию */
}

/* Адаптивные размеры текста */
@media (min-width: 640px) {
  .card-tittle {
    font-size: 1.25rem; /* xs: text-xl (примерно 1.25rem) */
  }
}

@media (min-width: 768px) {
  .card-tittle {
    font-size: 1.5rem; /* sm: text-2xl (примерно 1.5rem) */
  }
}

@media (min-width: 1024px) {
  .card-tittle {
    font-size: 1.5rem; /* md: text-2xl (примерно 1.5rem) */
  }
}

@media (min-width: 1280px) {
  .card-tittle {
    font-size: 1.875rem; /* lg: text-3 (примерно 1.875rem) */
  }
}

@media (min-width: 1536px) {
  .card-tittle {
    font-size: 2rem; /* xl: text-3xl (примерно 2rem) */
  }
}
</style>
