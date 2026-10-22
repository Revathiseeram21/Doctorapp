import { createContext, useState } from "react";

export let UserContext = createContext();

    function ContextData({children}){
        let[user,setUser] = useState(localStorage.getItem("username") || null)

        let loginUser = (email) => {
            setUser(email);
            localStorage.setItem("username",email);
        }
        let logoutUser = () =>{
            setUser(null);
            localStorage.removeItem("username");

        }
        return (
            < UserContext.Provider value = {{user,loginUser,logoutUser}}>
                {children}
            </UserContext.Provider>
        )
    }
        export default ContextData;