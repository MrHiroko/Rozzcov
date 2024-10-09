<template>
  <q-page>
    <q-list>
      <q-expansion-item label="История" icon="history">
        <q-list>
          <q-item
            v-for="(subCategory, index) in historySubCategories"
            :key="index"
          >
            <q-item-section>{{ subCategory }}</q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>

      <q-expansion-item label="Международные отношения" icon="public">
        <q-list>
          <q-item
            v-for="(subCategory, index) in internationalRelationsSubCategories"
            :key="index"
          >
            <q-item-section>{{ subCategory }}</q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>

      <q-btn @click="addCategory" label="Добавить" color="primary" />
    </q-list>

    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Добавить новую категорию</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="newCategory" label="Название категории" />
        </q-card-section>
        <q-card-actions>
          <q-btn @click="saveCategory" label="Сохранить" color="primary" />
          <q-btn @click="dialog = false" label="Отмена" color="secondary" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      newCategory: "",
      historySubCategories: [
        "Отечественная история",
        "Мировая история",
        "Культура",
      ],
      internationalRelationsSubCategories: ["Политология", "Социология"],
    };
  },
  methods: {
    addCategory() {
      this.dialog = true;
    },
    saveCategory() {
      if (this.newCategory) {
        // Добавляем новую категорию в нужный массив
        this.historySubCategories.push(this.newCategory);
        this.dialog = false;
        this.newCategory = "";
      } else {
        this.$q.notify({
          message: "Пожалуйста, введите название категории",
          color: "negative",
          position: "top",
        });
      }
    },
  },
};
</script>

<style scoped>
/* Ваши стили */
</style>
