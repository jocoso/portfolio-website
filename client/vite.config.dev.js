// vite.config.dev.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// Define development-specific config with visualizer plugin
export default defineConfig({
    plugins: [react(), visualizer()],
    server: {
        port: parseInt(import.meta.env.VITE_PORT, 10) || 3000,
        open: true,
        host: true,
        proxy: {
            "/graphql": {
                target: import.meta.env.VITE_PRODUCTION_URL || "http://portfolio-website-be-9ohl.onrender.com/graphql",
            },
        },
    },
});
