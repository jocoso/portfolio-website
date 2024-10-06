import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        postcss: "./postcss.config.js",  // Ensure correct path to PostCSS config
    },
    server: {
        port: 3000,  // Vite development server port
        open: true,  // Automatically open the browser on server start
        proxy: {
            "/graphql": {
                target: "http://localhost:3001",  // Proxy for GraphQL server during development
                changeOrigin: true,
                secure: false,
            },
        },
    },
    // Build configuration, ensuring correct output and optimized bundle
    build: {
        outDir: "dist",  // Build output directory
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom"],  // Split out vendor code for better caching
                },
            },
        },
    },
    // Preview configuration for testing production build locally
    preview: {
        port: 5000, // Port for preview server (adjust as necessary)
    },
    resolve: {
        alias: {
            '@': '/src',  // Aliases for cleaner imports (optional)
        },
    },
});
