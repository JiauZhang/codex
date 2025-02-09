<script setup lang="ts">
import { ref } from "vue";
const msg = ref("Declarative Rendering");
</script>

<template>
  <!-- ref(), reactive() https://vuejs.org/guide/essentials/reactivity-fundamentals.html -->
  <h2>2. Declarative Rendering</h2>
  <p>{{ msg }}</p>
  <p>{{ msg.split("").reverse().join("") }}</p>
</template>
