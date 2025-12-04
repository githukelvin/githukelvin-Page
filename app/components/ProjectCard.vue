<template>
  <NuxtLink
    :to="`/projects/${slugify(project.name)}`"
    class="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
  >
    <!-- Project Type Badge -->
    <div class="absolute top-4 right-4 z-10">
      <span class="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full backdrop-blur-sm">
        {{ project.type }}
      </span>
    </div>

    <!-- Content -->
    <div class="p-6 space-y-4">
      <!-- Title -->
      <h3 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors pr-8">
        {{ project.name }}
      </h3>

      <!-- Company -->
      <p class="text-sm text-muted-foreground font-medium">
        {{ project.company }}
      </p>

      <!-- Description -->
      <p class="text-sm text-muted-foreground line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies.slice(0, 4)"
          :key="tech"
          class="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded"
        >
          {{ tech }}
        </span>
        <span
          v-if="project.technologies.length > 4"
          class="px-2 py-1 text-xs font-mono text-muted-foreground"
        >
          +{{ project.technologies.length - 4 }}
        </span>
      </div>

      <!-- Impact -->
      <div class="pt-4 border-t border-border">
        <p class="text-xs text-muted-foreground font-medium mb-2">Impact:</p>
        <p class="text-sm text-foreground line-clamp-2">{{ project.impact }}</p>
      </div>
    </div>

    <!-- Hover Effect Border -->
    <div class="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>

    <!-- View Project Arrow -->
    <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <div class="flex items-center gap-1 text-xs font-medium text-primary">
        View Details
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 group-hover:translate-x-1 transition-transform">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from '~/types/portfolio'

defineProps<{
  project: Project
}>()

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}
</script>
