import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from `.env` file
dotenv.config();

export default defineConfig({
    plugins: [react()],
    server: {
        port: process.env.VITE_PORT || 3000, // Use process.env in the config for Node context
        open: true,
        host: true,
        proxy: {
            "/graphql": {
                target: process.env.VITE_API_URL, // Use process.env for backend API URL
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
