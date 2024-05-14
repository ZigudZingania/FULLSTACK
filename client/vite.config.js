import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  
  // ONLY FOR DEVELOPMENT PURPOSE
  // server: {
  //   proxy: {
  //     "/api": "https://fullstack-backend-black.vercel.app",
  //   },
  // },
  plugins: [react()],
});
