require("dotenv").config(); // Load environment variables

const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const compression = require("compression");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [],
});

const app = express();

// Apply middleware before server starts
app.use(compression());
app.use(
    cors({
        origin: [
            "http://localhost:3000",
            process.env.VITE_PRODUCTION_URL,
        ],
        credentials: true,
    })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Start Apollo Server
const startApolloServer = async () => {
    try {
        await server.start();

        // Apply Apollo GraphQL middleware
        app.use("/graphql", expressMiddleware(server));

        // Start the server once DB connection is open
        db.once("open", () => {
            app.listen(PORT, () => {
                console.log(
                    `🚀 Server running on ${
                        process.env.VITE_PRODUCTION_URL ||
                        "http://localhost:3001/graphql"
                    }`
                );
            });
        });
    } catch (err) {
        console.error("Error starting server:", err);
    }
};

startApolloServer();
