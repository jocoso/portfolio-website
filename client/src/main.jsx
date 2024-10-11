import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Error from "./pages/Error.jsx"; // Static error page



// Lazy load components
const About = lazy(() => import("./pages/About.jsx"));
const Art = lazy(() => import("./pages/Art.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const ContactMe = lazy(() => import("./pages/ContactMe.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const SinglePost = lazy(() => import("./pages/SinglePost.jsx"));
const SingleProject = lazy(() => import("./pages/SingleProject.jsx"));

// Router configuration
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/projects",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Projects />
                    </Suspense>
                ),
            },
            {
                path: "/art",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Art />
                    </Suspense>
                ),
            },
            {
                path: "/blog",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Blog />
                    </Suspense>
                ),
            },
            {
                path: "/contact-me",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ContactMe />
                    </Suspense>
                ),
            },
            {
                path: "/post/:postId",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SinglePost />
                    </Suspense>
                ),
            },
            {
                path: "/projects/:projectId",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SingleProject />
                    </Suspense>
                ),
            },
        ],
    },
]);

// Rendering the application
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
