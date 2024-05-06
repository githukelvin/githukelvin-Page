<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import data from '@/data.json'
import { ref } from 'vue'

let projects = ref([...data])
const filterAllJobs = (type) => {
  if(type==='all'){
    projects.value=[...data]
  }
  else{
    const newData = data.filter((project) => project.category === type)
  projects.value = []
  projects.value = [...newData]
  }

}

const filterProjects = (type) => {
  // projects = type

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
      <button @click="filterAllJobs('all')" class="all">All Projects({{ data.length }})</button>
      <button @click="filterAllJobs('mentor')" class="frontend">
        Frontend Mentor({{ filterProjects('mentor').length }})
      </button>
      <button @click="filterAllJobs('personal')" class="personalP">
        Personal({{ filterProjects('personal').length }})
      </button>
      <button @click="filterAllJobs('work')" class="personalP">
        Work({{ filterProjects('work').length }})
      </button>
      <button @click="filterAllJobs('ML')" class="ml">
        Machine Learning({{ filterProjects('ML').length }})
      </button>
    </div>
    <p>
      Find More of my work here
      <a href="https://github.com/githukelvin" target="_blank">Github</a> Or
      <a href="https://www.frontendmentor.io/profile/githukelvin">Frontend Mentor</a>
    </p>

    <div class="projects">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
  </div>
</template>
