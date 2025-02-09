<script setup lang="ts">
import { ref, watch } from "vue";

const id = ref(0);
const data = ref(null);

async function fetchData() {
  data.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id.value}`,
  );
  data.value = await res.json();
}

watch(id, fetchData);
</script>

<template>
  <!-- https://vuejs.org/guide/essentials/watchers.html -->
  <h2>10. Watchers</h2>
  <p>data id: {{ id }}</p>
  <button @click="id++">fetch</button>
  <pre v-if="data">{{ data }}</pre>
  <p v-else>loading...</p>
</template>
