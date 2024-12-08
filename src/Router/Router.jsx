import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Mainpage/Main";
import Home from "./Mainrouter/Homepage/Home";
import Register from "../Pages/Authentication/Register/Register";
import AddPlaces from "../Pages/Addspots/AddPlaces";
import Allplaces from "../Pages/AllPlaces/Allplaces";
import Login from "../Pages/Authentication/Login/Login";
import ErrorPage from "../Component/ErrorPage";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement:<ErrorPage/>,
        children : [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/addspots',
                element:<AddPlaces/>
            },
            {
                path:'/AllTouristsSpot',
                element:<Allplaces/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/Register',
                element:<Register/>
            },
        ]
    },
]);