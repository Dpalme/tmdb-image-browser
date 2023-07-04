import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import { fileURLToPath } from 'url';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), WindiCSS()],
    server: {
      open: true,
      base: env.BASE_URL,
    },
    resolve: {
      alias: {
        '@': path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          './src'
        ),
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
    base: env.BASE_URL || '',
  };
});
