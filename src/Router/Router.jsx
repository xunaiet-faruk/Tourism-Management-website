import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Mainpage/Main";
import Home from "./Mainrouter/Homepage/Home";
import Register from "../Pages/Register/Register";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children : [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/register',
                element:<Register/>
            },
        ]
    },
]);