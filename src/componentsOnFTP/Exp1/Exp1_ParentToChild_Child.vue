<!-- <template>
  <p>{{ id }}-{{ title }}-{{ name }}</p>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// 声明 props
const props = defineProps({
  id: Number,
  title: String,
})


// 定义响应式数据
const name = ref('张三')
onMounted(() => {
  console.log(props.title)
})
</script> -->
<template>
<p>{{ id }}-{{ title }}-{{ name }}</p>
</template>

<script setup>
import { onMounted,ref } from 'vue'
const props = defineProps({
  id: Number,
  title: String, 
})

const name = ref('张三')
onMounted(() => {
  console.log(props.title)
  console.log(props.id)
})
</script>