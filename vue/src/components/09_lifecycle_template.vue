<script setup lang="ts">
import { onMounted, ref } from "vue";

const p = ref(null);
onMounted(() => {
  p.value.textContent = "on mounted";
});
</script>

<template>
  <!-- https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram -->
  <h2>9. Lifecycle and Template Refs</h2>
  <!-- https://vuejs.org/api/built-in-special-attributes.html#ref -->
  <!-- https://vuejs.org/guide/essentials/template-refs.html -->
  <p ref="p">before mounted</p>
</template>
