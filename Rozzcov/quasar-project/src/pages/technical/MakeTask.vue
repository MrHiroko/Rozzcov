<template>
  <q-page>
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h6 text-blue">14 (0101014)</div>
        <div class="text-subtitle2">Теги: история, отечественная история</div>
        <q-input
          v-model="task.title"
          label="Задание"
          required
          class="q-mb-md"
        />
        <q-input
          v-model="task.text"
          label="Текст задания"
          type="textarea"
          required
          class="q-mb-md"
        />
        <div
          v-for="(question, index) in task.questions"
          :key="index"
          class="q-mb-md"
        >
          <div class="text-h6">Вопрос {{ index + 1 }}:</div>
          <q-input
            v-model="question.text"
            label="Вопрос"
            required
            class="q-mb-md"
          />
          <q-input
            v-model="question.answer"
            label="Правильный ответ"
            required
            class="q-mb-md"
          />
          <q-btn
            icon="remove"
            @click="removeQuestion(index)"
            color="negative"
            flat
          />
        </div>
        <div class="btn-block">
          <q-btn
            icon="add"
            label="Добавить вопрос"
            @click="addQuestion()"
            color="secondary"
            class="q-mb-md"
          />
          <q-btn label="Сохранить" color="primary" @click="submitTask" />
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-btn
          icon="add"
          label="Создать новое задание"
          @click="createNewTask"
          color="secondary"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: "",
        text: "",
        questions: [{ text: "", answer: "" }],
      },
    };
  },
  methods: {
    addQuestion() {
      this.task.questions.push({ text: "", answer: "" });
    },
    removeQuestion(index) {
      this.task.questions.splice(index, 1);
    },
    async submitTask() {
      try {
        const response = await this.$axios.post(
          "https://e16e5957e31c1073.mokky.dev/task",
          this.task
        );
        this.$q.notify({
          type: "positive",
          message: "Задание успешно сохранено!",
        });
        this.resetForm();
      } catch (error) {
        console.error(error);
        this.$q.notify({
          type: "negative",
          message: error.response
            ? error.response.data.message || "Ошибка при сохранении задания."
            : "Ошибка при сохранении задания.",
        });
      }
    },
    resetForm() {
      this.task.title = "";
      this.task.text = "";
      this.task.questions = [{ text: "", answer: "" }];
    },
    createNewTask() {
      this.resetForm();
      this.$q.notify({
        type: "info",
        message: "Создание нового задания.",
      });
    },
  },
};
</script>

<style scoped>
.q-card {
  max-width: 90%;
  margin: auto;
  border: 1px solid black;
  border-radius: 24px;
}
.btn-block {
  display: flex;
  justify-content: space-between;

  align-items: center;
}
</style>
