import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuración de Vite y sus plugins
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})


