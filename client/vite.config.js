import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: import.meta.env.VITE_PORT || 3000,
        open: true,
        host: true,
        // Important for MERN Setup: Here we're establishing a relationship between our two development servers.
        // We are pointing our Vite client-side development server to proxy API requests to our server-side Node server at port 3001.
        // Without this line, API calls would attempt to query for data from the current domain: localhost:3000
        proxy: {
            "/graphql": {
                target:
                    import.meta.env.VITE_API_URL ,
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
