import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";

import Rumah from '../pages/index';
import About from "../pages/About";


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
            path: "/about",
            element: <About />,
        }
       ]
    }
]);