<script setup lang="ts">
import { ref } from "vue";
import Slots from "./01_get_started.vue";
const msg = ref("slot message!");
</script>

<template>
  <!-- https://vuejs.org/guide/components/slots.html#slot-content-and-outlet -->
  <!-- multiple slot outlets in a single component: https://vuejs.org/guide/components/slots.html#named-slots-->
  <Slots :prop-one="13" prop-two="Slots">
    <p>{{ msg }}</p>
  </Slots>
</template>
