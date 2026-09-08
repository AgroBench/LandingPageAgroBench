import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// Project site: https://agrobenc.github.io/LandingPage-AgroBench/
export default defineConfig({
  base: '/LandingPage-AgroBench/',
  plugins: [vue(), tailwindcss()],
})
