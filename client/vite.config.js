import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
    return {
        plugins: [react()],
        server: {
            // Set a static port for local development only; omit in production
            port: command === "serve" ? 3000 : undefined,
            open: true,
            host: true,
            proxy: {
                "/graphql": {
                    // Use the production URL if available; otherwise, fallback to localhost
                    target:
                        import.meta.env.VITE_PRODUCTION_URL ||
                        "http://localhost:3001/graphql",
                },
            },
        },
    };
});
