<script setup >
import { ref } from 'vue'
import UserInput from './Exp13_Component_Vmodel_Child.vue'

const username = ref('')
</script>

<template>
  <UserInput v-model="username" />
  <p>当前值：{{ username }}</p>
</template>
