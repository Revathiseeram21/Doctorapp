import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/ContextData";

function ProtectedRoute({ children }){
    let {user}=useContext(UserContext)
    return(
        <>
        {
            user ? children : (<Navigate to = "/login" replace/>)
        }
        </>
    )
}
export default ProtectedRoute;