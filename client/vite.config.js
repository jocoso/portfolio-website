import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from 'rollup-plugin-visualizer'
import dotenv from "dotenv";
import path from "path";

const envFilePath = path.resolve(process.cwd(), ".env");
const result = dotenv.config({ path: envFilePath });

// Check if environment variables were loaded correctly
if (result.error) {
    console.error("Failed to load .env file", result.error);
}

const productionUrl = process.env.VITE_PRODUCTION_URL;
console.error(productionUrl)

export default defineConfig({
    plugins: [react(), visualizer()],
    server: {
        port: parseInt(process.env.VITE_PORT, 10) || 3001,
        open: true,
        host: true,
        proxy: {
            "/graphql": {
                target:
                    process.env.VITE_PRODUCTION_URL ||
                    "https://portfolio-website-be-9ohl.onrender.com/graphql"
            },
        },
    },
});
