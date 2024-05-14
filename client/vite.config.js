import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api":{
        target: "https://fullstack-backend-black.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/ , "/api"),
      },
    },
  },
  plugins: [react()],
})
