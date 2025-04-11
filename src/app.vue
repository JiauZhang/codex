<script setup>
import { ref } from 'vue'
import MarkdownEditor from '@/components/MarkdownEditor.vue'

const markdownContent = ref(
`
# Welcome to My Markdown Editor

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

行内公式：\$E=mc^2\$

块级公式：
\$\$
\\sum_{i=1}^n i = \\frac{n(n+1)}{2}
\$\$

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
`
)

</script>

<template>
  <MarkdownEditor v-model="markdownContent" />
</template>
