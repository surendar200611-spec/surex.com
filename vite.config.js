import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: './', // Use relative paths for built assets
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        reviews: resolve(__dirname, 'reviews.html'),
        'dolfin-xerox': resolve(__dirname, 'dolfin-xerox.html'),
        lumina: resolve(__dirname, 'lumina.html')
      }
    }
  }
});
