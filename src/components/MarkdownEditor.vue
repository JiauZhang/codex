<script setup>
import { ref, computed, onMounted } from 'vue'
import MarkdownIt from 'markdown-it'
import { createHighlighter } from 'shiki'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const content = ref(props.modelValue)
const md = ref(null)
const shikiHighlighter = ref(null)

// 初始化 markdown-it 和 shiki
onMounted(async () => {
  shikiHighlighter.value = await createHighlighter({
    themes: ['github-dark', 'github-light'],
    langs: ['javascript', 'typescript', 'html', 'css', 'json', 'bash', 'markdown']
  })
  
  md.value = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: (code, lang) => {
      if (!lang) return code
      try {
        return shikiHighlighter.value.codeToHtml(code, {
          lang,
          theme: 'github-dark' // 可以根据需要切换主题
        })
      } catch (e) {
        console.error('Error highlighting code:', e)
        return code
      }
    }
  })
})

const htmlContent = computed(() => {
  if (!md.value) return ''
  return md.value.render(content.value)
})

const handleInput = (e) => {
  content.value = e.target.value
  emit('update:modelValue', content.value)
}
</script>

<template>
<div class="markdown-body h-screen flex flex-col">
    <div class="flex flex-1 overflow-hidden">
      <!-- 编辑区域 -->
      <div class="w-1/2 p-4 border-r border-gray-200">
        <textarea
          v-model="content"
          @input="handleInput"
          class="w-full h-full p-2 outline-none resize-none font-mono"
          placeholder="Write your markdown here..."
        ></textarea>
      </div>

      <!-- 预览区域 -->
      <div class="w-1/2 p-4 overflow-auto">
        <div class="prose max-w-none" v-html="htmlContent"></div>
      </div>
    </div>
  </div>
</template>
