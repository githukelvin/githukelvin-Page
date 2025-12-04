<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-1 pt-16">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
// Layout logic here if needed
</script>
