import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home Page" */ '@/views/HomePage.vue'),
    meta: {
      pageTitle: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "About Page" */ '@/views/AboutPage.vue'),
    meta: {
      pageTitle: 'About'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "Contact Page" */ '@/views/ContactPage.vue'),
    meta: {
      pageTitle: 'About'
    }
  },
  {
    path: '/project',
    name: 'project',
    component: () => import(/* webpackChunkName: "Project Page" */ '@/views/ProjectPage.vue'),
    meta: {
      pageTitle: 'Project'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to) => {
  // current page view title
  document.title = `GK -${to.meta.pageTitle} `
})
export default router
