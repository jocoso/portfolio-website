import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        postcss: "./postcss.config.js",
    },
    server: {
        port: 3000, // Vite dev server port
        open: true, // Automatically open the browser on server start
        proxy: {
            "/graphql": {
                target: "http://localhost:3001", // Correct GraphQL server port
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
