<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <div class="router">
    <router-view></router-view>
  </div>
  <TheFooter />
</template>

<style scoped lang="scss">
.router {
  margin-top: 5em;
  @media (max-width: 575.98px) {
    margin-top: 6em;
  }
}
</style>
