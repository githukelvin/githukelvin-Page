<template>
  <div class="min-h-screen py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="project" class="max-w-4xl mx-auto">
        <!-- Back Button -->
        <NuxtLink
          to="/projects"
          class="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Projects
        </NuxtLink>

        <!-- Project Header -->
        <div class="space-y-6 mb-12">
          <div class="flex flex-wrap gap-3 items-center">
            <span class="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg">
              {{ project.type }}
            </span>
            <span class="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-lg">
              {{ project.company }}
            </span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {{ project.name }}
          </h1>

          <p class="text-xl text-muted-foreground">
            {{ project.description }}
          </p>

          <!-- Links -->
          <div class="flex flex-wrap gap-4 pt-4">
            <a
              v-if="project.demo"
              :href="project.demo.startsWith('http') ? project.demo : `https://${project.demo}`"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Live Demo
            </a>
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground bg-secondary rounded-lg hover:bg-secondary/80 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source
            </a>
          </div>
        </div>

        <!-- Project Details Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Features -->
            <section v-if="project.features && project.features.length > 0">
              <h2 class="text-2xl font-bold mb-4">Key Features</h2>
              <div class="space-y-3">
                <div
                  v-for="(feature, index) in project.features"
                  :key="index"
                  class="flex items-start gap-3 p-4 rounded-lg border border-border bg-card"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-foreground">{{ feature }}</span>
                </div>
              </div>
            </section>

            <!-- Modules (for SAP projects) -->
            <section v-if="project.modules && project.modules.length > 0">
              <h2 class="text-2xl font-bold mb-4">Modules</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  v-for="(module, index) in project.modules"
                  :key="index"
                  class="p-4 rounded-lg border border-border bg-card"
                >
                  <p class="font-medium text-foreground">{{ module }}</p>
                </div>
              </div>
            </section>

            <!-- Impact -->
            <section>
              <h2 class="text-2xl font-bold mb-4">Impact</h2>
              <div class="p-6 rounded-lg border border-primary/20 bg-primary/5">
                <p class="text-lg text-foreground">{{ project.impact }}</p>
              </div>
            </section>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Technologies -->
            <div class="p-6 rounded-lg border border-border bg-card">
              <h3 class="text-lg font-semibold mb-4">Technologies Used</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-3 py-2 text-sm font-mono bg-secondary text-secondary-foreground rounded-lg"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Project Info -->
            <div class="p-6 rounded-lg border border-border bg-card space-y-4">
              <h3 class="text-lg font-semibold">Project Details</h3>
              <div class="space-y-3 text-sm">
                <div>
                  <p class="text-muted-foreground mb-1">Company</p>
                  <p class="font-medium text-foreground">{{ project.company }}</p>
                </div>
                <div>
                  <p class="text-muted-foreground mb-1">Project Type</p>
                  <p class="font-medium text-foreground">{{ project.type }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- More Projects -->
        <div class="mt-16 pt-16 border-t border-border">
          <h2 class="text-2xl font-bold mb-8">More Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              v-for="relatedProject in relatedProjects"
              :key="relatedProject.name"
              :project="relatedProject"
            />
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else-if="pending" class="max-w-4xl mx-auto text-center py-20">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p class="mt-4 text-muted-foreground">Loading project...</p>
      </div>

      <!-- Not Found -->
      <div v-else class="max-w-4xl mx-auto text-center py-20">
        <h1 class="text-3xl font-bold mb-4">Project Not Found</h1>
        <p class="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
        <NuxtLink
          to="/projects"
          class="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all"
        >
          Browse All Projects
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { portfolioData, fetchPortfolioData } = usePortfolio()

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

const pending = ref(true)

const project = computed(() => {
  if (!portfolioData.value || !route.params.slug) return null

  return portfolioData.value.projects.find(
    (p) => slugify(p.name) === route.params.slug
  )
})

const relatedProjects = computed(() => {
  if (!portfolioData.value || !project.value) return []

  return portfolioData.value.projects
    .filter((p) => p.name !== project.value?.name)
    .slice(0, 2)
})

onMounted(async () => {
  await fetchPortfolioData()
  pending.value = false
})

useHead(() => ({
  title: project.value ? `${project.value.name} - Kelvin Githu` : 'Project - Kelvin Githu',
  meta: [
    {
      name: 'description',
      content: project.value?.description || 'View project details'
    }
  ]
}))
</script>
