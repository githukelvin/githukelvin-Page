<template>
  <div class="card" :project="project">
    <img :src="project.image" :alt="project.title" class="card__image" />
    <div class="details">
      <h2>{{ project.title }}</h2>
      <p>{{ project.Desc }}</p>
      <h3>Technologies</h3>
      <ul class="techs">
        <li  v-for="tech in project.techs" :key="tech.index">
        {{ tech }}
        </li>
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
<script >
export default {
  props:{
    project:{
      type:Object,
      required:true
    },


  }
}
// let project = defineProps({

// })
</script>

<style lang="less" scoped></style>
