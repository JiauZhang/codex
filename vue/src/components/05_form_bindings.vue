<script setup lang="ts">
import { ref } from "vue";
const text = ref("");
function onInput(e) {
  text.value = e.target.value;
}
const v_model_text = ref("");
</script>

<template>
  <!-- https://vuejs.org/guide/essentials/forms.html -->
  <h2>5. Form Bindings: two-way bindings</h2>
  <p>[v-on & v-bind]: {{ text }}</p>
  <input @input="onInput" :value="text" placeholder="input here" />
  <p>[v-model]: {{ v_model_text }}</p>
  <input v-model="v_model_text" placeholder="input here" />
</template>
