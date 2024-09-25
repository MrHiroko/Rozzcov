<script setup>
import testTaskOne from "src/components/test-task-1.vue";
import testTaskTwo from "src/components/test-task-2.vue";
import testTaskThree from "src/components/test-task-3.vue";
import testTaskFour from "src/components/test-task-4.vue";

const taskComponents = {
  testTaskOne,
  testTaskTwo,
  testTaskThree,
  testTaskFour,
};

// Определение свойств
const props = defineProps({
  tasks: Array,
  tasks2: Array,
  tasks3: Array,
  tasks4: Array,
});

// Создание массива задач для отображения
const tasksArray = [
  { component: "testTaskOne", tasks: props.tasks },
  { component: "testTaskTwo", tasks: props.tasks2 },
  { component: "testTaskThree", tasks: props.tasks3 },
  { component: "testTaskFour", tasks: props.tasks4 },
];
</script>

<template>
  <div class="container">
    <div v-for="(item, index) in tasksArray" :key="index">
      <component
        v-for="task in item.tasks"
        :is="taskComponents[item.component]"
        :key="task.id"
        v-bind="task"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
