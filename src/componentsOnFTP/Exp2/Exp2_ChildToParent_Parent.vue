<template>
  <Child @update="onUpdate" @delete="onDelete" />
</template>

<script setup>

import Child from './Exp2_ChildToParent_Child.vue'

// 接收子组件 update 事件，val 就是子传过来的 123
const onUpdate = (val) => {
  console.log('收到子组件update：', val)
}

// 接收 delete 事件（不带参数）
const onDelete = () => {
  console.log('收到子组件delete事件')
}
</script>
