<template>
  <div class="card">
    <img :src="project.image" alt="here" class="card__image" />
    <div class="details">
      <h2>{{project.title }}</h2>
      <p> {{ project.description }} </p>
      <h3>Technologies</h3>
      <ul class="techs" v-for="tech in project.techs" :key="tech.index">
        <li>{{ tech }}</li>

      </ul>
      <div class="btns">
        <router-link target="_blank" :to="project.live">Live Site
          <img src="../assets/images/new_tab.gif" alt="new tab"/>
        </router-link>
          <router-link target="_blank" :to="project.github">Github Repo
            <img src="../assets/images/github.gif" alt="">
          </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
let project =defineProps({
  github:String,
  live:String,
  image:String,
  title:String,
  description:String,
  techs:Array

})
</script>

<style lang="less" scoped></style>
