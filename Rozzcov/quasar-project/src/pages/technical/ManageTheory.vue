<template>
  <div>
    <div v-for="(category, index) in categories" :key="index">
      <h3>{{ category.name }}</h3>
      <ul>
        <li
          class="subcategories"
          v-for="(subcategory, subIndex) in category.subcategories"
          :key="subIndex"
        >
          {{ subcategory }}
        </li>
        <li
          class="textbook"
          v-for="(textbook, textbookIndex) in category.textbook"
          :key="textbookIndex"
        >
          {{ textbook }}
        </li>
      </ul>
      <q-btn @click="openAddSubcategoryDialog(index)" label="+" />
    </div>
    <q-btn @click="openAddCategoryDialog" label="Добавить категорию" />
    <q-dialog v-model="addCategoryDialog">
      <q-card>
        <q-card-section>
          <q-input v-model="newCategoryName" label="Название категории" />
        </q-card-section>
        <q-card-actions>
          <q-btn
            label="Отменить"
            @click="closeAddCategoryDialog"
            color="secondary"
          />
          <q-btn label="Добавить" @click="addCategory" color="primary" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="addSubcategoryDialog">
      <q-card>
        <q-card-section>
          <q-input
            v-model="newSubcategoryName"
            label="Название подкатегории"
            color="secondary"
          />
        </q-card-section>
        <q-card-actions>
          <q-btn label="Отменить" @click="closeAddSubcategoryDialog" />
          <q-btn label="Добавить" @click="addSubcategory" color="primary" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: "История",
          subcategories: [
            "Отечественная история",
            "Мировая история",
            "Культура",
          ],
          textbook: ["Учебник 1", "Учебник 2", "Учебник 3"],
        },
        {
          name: "Международные отношения",
          subcategories: [
            "Отечественная история",
            "Мировая история",
            "Культура",
          ],
          textbook: ["Учебник 1", "Учебник 2", "Учебник 3"],
        },
        {
          name: "Политология",
          themes: ["Отечественная история", "Мировая история", "Культура"],
          textbook: ["Учебник 1", "Учебник 2", "Учебник 3"],
        },
        {
          name: "Социология",
          subcategories: [
            "Отечественная история",
            "Мировая история",
            "Культура",
          ],
          textbook: ["Учебник 1", "Учебник 2", "Учебник 3"],
        },
      ],

      addCategoryDialog: false,
      addSubcategoryDialog: false,
      newCategoryName: "",
      newSubcategoryName: "",
      selectedCategoryIndex: null,
    };
  },
  methods: {
    openAddCategoryDialog() {
      this.addCategoryDialog = true;
      this.newCategoryName = "";
    },
    closeAddCategoryDialog() {
      this.addCategoryDialog = false;
    },
    addCategory() {
      if (this.newCategoryName) {
        this.categories.push({ name: this.newCategoryName, subcategories: [] });
        this.$q.notify({
          message: "Категория успешно добавлена!",
          color: "positive",
          position: "top",
        });

        this.closeAddCategoryDialog();
        this.saveToBackend();
      } else {
        this.$q.notify({
          message: "Введите название категории",
          color: "negative",
          position: "top",
        });
      }
    },
    openAddSubcategoryDialog(index) {
      this.selectedCategoryIndex = index;
      this.addSubcategoryDialog = true;
      this.newSubcategoryName = "";
    },
    closeAddSubcategoryDialog() {
      this.addSubcategoryDialog = false;
    },
    addSubcategory() {
      if (this.newSubcategoryName && this.selectedCategoryIndex !== null) {
        this.categories[this.selectedCategoryIndex].subcategories.push(
          this.newSubcategoryName
        );
        this.$q.notify({
          message: "Подкатегория успешно добавлена!",
          color: "positive",
          position: "top",
        });
        this.closeAddSubcategoryDialog();
        this.saveToBackend();
      } else {
        this.$q.notify({
          message: "Введите название категории",
          color: "negative",
          position: "top",
        });
      }
    },
    saveToBackend() {
      axios
        .post("/api/categories", this.categories)
        .then((response) => {
          console.log("Данные успешно сохранены", response);
        })
        .catch((error) => {
          console.error("Ошибка при сохранении данных", error);
        });
    },
  },
};
</script>

<style scoped>
.subcategories {
  margin-left: 20px;
  margin-top: 5px;
}
.textbook {
  margin-left: 40px;
  margin-top: 5px;
}
</style>
