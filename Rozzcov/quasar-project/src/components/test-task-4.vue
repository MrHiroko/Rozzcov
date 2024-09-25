<script>
export default {
  props: {
    quest: {
      type: String,
      required: true,
    },
    answers: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="question">{{ quest }}</div>
    <div class="options-container">
      <div class="option" v-for="(answer, index) in answers" :key="index">
        <input :name="name" type="checkbox" :id="`option-${index}`" />
        <label :for="`option-${index}`">{{ answer }}</label>
      </div>
    </div>
    <div class="actions">
      <button class="btn-answer">ответить</button>
      <button class="btn-show-answers">показать правильные ответы</button>
      <div class="score">0/3</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  border-radius: 1.5rem; /* rounded-3xl */
  padding: 1rem; /* p-4 */
  margin: 1rem 0; /* my-4 */
  border: 1px solid black; /* border border-black */
}

.question {
  font-weight: bold; /* Выделение вопроса */
  font-size: 1.25rem; /* Увеличенный размер текста */
  margin-bottom: 1rem; /* Отступ под вопросом */
}

.options-container {
  display: flex;
  flex-direction: column; /* Вертикальное расположение опций */
}

.option {
  display: flex;
  align-items: center; /* Отцентрировать чекбоксы и текст */
  margin-bottom: 0.5rem; /* Отступ между опциями */
}

.actions {
  display: flex;
  justify-content: space-between; /* Распределение кнопок по ширине */
  margin-top: 1rem; /* mt-3 */
}

.btn-answer,
.btn-show-answers {
  border-radius: 1.5rem; /* rounded-3xl */
}

.score {
  font-weight: bold; /* text-bold */
  font-size: 1.5rem; /* text-2xl */
  color: #4a5568; /* text-gray-700 */
  align-self: center; /* Центрирование на вертикали */
}
</style>
