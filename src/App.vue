<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div>
    <TheHeader />
    <div class="router">
      <router-view></router-view>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
div {
  overflow-x: hidden;
  height: fit-content;
  @media (max-width: 575.98px){
    height: 100%;
  }
}
.router {
  margin-top: 5em;
}
</style>
