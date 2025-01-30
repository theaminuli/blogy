import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'; // If using React
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		react(), // Remove if not using React
		tailwindcss(),
	],
	server: {
		proxy: {
			'/api': 'http://localhost:3000'
		}
	}
});
