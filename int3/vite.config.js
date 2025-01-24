import { defineConfig } from 'vite';

export default defineConfig({
    base: '/', // Set this to your repository name
    build: {
        outDir: 'dist', // Output directory
    },
    server: {
        port: 3000, // Optional: Development server port
    },
});