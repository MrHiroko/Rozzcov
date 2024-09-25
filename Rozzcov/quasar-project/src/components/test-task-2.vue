<script setup>
defineProps({
  id: Number,
  questions: Array, // передаем массив объектов с вопросами
});
</script>

<template>
  <div class="container rounded-3xl p-2 my-4 border border-black">
    <div class="options-section">
      <div class="option" v-for="(question, index) in questions" :key="index">
        <div class="question-label my-3">
          <span>{{ String.fromCharCode(1042 + index) }}) {{ question }}</span>
        </div>
        <div class="input-group">
          <input class="input-field" type="text" placeholder="Ответ" />
          <input class="input-field" type="text" placeholder="Ответ" />
          <input class="input-field" type="text" placeholder="Ответ" />
        </div>
      </div>
    </div>
    <div class="actions-section">
      <div class="flex flex-wrap justify-between mt-3">
        <div>
          <button class="btn-respond bg-regal-blue text-white h-8 w-24">
            ответить
          </button>
          <button class="btn-show-answers bg-gray-500 text-white h-8 ml-3 w-64">
            показать правильные ответы
          </button>
        </div>
        <div class="score text-bold text-2xl text-gray-700">0/3</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  border-radius: 1.5rem; /* rounded-3xl */
  width: 100%; /* w-full */
  padding: 0.5rem; /* p-2 */
  margin: 1rem 0; /* my-4 */
  border: 1px solid black; /* border border-black */
}

.options-section {
  display: flex;
  flex-direction: column;
}

.option {
  margin-bottom: 1rem; /* Убедитесь, что между опциями есть отступ */
}

.question-label {
  margin-bottom: 0.75rem; /* my-3 */
}

.input-group {
  display: flex;
  flex-direction: column; /* входные поля будут вертикально расположены */
}

.input-field {
  width: 100%; /* w-full */
  margin-top: 0.25rem; /* mt-1 */
  border: 1px solid #a0aec0; /* border и border-gray-400 */
  outline: none; /* outline-none */
  border-radius: 9999px; /* rounded-full */
  padding: 0.25rem 3rem; /* py-1 (вертикальный отступ), px-12 (горизонтальный отступ) */
}

.input-field:focus {
  border-color: #4a5568; /* focus:border-gray-600 */
}

.actions-section {
  margin-top: 0.75rem; /* mt-3 */
}

.btn-respond,
.btn-show-answers {
  border-radius: 1.5rem; /* rounded-3xl */
}

.score {
  font-weight: bold; /* text-bold */
  font-size: 1.5rem; /* text-2xl */
  color: #4a5568; /* text-gray-700 */
}
</style>
