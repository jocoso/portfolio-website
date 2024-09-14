import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Error from './pages/Error.jsx';

import About from './pages/About.jsx';
import Art from './pages/Art.jsx';
import Blog from './pages/Blog.jsx';
import ContactMe from './pages/ContactMe.jsx';
import Projects from './pages/Projects.jsx';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/art',
                element: <Art />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/contact-me',
                element: <ContactMe />,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)