<script setup lang="ts">
import { ref } from "vue";
import Props from "./01_get_started.vue";
const id = ref(11);
const title = ref("Props");
</script>

<template>
  <Props :prop-one="id" :prop-two="title" />
  <p>NOT attempt to mutate a prop inside a child component</p>
  <p>
    The parent can pass the prop to the child just like attributes. To pass a
    dynamic value, we can also use the v-bind syntax
  </p>
</template>
