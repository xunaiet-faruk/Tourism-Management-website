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
import AllpagesDetails from "../Pages/AllPlaces/AllpagesDetails";
import MyList from "../Pages/Mylist/MyList";
import PrivateRouter from "./PrivateRouter";
import SpotsDetails from "../Component/Spots/SpotsDetails";





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
                element: <PrivateRouter><AddPlaces /></PrivateRouter>
            },
            {
                path:'/AllTouristsSpot',
                element: <PrivateRouter><Allplaces /></PrivateRouter>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/Register',
                element:<Register/>
            },
            {
                path:'/Addspots/:id',
                element: <PrivateRouter><AllpagesDetails /></PrivateRouter>
            },
            {
                path:'/mylist',
                element: <PrivateRouter><MyList /></PrivateRouter>
            },
            {
                path:'/Spots/:id',
                element: <SpotsDetails/>
            },
        ]
    },
]);