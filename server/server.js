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

// Apply middleware
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const corsOptions = {
    origin: ["http://localhost:3000", process.env.VITE_PRODUCTION_URL],
    credentials: true,
};

app.use(cors(corsOptions));

// Start Apollo Server and apply middleware
const startApolloServer = async () => {
    try {
        await server.start();

        // Apply Apollo GraphQL middleware with CORS
        app.use("/graphql", expressMiddleware(server, { cors: corsOptions }));

        // Start the server on the specified port
        app.listen(PORT, () => {
            console.log(
                `🚀 Server running on ${
                    process.env.VITE_PRODUCTION_URL ||
                    `http://localhost:${PORT}/graphql`
                }`
            );
        });

        // Connect to the database
        db.once("open", () => {
            console.log("Connected to the database successfully");
        });
    } catch (err) {
        console.error("Error starting server:", err);
    }
};

startApolloServer();
