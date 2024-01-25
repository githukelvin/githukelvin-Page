<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import data from '@/data.json';
console.log(data[0].live)
</script>

<template>
  <div class="vid">
    <video autoplay loop muted src="../assets/images/githu_video.mp4"></video>
    <div class="info">
      <h1>Welcome to Project section</h1>
      <p>Here is all My work</p>
      <img src="../assets/images/mouse.gif" alt="mouse" />
    </div>
  </div>
  <div class="container">
    <div class="bar">
      <button class="all">All Projects({{ data.length }})</button>
      <button class="frontend">Frontend Mentor(2)</button>
      <button class="personalP">Personal(2)</button>
      <button class="ml">Machine Learning(2)</button>
    </div>
    <div class="projects" >
      <ProjectCard v-for="project in data" :key="project.category" :project="project" />
    </div>
  </div>
</template>
