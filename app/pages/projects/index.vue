<template>
  <div class="min-h-screen py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center space-y-4 mb-12">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            All Projects
          </h1>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive collection of my work spanning enterprise integrations, web applications, and mobile development
          </p>
        </div>

        <!-- Filters -->
        <div class="flex flex-wrap gap-3 justify-center mb-12">
          <button
            v-for="category in categories"
            :key="category.value"
            @click="selectedCategory = category.value"
            :class="[
              'px-6 py-2 rounded-lg font-medium transition-all duration-200',
              selectedCategory === category.value
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            ]"
          >
            {{ category.label }}
            <span class="ml-2 text-sm opacity-70">
              ({{ getProjectCount(category.value) }})
            </span>
          </button>
        </div>

        <!-- Projects Grid -->
        <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.name"
            :project="project"
          />
        </div>

        <!-- No Projects -->
        <div v-else-if="!loading" class="text-center py-20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 mx-auto text-muted-foreground mb-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
          <h3 class="text-xl font-semibold mb-2">No projects found</h3>
          <p class="text-muted-foreground">Try selecting a different category</p>
        </div>

        <!-- Loading -->
        <div v-else class="text-center py-20">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p class="mt-4 text-muted-foreground">Loading projects...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { portfolioData, loading, fetchPortfolioData } = usePortfolio()
const selectedCategory = ref('all')

const categories = [
  { label: 'All Projects', value: 'all' },
  { label: 'Professional', value: 'Leysco' },
  { label: 'Personal', value: 'Personal' },
  { label: 'Enterprise', value: 'Enterprise' },
  { label: 'Mobile', value: 'Mobile' },
]

const filteredProjects = computed(() => {
  if (!portfolioData.value) return []

  if (selectedCategory.value === 'all') {
    return portfolioData.value.projects
  }

  return portfolioData.value.projects.filter(project => {
    if (selectedCategory.value === 'Leysco') {
      return project.company === 'Leysco'
    }
    if (selectedCategory.value === 'Personal') {
      return project.company.includes('Personal') || project.company.includes('Business')
    }
    if (selectedCategory.value === 'Enterprise') {
      return project.type.includes('Enterprise') || project.type.includes('Integration')
    }
    if (selectedCategory.value === 'Mobile') {
      return project.type.includes('Mobile') || project.technologies.some(tech =>
        tech.toLowerCase().includes('react native') || tech.toLowerCase().includes('expo')
      )
    }
    return true
  })
})

const getProjectCount = (category: string) => {
  if (!portfolioData.value) return 0

  if (category === 'all') {
    return portfolioData.value.projects.length
  }

  return portfolioData.value.projects.filter(project => {
    if (category === 'Leysco') return project.company === 'Leysco'
    if (category === 'Personal') return project.company.includes('Personal') || project.company.includes('Business')
    if (category === 'Enterprise') return project.type.includes('Enterprise') || project.type.includes('Integration')
    if (category === 'Mobile') return project.type.includes('Mobile') || project.technologies.some(tech =>
      tech.toLowerCase().includes('react native') || tech.toLowerCase().includes('expo')
    )
    return true
  }).length
}

onMounted(async () => {
  await fetchPortfolioData()
})

useHead({
  title: 'Projects - Kelvin Githu',
  meta: [
    { name: 'description', content: 'Explore my portfolio of enterprise integrations, web applications, and mobile development projects.' }
  ]
})
</script>
