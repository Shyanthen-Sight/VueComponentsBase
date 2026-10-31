<!-- Child.vue -->
<script setup>
const emit = defineEmits(['update', 'delete'])

function handleClick() {
  emit('update', 123)          // 触发 update 事件，携带参数 123
}

function handleDelete() {
  emit('delete')
}
</script>

<template>
  <button @click="handleClick">更新</button>
  <button @click="handleDelete">删除</button>
</template>