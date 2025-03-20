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
  </div>
</template>
