<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <!-- Subtle animated background -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-background dark:from-primary-950/20 dark:via-background dark:to-background"></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <!-- Greeting -->
          <div class="animate-fade-in space-y-4">
            <p class="text-muted-foreground text-lg">Hi, I'm</p>
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Kelvin Githu
            </h1>
          </div>

          <!-- Typing Animation -->
          <div class="animate-slide-up" style="animation-delay: 0.2s; opacity: 0;">
            <div class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground min-h-[3rem] flex items-center justify-center">
              <span ref="typingText" class="font-mono"></span>
              <span class="animate-pulse ml-1">|</span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style="animation-delay: 0.4s; opacity: 0;">
            Full-Stack Developer specializing in <span class="text-foreground font-semibold">SAP Business One integrations</span>,
            <span class="text-foreground font-semibold">Vue.js</span>, and enterprise solutions.
            Building scalable applications that solve real-world problems.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style="animation-delay: 0.6s; opacity: 0;">
            <NuxtLink
              to="/projects"
              class="group inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
            >
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>

            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-foreground bg-secondary rounded-lg hover:bg-secondary/80 transition-all duration-200"
            >
              Get In Touch
            </NuxtLink>
          </div>

          <!-- Scroll Indicator -->
          <div class="pt-12 animate-fade-in" style="animation-delay: 0.8s; opacity: 0;">
            <div class="flex flex-col items-center gap-2 text-muted-foreground">
              <span class="text-sm">Scroll to explore</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 animate-bounce">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-20 bg-secondary/30">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center space-y-4 mb-16">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcase of my recent work in enterprise integrations, web applications, and mobile development
            </p>
          </div>

          <!-- Projects Grid -->
          <div v-if="featuredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              v-for="project in featuredProjects"
              :key="project.name"
              :project="project"
            />
          </div>

          <!-- Loading State -->
          <div v-else-if="loading" class="text-center py-12">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p class="mt-4 text-muted-foreground">Loading projects...</p>
          </div>

          <!-- View All Projects Link -->
          <div class="text-center mt-12">
            <NuxtLink
              to="/projects"
              class="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              View all projects
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center space-y-4 mb-16">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Technical Expertise
            </h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build modern applications
            </p>
          </div>

          <div v-if="portfolioData" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Frontend -->
            <div class="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
                Frontend
              </h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in portfolioData.skills.frontend.frameworks.slice(0, 4)" :key="tech" class="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Backend -->
            <div class="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                </svg>
                Backend
              </h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in portfolioData.skills.backend.frameworks.slice(0, 4)" :key="tech" class="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Enterprise -->
            <div class="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
                Enterprise
              </h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in portfolioData.skills.enterpriseIntegration.sapBusinessOne.slice(0, 3)" :key="tech" class="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Tools -->
            <div class="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
                Tools
              </h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in portfolioData.skills.devOps.tools.slice(0, 4)" :key="tech" class="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <div class="text-center mt-12">
            <NuxtLink
              to="/about"
              class="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Learn more about me
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { portfolioData, loading, fetchPortfolioData, getFeaturedProjects } = usePortfolio()
const typingText = ref<HTMLElement>()

const roles = [
  'Full-Stack Developer',
  'SAP B1 Specialist',
  'Vue.js Expert',
  'Laravel Developer',
  'Enterprise Solutions Architect'
]

let currentRoleIndex = 0
let currentCharIndex = 0
let isDeleting = false
let typingSpeed = 100

const type = () => {
  const currentRole = roles[currentRoleIndex]

  if (isDeleting) {
    currentCharIndex--
    typingSpeed = 50
  } else {
    currentCharIndex++
    typingSpeed = 100
  }

  if (typingText.value) {
    typingText.value.textContent = currentRole.substring(0, currentCharIndex)
  }

  if (!isDeleting && currentCharIndex === currentRole.length) {
    typingSpeed = 2000
    isDeleting = true
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false
    currentRoleIndex = (currentRoleIndex + 1) % roles.length
    typingSpeed = 500
  }

  setTimeout(type, typingSpeed)
}

const featuredProjects = computed(() => getFeaturedProjects(6))

onMounted(async () => {
  await fetchPortfolioData()
  setTimeout(() => type(), 1000)
})
</script>
