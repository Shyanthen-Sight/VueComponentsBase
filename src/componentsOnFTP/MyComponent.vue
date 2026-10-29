<script setup>
import { ref } from 'vue'

// 直接定义响应式数据，无需 return，自动暴露给模板
const msg = ref('连雨不知春去，一晴方觉夏深。')
</script>

<template>
  <h3>{{ msg }}</h3>
</template>
