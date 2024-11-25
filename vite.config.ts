import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Usar import en lugar de require

// Importar Tailwind CSS y Autoprefixer como plugins
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer], // Aquí utilizamos las importaciones
    },
  },
  server: {
    host: true, // Esto permite que Vite use tu dirección IP en lugar de localhost
    port: 5173, // Cambia el puerto si es necesario
  },
});

