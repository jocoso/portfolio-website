import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
    return {
        plugins: [react()],
        server: {
            // Only set port for local development; omit in production
            port: command === 'serve' ? parseInt(import.meta.env.VITE_PORT, 10) || 3000 : undefined,
            open: true,
            host: true,
            proxy: {
                "/graphql": {
                    target: import.meta.env.VITE_PRODUCTION_URL || "http://localhost:3001/graphql",
                },
            },
        },
    };
});
