import { createBrowserRouter } from "react-router-dom";
import Rumah from '../pages';
 
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Rumah />
    }
])