import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Production/static Vite config. Base44 generation/plugin runtime has been removed.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
