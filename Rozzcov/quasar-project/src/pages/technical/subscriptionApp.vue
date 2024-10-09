<template>
  <q-page>
    <q-table :rows="plans" :columns="columns" row-key="name">
      <template v-slot:body-cell-role="props">
        <q-td :props="props">
          {{ props.row.role }}
          <q-btn
            v-if="props.row.deletable"
            @click="deletePlan(props.row.name)"
            label="удалить"
            color="negative"
            size="sm"
          />
        </q-td>
      </template>
    </q-table>
    <q-btn @click="openAddPlanDialog" label="Добавить" color="primary" />

    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Добавить новый тариф</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="newPlan.name" label="Название" />
          <q-input v-model="newPlan.price" label="Цена (руб.)" type="number" />
          <q-input v-model="newPlan.role" label="Роль" />
        </q-card-section>
        <q-card-actions>
          <q-btn @click="addPlan" label="Сохранить" color="primary" />
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
      plans: [
        { name: "FREE", price: 0, role: "free_users", deletable: false },
        { name: "BASE", price: 0, role: "base_users", deletable: true },
        { name: "PRO", price: 0, role: "pro_users", deletable: true },
      ],
      columns: [
        { name: "name", label: "Название", align: "left", field: "name" },
        { name: "price", label: "Цена (руб.)", align: "left", field: "price" },
        { name: "role", label: "Роль", align: "left", field: "role" },
      ],
      dialog: false,
      newPlan: {
        name: "",
        price: 0,
        role: "",
      },
    };
  },
  methods: {
    deletePlan(planName) {
      this.plans = this.plans.filter((plan) => plan.name !== planName);
      this.$q.notify({
        message: `Тариф ${planName} удален`,
        color: "negative",
        position: "top",
      });
    },
    openAddPlanDialog() {
      this.dialog = true;
      this.newPlan = { name: "", price: 0, role: "" }; // Сброс значений
    },
    addPlan() {
      if (this.newPlan.name && this.newPlan.role) {
        this.plans.push({ ...this.newPlan, deletable: true });
        this.dialog = false;
        this.$q.notify({
          message: `Тариф ${this.newPlan.name} добавлен`,
          color: "positive",
          position: "top",
        });
      } else {
        this.$q.notify({
          message: "Пожалуйста, заполните все поля",
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
