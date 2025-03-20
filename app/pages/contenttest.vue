<script setup lang="ts">
const { data: content } = await useAsyncData(() => queryCollection('content').path('/contenttest').first())

useSeoMeta({
  title: content.value?.title,
  description: content.value?.description
})
</script>

<template>
  <ContentRenderer v-if="content" :value="content" />
  <div v-else>Content not found</div>
</template>