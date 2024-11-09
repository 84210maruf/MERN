import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Fallback to index.html for React Router
    hmr: true,
    historyApiFallback: true,
  }
})
