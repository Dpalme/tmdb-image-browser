import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import { fileURLToPath } from 'url';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'),
      '@shared': path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        './src/shared'
      ),
      '@assets': path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        './src/assets'
      ),
    },
  },
});
