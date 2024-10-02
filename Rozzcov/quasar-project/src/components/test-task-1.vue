<script setup>
defineProps({
  id: Number,
  quest: String,
  text: String,
  questions: Array, // передаем массив объектов с вопросами и ответами
});
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="title-text">
        {{ quest }}
      </div>
      <div class="text-test">
        {{ text }}
      </div>
    </div>
    <div class="answer">
      <div class="option" v-for="(question, index) in questions" :key="index">
        <span class="option-label">
          {{ String.fromCharCode(1040 + index) }} {{ question }}
        </span>
        <input class="input-field" type="text" placeholder="Ответ" />
      </div>
      <span class="note">
        Примечание: вводить имена и прозвища людей нужно только кириллическими
        символами. Например, «Пётр Первый», а не «Пётр 1» или «Пётр I».
      </span>
    </div>
    <div class="flex-container">
      <div class="button-group">
        <button class="btn-respond">ответить</button>
        <button class="btn-show-answers">показать правильные ответы</button>
      </div>
      <div class="score">0/3</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  border-radius: 1.5rem; /* rounded-3xl */
  padding: 0.5rem; /* p-2 */
  margin: 1rem 0; /* my-4 */
  border: 1px solid black; /* border border-black */
}

.content {
  text-align: center; /* text-center */
}

.title-text {
  margin-bottom: 0.25rem; /* mb-1 */
}

.text-test {
  margin-bottom: 0.5rem; /* mb-2 */
}

.answer {
  display: flex;
  flex-direction: column;
}

.option {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem; /* для отступа между опциями */
}

.option-label {
  margin-right: 0.5rem; /* для отступа между меткой и полем ввода */
}

.input-field {
  padding: 0.25rem; /* Установите верхний и нижний отступ для улучшения восприятия */

  border-radius: 0.25rem; /* Углы для поля ввода */
}

.note {
  color: slategray; /* text-slate-500 */
}

.flex-container {
  display: flex;
  justify-content: space-between; /* justify-between */
  flex-wrap: wrap; /* flex-wrap */
}

.button-group {
  display: flex;
}

.btn-respond {
  background-color: blue; /* regal-blue */
  color: white;
  height: 2rem; /* h-8 */
  width: 6rem; /* w-24 */
  border: none;
  border-radius: 0.5rem; /* Углы для кнопки */
  cursor: pointer;
}

.btn-show-answers {
  background-color: #7d7d7d; /* gray-500 */
  color: white;
  height: 2rem; /* h-8 */
  margin-left: 0.75rem; /* ml-3 */
  width: 16rem; /* w-64 */
  border: none;
  border-radius: 0.5rem; /* Углы для кнопки */
  cursor: pointer;
}

.score {
  font-weight: bold; /* text-bold */
  font-size: 1.5rem; /* text-2xl */
  color: #4a4a4a; /* text-gray-700 */
}
.container {
  border-radius: 1.5rem;
  padding: 0.5rem;
  margin: 1rem 0;
  border: 1px solid black;
}

.title-text {
  text-align: center;
  margin-bottom: 0.25rem;
}

.text-test {
  margin-bottom: 0.5rem;
}

.answer {
  display: flex;
  flex-direction: column;
}

.option {
  display: flex;
  flex-direction: column;
}

.option-label {
  margin-bottom: 0.25rem;
}

.input-field {
  width: 100%;
  margin-top: 0.25rem;
  border: 1px solid #a0aec0;
  outline: none;
  border-radius: 9999px;
  padding: 0.25rem 3rem;
}

.input-field:focus {
  border-color: #4a5568;
}

.note {
  margin-top: 1rem;
}

.btn-respond,
.btn-show-answers {
  border-radius: 1.5rem;
}

.score {
  font-weight: bold;
  font-size: 1.5rem;
  color: #4a5568;
}
</style>
