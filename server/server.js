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
        await server.start();

        app.use(
            cors({
                origin: process.env.FRONTEND_URL || "http://localhost:3000",
                credentials: true,
            })
        );

        app.use(express.urlencoded({ extended: false }));
        app.use(express.json());

        if (process.env.NODE_ENV === "production") {
            app.use(express.static(path.join(__dirname, "../client/dist")));

            app.get("*", (req, res) => {
                res.sendFile(path.join(__dirname, "../client/dist/index.html"));
            });
        }

        // Use Apollo GraphQL middleware
        app.use(
            "/graphql",
            expressMiddleware(server, {
                context: async ({ req }) => ({ req }),
                cors: {
                    origin:
                        process.env.FRONTEND_URL || "https://localhost:3000",
                    credentials: true,
                    allowedHeaders: ["Content-Type", "Authorization"],
                },
            })
        );

        db.once("open", () => {
            app.listen({ port: PORT, host: "0.0.0.0" }, (url) => {
                console.log(`🚀 Server ready at ${url}`);
            });
        });
    } catch (err) {
        console.error("Error starting server:", err); // Corrected error logging
    }
};

startApolloServer();
