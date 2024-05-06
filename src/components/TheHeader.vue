<template>
  <div class="wrapper header">
    <div class="container">
      <div class="nav">
        <div class="nav__logo">
          <router-link class="logo" to="/">
            <img src="../assets/images/githu_3.png" alt="logo" />
            <h1>Githukelvin</h1>
          </router-link>
        </div>

        <div class="nav__menu">
          <ul>
            <li>
              <router-link class="link" to="/">Home</router-link>
            </li>
            <li>
              <router-link class="link" to="/about">About</router-link>
            </li>
            <li>
              <router-link class="link" to="/project">Projects</router-link>
            </li>
            <li>
              <router-link class="link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
        <div @click="toggleClass" :class="{ active: istoggled }" class="ham"></div>
      </div>
    </div>
  </div>
  <div class="mmenu" :class="{ active: istoggled }">
    <ul>
      <li>
        <router-link class="link" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="link" to="/about">About</router-link>
      </li>
      <li>
        <router-link class="link" to="/project">Projects</router-link>
      </li>
      <li>
        <router-link class="link" to="/contact">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
let istoggled = ref(false)

function toggleClass() {
  istoggled.value = !istoggled.value
}
// onclick update istoggled
watch(istoggled, (newValue) => {
  if (newValue) {
    istoggled.value = newValue
  }
})
</script>

<style lang="scss" scoped></style>
