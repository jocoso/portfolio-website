import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
    plugins: [react()],
    server: {
        port: import.meta.env.VITE_PORT || 3000,
        open: true,
        host: true,
        proxy: {
            "/graphql": {
                target: import.meta.env.VITE_API_URL || "http://localhost:3001",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
