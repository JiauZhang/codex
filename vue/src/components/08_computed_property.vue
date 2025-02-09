<script setup lang="ts">
import { computed, ref } from "vue";
let todo_id = 0;
const todos = ref([
  {
    id: todo_id++,
    text: `text #${todo_id.toString()}: a`,
    done: false,
  },
  {
    id: todo_id++,
    text: `text #${todo_id.toString()}: b`,
    done: false,
  },
]);
// https://vuejs.org/guide/essentials/class-and-style.html#binding-html-classes
function isDone(todo) {
  if (todo.done) return "done";
  else return "";
}
const newTodo = ref("");
function addTodo() {
  if (!newTodo.value.length) return;
  todos.value.push({
    id: todo_id++,
    text: `text #${todo_id.toString()}: ${newTodo.value}`,
    done: false,
  });
  newTodo.value = "";
}
function removeTodo(todo) {
  todos.value = todos.value.filter((todo_) => todo_.id !== todo.id);
}

const hidden = ref(false);
const filteredTodos = computed(() => {
  return hidden.value
    ? todos.value.filter((todo_) => todo_.done === false)
    : todos.value;
});
const hidden_text = computed(() => {
  return hidden.value ? "show all" : "hide completed";
});
function onClick() {
  hidden.value = !hidden.value;
}
</script>

<template>
  <h2>8. Computed Property</h2>
  <button @click="onClick">{{ hidden_text }}</button>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="isDone(todo)">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
