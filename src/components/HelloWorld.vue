<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h3>{{ msg }}</h3>
  <van-button type="primary" @click="count++">按钮 {{ count }}</van-button>
</template>

<style scoped>

</style>
