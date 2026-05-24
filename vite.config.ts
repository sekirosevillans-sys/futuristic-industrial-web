import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/futuristic-industrial-web/',
  plugins: [react()],
  server: {
    allowedHosts: true,
  }
})
