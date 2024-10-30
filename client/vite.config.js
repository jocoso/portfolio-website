import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        port: parseInt(process.env.VITE_PORT, 10) || 3000,
        open: true,
        host: true,
        proxy: {
            "/graphql": {
                target: import.meta.env.VITE_PRODUCTION_URL || "http://portfolio-website-be-9ohl.onrender.com/graphql",
            },
        },
    },
});
