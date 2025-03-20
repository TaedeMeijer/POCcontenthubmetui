<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <h1 class="font-bold text-2xl text-(--ui-primary)">
      Nuxt Content Hub UI POC
    </h1>

    <div class="flex items-center gap-2">
      <UBadge class="p-2" label="Vet man"/>

      <UButton
        label="Documentation"
        icon="i-lucide-square-play"
        to="https://ui3.nuxt.dev/getting-started/installation/nuxt"
        target="_blank"
      />

      <UButton
        label="GitHub"
        color="neutral"
        variant="outline"
        icon="i-simple-icons-github"
        to="https://github.com/nuxt/ui"
        target="_blank"
      />
    </div>

    <div class="flex flex-col items-center gap-2">
      <UInput v-model="query" placeholder="Enter your query" />
      <UButton label="AI" @click="sendQuery" />
    </div>

    <div v-if="isLoading" class="text-center">
      <p>AAN HET LADEN MAN JAJAJJAJ</p>
    </div>

    <div v-if="response" class="max-w-2xl text-center" >
      <p>{{ response.response }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

const query = ref('')
const response = ref()
const isLoading = ref(false)

const sendQuery = async () => {
  isLoading.value = true
  const result = await $fetch('/api/ai-test', {
    method: 'POST',
    body: JSON.stringify({ query: query.value }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  response.value = result
  isLoading.value = false
  console.log(result)
}
</script>