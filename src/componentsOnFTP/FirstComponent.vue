<template>
  <h2>{{ msg }}</h2>
  <input type="text" v-model="msg" />
</template>

<script setup>
import { ref } from 'vue'

// 直接定义响应式数据，无需 return，自动暴露给模板
const msg = ref('连雨不知春去，一晴方觉夏深。')
</script>

<style scoped></style>
