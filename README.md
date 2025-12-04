# Kelvin Githu - Modern Portfolio Website

A modern, professional, and minimalist portfolio website built with Nuxt 3, Tailwind CSS v4, and TypeScript.

## 🌟 Features

- ✨ **Modern Stack**: Nuxt 3, Vue 3 Composition API, TypeScript
- 🎨 **Minimalist Design**: Clean, professional, content-focused
- 📱 **Fully Responsive**: Mobile-first responsive design
- 🌙 **Dark Mode**: System preference detection with manual toggle
- 🎭 **Smooth Animations**: Typing effects, scroll animations, hover effects
- ⚡ **Performance**: SSR/SSG optimized for speed
- 🔍 **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- 🎯 **Type-Safe**: Full TypeScript support

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## 📁 Project Structure

```
portfolio-site/
├── app/
│   ├── assets/css/      # Global styles and Tailwind CSS
│   ├── components/      # Vue components (Header, Footer, ProjectCard)
│   ├── composables/     # Vue composables (usePortfolio)
│   ├── layouts/         # Layout templates
│   ├── pages/           # File-based routing pages
│   └── app.vue          # Root app component
├── public/              # Static assets & portfolio data
├── types/               # TypeScript type definitions
└── nuxt.config.ts       # Nuxt configuration
```

## 🎨 Customization

### Update Portfolio Content

Edit `/public/portfolio_data.json` to update your information, projects, skills, and experience.

### Change Colors

Modify `app/assets/css/main.css` to update the `@theme` CSS variables for light and dark mode colors.

### Add New Pages

Create a new `.vue` file in `app/pages/` directory - file name becomes the route.

## 🚀 Deployment

### Netlify
```toml
# netlify.toml
[build]
  command = "npm run generate"
  publish = ".output/public"
```

### Vercel
Auto-detected - just connect your repository.

### Static Hosting
Run `npm run generate` and deploy the `.output/public` directory.

## 🛠️ Tech Stack

- **Framework**: Nuxt 3
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Color Mode**: @nuxtjs/color-mode
- **Utilities**: VueUse
- **Icons**: Heroicons (SVG)

## 👤 Author

**Kelvin Githu**
- Portfolio: [githukelvin.tech](https://githukelvin.tech)
- GitHub: [@githukelvin](https://github.com/githukelvin)
- Email: kelvingithu019@gmail.com

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ using modern web technologies
