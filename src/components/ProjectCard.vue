<template>
  <div class="card" :project="project">
    <img :src="project.image" alt="here" class="card__image" />
    <div class="details">
      <h2>{{ project }}</h2>
      <p>{{ project.Desc }}</p>
      <h3>Technologies</h3>
      <ul class="techs" v-for="tech in project.techs" :key="tech.index">
        <li>{{ tech }}</li>
      </ul>
      <div class="btns">
        <a :href="project.live" target="_blank"
          >Live Site
          <img src="../assets/images/new_tab.gif" alt="new tab" />
        </a>
        <a :href="project.github" target="_blank"
          >Github Repo
          <img src="../assets/images/github.gif" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { defineProps } from 'vue';
let project = defineProps({
  title: String,
  image: String,
  Desc: String,
  live: String,
  github: String,
  techs: Array
})
</script>

<style lang="less" scoped></style>
