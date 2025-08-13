import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    // Fix React Router refresh issue
    historyApiFallback: true,
  },
  build: {
    // Ensure correct paths for production
    rollupOptions: {
      input: '/index.html',
    },
  },
});
