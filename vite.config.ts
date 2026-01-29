import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        // Generate manifest.json for PWA or metadata analysis if needed (optional)
        manifest: true,
    }
});
