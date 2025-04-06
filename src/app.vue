<script setup>
import { ref } from 'vue'
import MarkdownEditor from '@/components/MarkdownEditor.vue'

const markdownContent = ref(`# Welcome to My Markdown Editor

This is a **markdown editor** built with:

- Vue 3
- Markdown-it
- Shiki for syntax highlighting
- TailwindCSS for styling

\`\`\`javascript
// Example code
function hello() {
  console.log('Hello, world!')
}
\`\`\`
`)
</script>

<template>
  <MarkdownEditor v-model="markdownContent" />
</template>
