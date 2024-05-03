<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import data from '@/data.json'
import { ref } from 'vue';

let projects = ref([])

projects.value.push[data]

const filterProjects = (type) => {
  // projects = type
  const  newData = data.filter((project) => project.category === type)
  console.log(newData)
  return data.filter((project) => project.category === type)
}
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
      <button @click="filterProjects('all')" class="all">All Projects({{ data.length }})</button>
      <button @click="filterProjects('mentor')" class="frontend">
        Frontend Mentor({{ filterProjects('mentor').length }})
      </button>
      <button @click="filterProjects('personal')" class="personalP">
        Personal({{ filterProjects('personal').length }})
      </button>
      <button @click="filterProjects('personal')" class="personalP">
        Work({{ filterProjects('work').length }})
      </button>
      <button @click="filterProjects('ML')" class="ml">
        Machine Learning({{ filterProjects('ML').length }})
      </button>
    </div>
    <p>Find More of my work here <a href="https://github.com/githukelvin" target="_blank">Github</a>
      Or <a href="https://www.frontendmentor.io/profile/githukelvin">Frontend Mentor</a>
    </p>

    <div class="projects">
      <ProjectCard v-for="(project, index) in data" :key="index" :project="project" />

    </div>
  </div>
</template>
