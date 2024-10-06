const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001; // Consistent with the .env file
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startApolloServer = async () => {
    try {
        await server.start();

        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());
        app.use(cors({
            origin: process.env.FRONTEND_URL || 'http://localhost:3000',
            credentials: true,
        }));
        if (process.env.NODE_ENV === "production") {
            app.use(express.static(path.join(__dirname, "../client/dist")));

            app.get("*", (req, res) => {
                res.sendFile(path.join(__dirname, "../client/dist/index.html"));
            });
        }

        // Use Apollo GraphQL middleware
        app.use("/graphql", expressMiddleware(server));

        db.once("open", () => {
            app.listen(PORT, () => {
                console.log(`API server running on port ${PORT}`);
                console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
            });
        });
    } catch (err) {
        console.error("Error starting server:", err); // Corrected error logging
    }
};

startApolloServer();
