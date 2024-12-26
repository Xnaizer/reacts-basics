import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";

import Rumah from '../pages/index';
import About from "../pages/About";
import Blog from "../pages/blogs/index";
import Post from "../pages/blogs/_id";


export const router = createBrowserRouter([
    {
       path: "/",
       element: <RootLayout />, 
       children: [
        {
            path: "/",
            element: <Rumah />,
        },
        {
            path: "/blog",
            element: <Blog />,
        },
        {
            path: "/blog/:id",
            element: <Post />,
        },
        {
            path: "/about",
            element: <About />,
        }
       ]
    }
]);