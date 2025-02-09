<script setup lang="ts">
import { ref } from "vue";
const p_red = ref("p-red");
const p_blue = ref("p-blue");
</script>

<template>
  <h2>3. Attribute Bindings</h2>
  <p :class="p_red">Attribute Bindings directive: [v-bind, :]</p>
  <p v-bind:class="p_blue">v-bind</p>
</template>

<style scoped>
.p-red {
  color: red;
}
.p-blue {
  color: blue;
}
</style>
