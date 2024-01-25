import { fileURLToPath, URL } from 'node:url'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [
      vue(),
    ViteImageOptimizer({
         png: {
    // https://sharp.pixelplumbing.com/api-output#png
    quality: 70,
  },
  jpeg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 70,
  },
  jpg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 70,
  },
      }),
  ],
  define: {
    __APP_VERSION__: JSON.stringify('v1.0.0')
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
