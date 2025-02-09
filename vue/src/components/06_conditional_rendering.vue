<script setup lang="ts">
import { ref } from "vue";
const cond = ref(true);
const toggle_btn_text = ref("show");
function toggle() {
  cond.value = !cond.value;
  if (cond.value) toggle_btn_text.value = "hidden";
  else toggle_btn_text.value = "show";
}
</script>

<template>
  <!-- https://vuejs.org/guide/essentials/conditional.html -->
  <h2>6. Conditional Rendering</h2>
  <button @click="toggle">{{ toggle_btn_text }}</button>
  <p v-if="cond">show rendering</p>
  <p v-else>hidden rendering</p>
</template>
