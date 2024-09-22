<script>
export default {
  components: {},
  data() {
    return {
      cards: [
        { title: "ОТЕЧЕСТВЕННАЯ ИСТОРИЯ", persent: "36%", bg: ["#ffffff"] },
        { title: "МИРОВАЯ ИСТОРИЯ", persent: "36%", bg: ["#ffffff"] },
        { title: "КУЛЬТУРА", persent: "36%", bg: ["#ffffff"] },
      ],
    };
  },
  mounted() {},

  methods: {},
};
</script>

<template>
  <div class="row">
    <div class="col-12 row content">
      <q-card
        @click="$router.push('/test-task-app')"
        v-for="card in cards"
        :key="card.id"
        class="col-5 card row"
        :style="{ background: card.bg }"
      >
        <div class="card-tittle col-12">
          {{ card.title }}
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
@import "src/css/pages/test-app";
</style>
