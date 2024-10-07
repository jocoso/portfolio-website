const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
require("dotenv").config();

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001; // Consistent with the .env file
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const app = express();

// Apply CORS globally to allow frontend requests from specified origins
app.use(
    cors({
        origin: [
            "http://localhost:3000", // For local development
            process.env.VITE_PRODUCTION_URL, // For production, the frontend URL (use env variable)
        ],
        credentials: true, // Allow credentials (e.g., cookies, authorization headers)
    })
);

const startApolloServer = async () => {
    try {
        // Start the Apollo server
        await server.start();

        // Body parsing middleware for Express
        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());

        // Apply Apollo GraphQL middleware
        app.use("/graphql", expressMiddleware(server));

        // Connect to the database and start the server
        db.once("open", () => {
            app.listen({ port: PORT, host: "0.0.0.0" }, () => {
                console.log(`🚀 Server running on port ${PORT}`);
            });
        });
    } catch (err) {
        console.error("Error starting server:", err); // Error logging for debugging
    }
};

// Start the Apollo server
startApolloServer();
