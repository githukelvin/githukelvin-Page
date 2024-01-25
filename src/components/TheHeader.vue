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
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
