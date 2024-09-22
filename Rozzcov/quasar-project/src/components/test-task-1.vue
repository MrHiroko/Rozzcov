<script setup>
defineProps({
  id: Number,
  quest: String,
  text: String,
  question1: String,
  question2: String,
  question3: String,
});
</script>
<template>
  <div class="container rounded-3xl p-2 my-4 border border-black">
    <div class="content">
      <div class="title-text text-center mb-1">
        {{ quest }}
      </div>
      <div class="text-test mb-2">
        {{ text }}
      </div>
    </div>
    <div class="answer row">
      <div class="option flex flex-col">
        <span class="option-label">А) {{ question1 }}</span>
        <input class="input-field" type="text" placeholder="Ответ" />
      </div>
      <div class="option flex flex-col">
        <span class="option-label">Б) {{ question2 }}</span>
        <input class="input-field" type="text" placeholder="Ответ" />
      </div>
      <div class="option flex flex-col">
        <span class="option-label">В) {{ question3 }}</span>
        <input class="input-field" type="text" placeholder="Ответ" />
      </div>
      <span class="note text-slate-500">
        Примечание: вводить имена и прозвища людей нужно только кириллическими
        символами. Например, «Пётр Первый», а не «Пётр 1» или «Пётр I»
      </span>
    </div>
    <div class="flex flex-wrap justify-between">
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
</template>

<style scoped>
.container {
  border-radius: 1.5rem; /* rounded-3xl */
  width: 100%; /* w-full */
  padding: 0.5rem; /* p-2 */
  margin: 1rem 0; /* my-4 */
  border: 1px solid black; /* border border-black */
}

.title-text {
  text-align: center; /* text-center */
  margin-bottom: 0.25rem; /* mb-1 */
}

.text-test {
  margin-bottom: 0.5rem; /* mb-2 */
}

.answer {
  display: flex; /* row контекст */
  flex-direction: column; /* обеспечить вертикальное расположение опций */
}

.option {
  display: flex; /* flex */
  flex-direction: column; /* flex-col */
}

.option-label {
  margin-bottom: 0.25rem; /* mt-1 (отпуск перед input) */
}

.input-field {
  width: 100%; /* w-full */
  margin-top: 0.25rem; /* mt-1 */
  border: 1px solid #a0aec0; /* border и border-gray-400 */
  outline: none; /* outline-none */
  border-radius: 9999px; /* rounded-full */
  padding-left: 3rem; /* px-12 (левый отступ) */
  padding-right: 3rem; /* px-12 (правый отступ) */
  padding-top: 0.25rem; /* py-1 (верхний отступ) */
  padding-bottom: 0.25rem; /* py-1 (нижний отступ) */
}

.input-field:focus {
  border-color: #4a5568; /* focus:border-gray-600 */
}

.note {
  margin-top: 1rem; /* дополнительный отступ для заметки */
}

.btn-respond {
  border-radius: 1.5rem; /* rounded-3xl */
}

.btn-show-answers {
  border-radius: 1.5rem; /* rounded-3xl */
}

.score {
  font-weight: bold; /* text-bold */
  font-size: 1.5rem; /* text-2xl */
  color: #4a5568; /* text-gray-700 */
}
</style>
