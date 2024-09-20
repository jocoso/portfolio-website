import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        postcss: './postcss.config.js'
    },
    server: {
        port: 3000,
        open: true,
        proxy: {
            "/graphql": {
                target: "http://localhost:8000",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
