import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env file if it exists
dotenv.config();

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
                    // Use the production URL from dotenv or fallback to localhost
                    target:
                        process.env.VITE_PRODUCTION_URL ||
                        "http://localhost:3001/graphql",
                },
            },
        },
    };
});
