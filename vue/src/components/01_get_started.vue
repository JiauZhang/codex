<script setup lang="ts">
// props are readonly!
const props = defineProps({
  propOne: {
    type: Number,
    default: 1,
  },
  propTwo: {
    type: String,
    default: "Getting Started!",
  },
});

const emit = defineEmits(["response"]);
emit("response", "Message from Child!");
</script>

<template>
  <h2>{{ propOne }}. {{ propTwo }}</h2>
  <slot></slot>
</template>
