import { createBrowserRouter } from "react-router-dom";
import Rumah from '../pages/index';
import About from "../pages/About";


export const router = createBrowserRouter([
    {
       path: "/",
       element: <Rumah />, 
    },
    {
        path: "/about",
        element: <About />,
    }
]);