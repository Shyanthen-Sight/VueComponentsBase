<template>
  <p>{{ props.title }}-￥{{ props.price }}
    -{{ props.tags }}-{{ props.status==='on'?'上架':'下架' }}</p>
</template>
<script setup>
const props=defineProps({
  title:{type:String,required:true},
  price:{type:Number,default:0},
  tags:{type:Array,default:()=>[]},
  status:{type:String,default:'on'},
})
</script>