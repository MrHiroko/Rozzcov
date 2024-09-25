<script setup>
defineProps({
  themes: Array,
});
import ThemePanel from "./ThemePanel.vue";
</script>

<template>
  <div class="themes">
    <ThemePanel
      :title="theme.title"
      :time="theme.time"
      :button="theme.button"
      :icon="theme.icon"
      :percent="theme.percent"
      v-for="theme in themes"
      :key="theme.id"
      :id="theme.id"
    />
  </div>
</template>

<style scoped>
.themes {
  width: 100%;
}
</style>
