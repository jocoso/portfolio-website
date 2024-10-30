import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    const plugins = [react()];

    // Only load `rollup-plugin-visualizer` in development mode
    if (mode === "development") {
        const visualizer = require("rollup-plugin-visualizer");
        plugins.push(visualizer());
    }

    return {
        plugins,
        server: {
            port: parseInt(import.meta.env.VITE_PORT, 10) || 3000,
            open: true,
            host: true,
            proxy: {
                "/graphql": {
                    target:
                        import.meta.env.VITE_PRODUCTION_URL ||
                        "localhost:3001/graphql",
                },
            },
        },
    };
});
