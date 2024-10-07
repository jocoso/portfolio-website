const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001; // Consistent with the .env file
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const app = express();

const startApolloServer = async () => {
    try {
        // Start the Apollo server
        await server.start();

        // Apply CORS middleware globally
        app.use(cors({
            origin: process.env.VITE_PRODUCTION_URL,
            credentials: true
        }));

        // Body parsing middleware
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
        console.error("Error starting server:", err); // Error logging
    }
};

// Start the Apollo server
startApolloServer();
