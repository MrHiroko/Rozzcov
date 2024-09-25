<script setup>
defineProps({
  cards: Array,
});
import Card from "./CardApp.vue";
</script>

<template>
  <div class="cards">
    <Card
      :title="card.title"
      :bg="card.bg"
      v-for="card in cards"
      :color="card.color"
      :key="card.id"
      :id="card.id"
    />
  </div>
</template>

<style scoped>
.cards {
  display: grid; /* Устанавливаем режим сетки */
  grid-template-columns: repeat(3, 1fr); /* grid-cols-1 */
  grid-auto-flow: row; /* grid-flow-row */
}

/* Адаптивные столбцы */
@media (min-width: 320px) and (max-width: 375px) {
  /* md: grid-cols-2 */
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;

    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 375px) and (max-width: 425px) {
  /* md: grid-cols-2 */
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;

    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 425px) and (max-width: 768px) {
  /* md: grid-cols-2 */
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Адаптивные столбцы */
@media (min-width: 768px) and (max-width: 1024px) {
  /* md: grid-cols-2 */
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) and (max-width: 1440px) {
  /* md: grid-cols-2 */
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1920px) {
  /* 3xl: grid-cols-3 */
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
