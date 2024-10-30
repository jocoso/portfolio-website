//
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";
import { useMemo } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

//
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

console.log("GraphQL URI:", import.meta.env.VITE_PRODUCTION_URL);


// Apollo Client setup.
const createApolloClient = (uri) => {
    return new ApolloClient({
        uri,
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        // Normalizes items by their id.
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
};

function App() {
    // Either get .env production url or go to default localhost.
    const uri = import.meta.env.VITE_PRODUCTION_URL || "http://localhost:3001/graphql";
    // Memoize ApolloClient to avoid re-initialization.
    const client = useMemo(() => createApolloClient(uri), [uri]);
    // Memoize navItems to prevent unnecessary recalculations.
    const navItems = useMemo(
        () => [
            { id: 0, name: "About Me"  , route: '/'           },
            { id: 1, name: "Projects"  , route: "/projects"   },
            { id: 2, name: "Art"       , route: "/art"        },
            { id: 3, name: "Blog"      , route: "/blog"       },
            { id: 4, name: "Contact Me", route: "/contact-me" },
        ],
        []
    );

    return(
        <ApolloProvider client={client}>
            <div className="min-h-screen min-w-screen flex flex-col bg-background">

                {/* Header */}
                <Header items={navItems} />
                
                {/* Content */}
                <main className="flex-grow w-11/12 max-w-7xl mx-auto h-full py-10">
                    <Outlet />
                </main>
                
                {/* Footer */}
                <Footer />

            </div>
        </ApolloProvider>
    );
}

export default App;