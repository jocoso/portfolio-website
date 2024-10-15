import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";
import { useMemo } from "react";


import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const uri = import.meta.env.VITE_PRODUCTION_URL ||"http://portfolio-website-w0q7.onrender.com/graphql";

// Apollo Client setup
const client = new ApolloClient({
    uri,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    // Example: Normalizes items by their id (adjust this based on your schema)
                    projects: {
                        keyArgs: false,
                        merge(existing = [], incoming) {
                            return [...existing, ...incoming];
                        },
                    },
                },
            },
        },
    }),
});

function App() {
    // Memoize navItems to prevent unnecessary recalculations on each render
    const navItems = useMemo(
        () => [
            { id: 0, name: "About Me", route: "/" },
            { id: 1, name: "Projects", route: "/projects" },
            { id: 2, name: "Art", route: "/art" },
            { id: 3, name: "Blog", route: "/blog" },
            { id: 4, name: "Contact Me", route: "/contact-me" },
        ],
        []
    );

    return (
        <ApolloProvider client={client}>
            <div className="min-h-screen min-w-screen flex flex-col bg-background">
                <Header items={navItems} />
                <main className="flex-grow w-11/12 max-w-7xl mx-auto h-full py-10">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </ApolloProvider>
    );
}

export default App;
