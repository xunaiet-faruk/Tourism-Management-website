import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Mainpage/Main";
import Home from "./Mainrouter/Homepage/Home";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children : [
            {
                path:'/',
                element:<Home/>
            }
        ]
    },
]);