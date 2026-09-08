import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// Project site: https://agrobenc.github.io/LandingPageAgroBench/
export default defineConfig({
  base: '/LandingPageAgroBench/',
  plugins: [vue(), tailwindcss()],
})
