import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";

import Rumah from '../pages/index';
import About from "../pages/About";
import Blog from "../pages/blogs/index";


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
            path: "/about",
            element: <About />,
        }
       ]
    }
]);