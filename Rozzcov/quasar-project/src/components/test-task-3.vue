<script setup>
defineProps({
  id: Number,
  quest: String,
  answers: Array, // передаем массив ответов
  name: String,
});
</script>

<template>
  <div class="container rounded-3xl w-full p-4 my-4 border border-black">
    <div class="col-12 answer">
      <div class="options col-12">
        <span class="question">{{ quest }}</span>
        <div class="options-container row mt-2">
          <div
            class="option mr-3"
            v-for="(answer, index) in answers"
            :key="index"
          >
            <input :name="name" type="radio" :value="answer" />
            <span>{{ answer }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="actions flex flex-wrap justify-between mt-3">
      <div>
        <button
          class="btn-answer bg-regal-blue rounded-3xl text-white h-8 w-24"
        >
          ответить
        </button>
        <button
          class="btn-show-answers bg-gray-500 rounded-3xl text-white h-8 ml-3 w-64"
        >
          показать правильные ответы
        </button>
      </div>
      <div class="score text-bold text-2xl text-gray-700">0/3</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  border-radius: 1.5rem; /* rounded-3xl */
  width: 100%; /* w-full */
  padding: 1rem; /* p-4 установлен для улучшения отступов */
  margin: 1rem 0; /* my-4 */
  border: 1px solid black; /* border border-black */
}

.question {
  font-weight: bold; /* Выделение вопроса */
  font-size: 1.25rem; /* Увеличенный размер текста */
}

.options-container {
  display: flex;
  flex-direction: column; /* Вертикальное расположение опций */
}

.option {
  display: flex;
  align-items: center; /* Отцентрировать радиокнопки и текст */
}

.actions {
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
}
</style>
