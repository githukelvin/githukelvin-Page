<template>
  <div class="min-h-screen py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center space-y-4 mb-16">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            About Me
          </h1>
          <p class="text-lg text-muted-foreground">
            Full-Stack Developer passionate about building impactful solutions
          </p>
        </div>

        <div v-if="portfolioData" class="space-y-16">
          <!-- Summary -->
          <section class="prose prose-lg max-w-none dark:prose-invert">
            <p class="text-lg text-muted-foreground leading-relaxed">
              {{ portfolioData.personalInfo.summary }}
            </p>
          </section>

          <!-- Experience -->
          <section>
            <h2 class="text-2xl sm:text-3xl font-bold mb-8">Professional Experience</h2>
            <div class="space-y-8">
              <div
                v-for="exp in portfolioData.experience"
                :key="exp.company"
                class="border-l-2 border-primary pl-6 space-y-4"
              >
                <div>
                  <h3 class="text-xl font-bold">{{ exp.position }}</h3>
                  <p class="text-muted-foreground font-medium">{{ exp.company }} • {{ exp.period }}</p>
                  <p class="text-sm text-muted-foreground">{{ exp.location }}</p>
                </div>
                <p class="text-muted-foreground">{{ exp.description }}</p>
                <ul class="space-y-2">
                  <li
                    v-for="(achievement, idx) in exp.achievements"
                    :key="idx"
                    class="flex items-start gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-foreground">{{ achievement }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Education -->
          <section>
            <h2 class="text-2xl sm:text-3xl font-bold mb-8">Education</h2>
            <div class="space-y-6">
              <div
                v-for="edu in portfolioData.education"
                :key="edu.degree"
                class="p-6 rounded-lg border border-border bg-card"
              >
                <h3 class="text-xl font-bold mb-2">{{ edu.degree }}</h3>
                <p class="text-muted-foreground font-medium mb-4">
                  {{ edu.institution }} • {{ edu.year }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="course in edu.coursework"
                    :key="course"
                    class="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                  >
                    {{ course }}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <!-- Strengths -->
          <section>
            <h2 class="text-2xl sm:text-3xl font-bold mb-8">Professional Strengths</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="strength in portfolioData.strengths"
                :key="strength"
                class="flex items-center gap-3 p-4 rounded-lg border border-border bg-card"
              >
                <div class="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <span class="font-medium">{{ strength }}</span>
              </div>
            </div>
          </section>

          <!-- Currently Learning -->
          <section>
            <h2 class="text-2xl sm:text-3xl font-bold mb-8">Currently Learning</h2>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="item in portfolioData.currentlyLearning"
                :key="item"
                class="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium"
              >
                {{ item }}
              </span>
            </div>
          </section>

          <!-- CTA -->
          <section class="text-center pt-8">
            <div class="p-8 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
              <h3 class="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm currently available for freelance work and full-time opportunities.
                Let's discuss how I can help bring your project to life.
              </p>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105"
              >
                Get In Touch
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </NuxtLink>
            </div>
          </section>
        </div>

        <!-- Loading -->
        <div v-else class="text-center py-20">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p class="mt-4 text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { portfolioData, fetchPortfolioData } = usePortfolio()

onMounted(async () => {
  await fetchPortfolioData()
})

useHead({
  title: 'About - Kelvin Githu',
  meta: [
    { name: 'description', content: 'Learn more about Kelvin Githu, a Full-Stack Developer specializing in SAP Business One integrations and modern web technologies.' }
  ]
})
</script>
