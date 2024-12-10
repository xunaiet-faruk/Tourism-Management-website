import { useContext, useState } from "react";
import { AuthContext } from "../Component/Provider/Authprovider";
import { Navigate } from "react-router-dom";
import Loading from "../Component/Loading";


const PrivateRouter = ({children}) => {
    const {user,loading} =useContext(AuthContext)

    if(loading){
        return <Loading/>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRouter;