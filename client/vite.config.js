import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";

const envFilePath = path.resolve(process.cwd(), ".env");
dotenv.config({ path: envFilePath });

const port = parseInt(process.env.VITE_PORT, 10) || 3000;
const target =
    process.env.VITE_PRODUCTION_URL || "https://localhost:3001/graphql";
    
export default defineConfig(async ({ mode }) => {
    const plugins = [react()];

    // Only add visualizer in development.
    if (process.env.NODE_ENV === "development") {
        const { visualizer } = await import("rollup-plugin-visualizer");
        plugins.push(visualizer());
    }

    return {
        plugins,
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
    };
});
