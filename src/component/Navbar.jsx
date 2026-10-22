import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContextData from "../context/ContextData";

function Navbar(){
    let styles={
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"magenta",
        color:"darkblue",
    }
    let nav=useNavigate();
    let token = localStorage.getItem("token");

    // let logout = () => {
    //     localStorage.removeItem("token");
    //     nav("/")
    // }

    let {logoutUser} = useContext(ContextData);

    let logout = () => {
        logoutUser();
        nav("/")
    }
    return(
        
        <div style={styles}>
           <h1>Doctor Application</h1>
           <div>
            <button><Link to="/">Home</Link></button> &nbsp; &nbsp;
            <button onClick={()=>{nav("/adddoctor")}}>Add Doctor</button> &nbsp; &nbsp;
            {
                token ? (<button onClick = {logoutUser}>Logout</button>) :
                ( <button onClick={()=>nav("/login")}>Login</button>)
            }

           </div>
        </div>
    )
}
export default Navbar;