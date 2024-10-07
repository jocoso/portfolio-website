import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export default defineConfig({
    plugins: [react()],
    server: {
        port: parseInt(process.env.VITE_PORT, 10) || 3000, // Use process.env to access environment variables
        open: true,
        host: true,
        proxy: {
            "/graphql": {
                target: process.env.VITE_PRODUCTION_URL || "https://portfolio-website-be-9ohl.onrender.com/graphql",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
