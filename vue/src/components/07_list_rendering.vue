<script setup lang="ts">
import { ref } from "vue";
let todo_id = 0;
const todos = ref([
  { id: todo_id++, text: `text #${todo_id.toString()}: a` },
  { id: todo_id++, text: `text #" + ${todo_id.toString()}: b` },
]);
const newTodo = ref("");
function addTodo() {
  if (!newTodo.value.length) return;
  todos.value.push({
    id: todo_id++,
    text: `text #${todo_id.toString()}: ${newTodo.value}`,
  });
  newTodo.value = "";
}
function removeTodo(todo) {
  todos.value = todos.value.filter((todo_) => todo_.id !== todo.id);
}
</script>

<template>
  <h2>7. List Rendering</h2>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>
