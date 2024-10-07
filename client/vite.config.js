import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export default defineConfig({
    plugins: [react()],
    server: {
        port: parseInt(import.meta.env.VITE_PORT, 10) || 3000, // Fallback to 3000 if VITE_PORT is undefined
        open: true,
        host: true,
        proxy: {
            "/graphql": {
                target: import.meta.env.VITE_PRODUCTION_URL || "https://portfolio-website-be-9ohl.onrender.com/graphql",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
