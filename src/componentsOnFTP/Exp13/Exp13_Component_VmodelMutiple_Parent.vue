<script setup>
import { ref } from 'vue'
import UserName from './Exp13_Component_VmodelMutiple_Child.vue'

const first = ref('John')
const last = ref('Doe')
</script>

<template>
  <!-- kebab-case 会自动映射到子组件的 camelCase 名称 -->
  <UserName v-model:first-name="first" v-model:last-name="last" />
  <p>全名：{{ first }} {{ last }}</p>

  <!--
    <UserName v-model:first-name="first" />
    正确，会自动映射到子组件的 camelCase 'firstName'

    <UserName v-model:FirstName="first" />
    错误，大小写会被规范化导致不匹配

    Vue 官方推荐且保证生效的写法是使用 kebab-case（短横线分隔）
    为了兼容性和遵循 HTML 规范，
    具名 v-model 的参数务必统一使用 kebab-case 来对应子组件的 camelCase 命名。
--></template>
