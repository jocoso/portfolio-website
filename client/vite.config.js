//
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";

const envFilePath = path.resolve(process.cwd(), ".env");
const result = dotenv.config({ path: envFilePath });

// Check if environment variables were loaded correctly
if (result.error) {
    console.error("Failed to load .env file", result.error);
}

export default defineConfig({
    plugins: [react(), visualizer()],
    server: {
        port: parseInt(process.env.VITE_PORT, 10) || 3000,
        open: true,
        host: true,
        proxy: {
            "/graphql": {
                target:
                    process.env.VITE_PRODUCTION_URL ||
                    "http://portfolio-website-be-9ohl.onrender.com/graphql",
            },
        },
    },
});
