import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const client = new ApolloClient({
    // Dynamically switch between local and production backend URLs
    uri: process.env.VITE_BACKEND_URL || 'https://your-backend-deployed-url/graphql',
    cache: new InMemoryCache(),
});

function App() {
    const navItems = [
        {
            id: 0,
            name: "About Me",
            route: "/",
        },
        {
            id: 1,
            name: "Projects",
            route: "/projects",
        },
        {
            id: 2,
            name: "Art",
            route: "/art",
        },
        {
            id: 3,
            name: "Blog",
            route: "/blog",
        },
        {
            id: 4,
            name: "Contact Me",
            route: "/contact-me",
        },
    ];
    return (
        <ApolloProvider client={client}>
            <div className="min-h-screen min-w-screen flex flex-col bg-background">
                <Header items={navItems} />
                <main className="flex-grow w-[90%] max-w-7xl mx-auto h-full py-10">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </ApolloProvider>
    );
}

export default App;
