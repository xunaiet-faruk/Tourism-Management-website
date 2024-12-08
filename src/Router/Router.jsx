import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Mainpage/Main";
import Home from "./Mainrouter/Homepage/Home";
import Register from "../Pages/Register/Register";
import AddPlaces from "../Pages/Addspots/AddPlaces";
import Allplaces from "../Pages/AllPlaces/Allplaces";




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
            {
                path:'/addspots',
                element:<AddPlaces/>
            },
            {
                path:'/AllTouristsSpot',
                element:<Allplaces/>
            },
        ]
    },
]);