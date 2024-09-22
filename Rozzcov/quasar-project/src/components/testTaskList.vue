<script setup>
import testTaskOne from "@/components/test-task-1.vue";
import testTaskTwo from "@/components/test-task-2.vue";
import testTaskThree from "./test-task-3.vue";
import testTaskFour from "./test-task-4.vue";

const taskComponents = {
  testTaskOne,
  testTaskTwo,
  testTaskThree,
  testTaskFour,
};

const props = defineProps({
  tasks: Array,
  tasks2: Array,
  tasks3: Array,
  tasks4: Array,
});

const tasksArray = [
  { component: "testTaskOne", tasks: props.tasks },
  { component: "testTaskTwo", tasks: props.tasks2 },
  { component: "testTaskThree", tasks: props.tasks3 },
  { component: "testTaskFour", tasks: props.tasks4 },
];
</script>

<template>
  <div class="container">
    <div v-for="{ component, tasks } in tasksArray" :key="component">
      <component
        v-for="task in tasks"
        :is="taskComponents[component]"
        :key="task.id"
        v-bind="task"
      ></component>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
