import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // If using React
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(), // Remove if not using React
    tailwindcss(),
  ],
});
