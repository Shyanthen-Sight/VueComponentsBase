<script setup>
const firstName = defineModel('firstName', { required: true })
const lastName = defineModel('lastName', { required: true })
</script>

<template>
  <input v-model="firstName" placeholder="名" />
  <input v-model="lastName" placeholder="姓" />
</template>
