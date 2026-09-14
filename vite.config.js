import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'zintle-zinyanga.local',
    port: 5174,
  },
  preview: {
    host: 'zintle-zinyanga.local',
    port: 5174,
  },
})
