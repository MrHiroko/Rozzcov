<script setup>
defineProps({
  cards: Array,
});
import ThemePanel from "./ThemePanel.vue";
</script>

<template>
  <div class="cards">
    <ThemePanel
      :title="card.title"
      :bg="card.bg"
      v-for="card in cards"
      :color="card.color"
      :key="card.id"
      :id="card.id"
    />
  </div>
</template>

<style scoped></style>
