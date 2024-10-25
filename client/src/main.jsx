//
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// 
import App from "./App";
import Error from "./pages/Error";

// Load in the background.
const lazyLoad = (Component) => (
    <Suspense fallback={<div>loading...</div>}>
        <Component />
    </Suspense>
);

// Importing Pages...
const About         = lazy(() => import("./pages/About"));
const Projects      = lazy(() => import("./pages/Projects"));
const Art           = lazy(() => import("./pages/Art"));
const Blog          = lazy(() => import("./pages/Blog"));
const ContactMe     = lazy(() => import("./pages/ContactMe"));
const Login         = lazy(() => import("./pages/Login"));
const SinglePost    = lazy(() => import("./pages/SinglePost"));
const SingleProject = lazy(() => import("./pages/SingleProject"));

// Router configuration
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: lazyLoad(About),
            },
            {
                path: "/projects",
                element: lazyLoad(Projects),
            },
            {
                path: "/art",
                element: lazyLoad(Art),
            },
            {
                path: "/blog",
                element: lazyLoad(Blog),
            },
            {
                path: "/contact-me",
                element: lazyLoad(ContactMe),
            },
            {
                path: "/login",
                element: lazyLoad(Login),
            },
            {
                path: "/post/:postId",
                element: lazyLoad(SinglePost),
            },
            {
                path: "/projects/:projectId",
                element: lazyLoad(SingleProject),
            },
        ],
    },
]);

// Rendering the application.
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);