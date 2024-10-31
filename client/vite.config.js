import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        // Use import.meta.env.VITE_PORT with a fallback for local development
        port: parseInt(import.meta.env.VITE_PORT, 10) || 3000,
        open: true,
        host: true,
        proxy: {
            "/graphql": {
                target: import.meta.env.VITE_PRODUCTION_URL || "http://localhost:3001/graphql",
            },
        },
    },
});
