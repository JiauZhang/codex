<script setup lang="ts">
import { ref } from "vue";
import Emit from "./01_get_started.vue";
const msg = ref("parent message!");
function receiveMessage(message) {
  msg.value = message;
}
</script>

<template>
  <Emit :prop-one="12" prop-two="Emits" @response="receiveMessage" />
  <p>{{ msg }}</p>
</template>
