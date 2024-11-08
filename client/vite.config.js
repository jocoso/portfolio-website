import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import visualizer from "rollup-plugin-visualizer";
import dotenv from "dotenv";
import path from "path";

const envFilePath = path.resolve(process.cwd(), ".env");
const result = dotenv.config({ path: envFilePath });

const port = parseInt(process.env.VITE_PORT, 10) || 3000;
const target =
    process.env.VITE_PRODUCTION_URL || "https://localhost:3001/graphql";

// Check if environment variables were loaded correctly
if (result.error) {
    console.error("Failed to load .env file", result.error);
}

export default defineConfig({
    plugins: [react(), visualizer()],
    server: {
        port,
        open: true,
        host: true,
        proxy: {
            "/graphql": {
                target,
            },
        },
    },
});
