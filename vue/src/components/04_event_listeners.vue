<script setup lang="ts">
import { ref } from "vue";
const click_count = ref(0);
const p_red = ref("p-red");
function inc() {
  click_count.value++;
}
</script>

<template>
  <h2>4. Event Listeners</h2>
  <p :class="p_red">Event Listeners directive: [v-on, @]</p>
  <button @click="inc">click count: {{ click_count }}</button>
</template>

<style scoped>
.p-red {
  color: red;
}
</style>
