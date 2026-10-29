<template>
  <h2>计数：{{ count }}</h2>
  <h2>双倍计数：{{ dbIncrement }}</h2>
  <h2>watch count的信息:{{ watchMsg }}</h2>
  <h2>生命周期mouted信息:{{ lifeMouted }}</h2>
  <button @click="increment">增加</button>
  <button @click="decrement">减少</button>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
// const decrement = () => {
//   count.value--
// }
function decrement() {
  return count.value--
}

const dbIncrement = computed(() => count.value * 2)

const watchMsg = ref('未改变')
watch(count, (newValue, oldValue) => {
  watchMsg.value = `count从${oldValue}变成了${newValue}`
})

const lifeMouted = ref('未挂载')
onMounted(() => {
  lifeMouted.value = '已挂载'
})
</script>

<style scoped></style>
