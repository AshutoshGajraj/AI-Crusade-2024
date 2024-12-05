import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: false, // Disable automatic browser opening
    port: 5173,
    host: true, // Expose to all network interfaces
  },
  preview: {
    port: 5173,
    open: false, // Disable automatic browser opening
  },
})