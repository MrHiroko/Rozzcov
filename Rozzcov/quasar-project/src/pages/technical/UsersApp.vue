<template>
  <q-page>
    <q-table :rows="users" :columns="columns" row-key="id">
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            @click="resetPassword(props.row.id)"
            label="Сбросить пароль"
            color="primary"
          />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Мишанов Е. А.",
          email: "examplebox@mail.ru",
          subscription: "PRO",
        },
        {
          id: 2,
          name: "Мишанов Е. А.",
          email: "examplebox@mail.ru",
          subscription: "PRO",
        },
        {
          id: 3,
          name: "Мишанов Е. А.",
          email: "examplebox@mail.ru",
          subscription: "PRO",
        },
        {
          id: 4,
          name: "Мишанов Е. А.",
          email: "examplebox@mail.ru",
          subscription: "PRO",
        },
        {
          id: 5,
          name: "Мишанов Е. А.",
          email: "examplebox@mail.ru",
          subscription: "PRO",
        },
        {
          id: 6,
          name: "Мишанов Е. А.",
          email: "examplebox@mail.ru",
          subscription: "PRO",
        },
        {
          id: 7,
          name: "Мишанов Е. А.",
          email: "examplebox@mail.ru",
          subscription: "PRO",
        },
      ],
      columns: [
        { name: "name", label: "ФИО", align: "left", field: "name" },
        { name: "email", label: "Почта", align: "left", field: "email" },
        {
          name: "subscription",
          label: "Подписка",
          align: "left",
          field: "subscription",
        },
        {
          name: "actions",
          label: "Действие",
          align: "center",
          field: "actions",
        },
      ],
    };
  },
  methods: {
    resetPassword(userId) {
      this.$q.notify({
        message: `Сброс пароля для пользователя с ID: ${userId}`,
        color: "primary",
        position: "top",
      });
    },
  },
};
</script>

<style scoped>
/* Добавьте свои стили, если необходимо */
</style>
