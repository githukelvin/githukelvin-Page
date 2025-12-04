<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span class="text-foreground">GK</span><span class="text-muted-foreground">.</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative"
            :class="{ 'text-foreground after:absolute after:bottom-[-1.5rem] after:left-0 after:right-0 after:h-0.5 after:bg-primary': $route.path === link.href || (link.href === '/' && $route.path === '/') || (link.href === '/projects' && $route.path.startsWith('/projects')) }"
          >
            {{ link.label }}
          </NuxtLink>

          <!-- Dark Mode Toggle -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle dark mode"
          >
            <svg
              v-if="colorMode === 'dark'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-1"
      >
        <div v-if="isMenuOpen" class="md:hidden py-4 border-t border-border/40">
          <div class="flex flex-col space-y-4">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.href"
              :to="link.href"
              class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-lg"
              :class="{ 'text-foreground bg-primary/10': $route.path === link.href || (link.href === '/' && $route.path === '/') || (link.href === '/projects' && $route.path.startsWith('/projects')) }"
              @click="closeMenu"
            >
              {{ link.label }}
            </NuxtLink>

            <button
              @click="toggleDarkMode"
              class="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-fit"
            >
              <span>{{ colorMode === 'dark' ? 'Light Mode' : 'Dark Mode' }}</span>
            </button>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Close menu on route change
watch(
  () => useRoute().path,
  () => {
    closeMenu()
  }
)
</script>
