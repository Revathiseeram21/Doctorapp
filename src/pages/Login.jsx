import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContextData from "../context/ContextData";

function Login(){
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");
    let nav = useNavigate();
    let {loginUser} = useContext(ContextData)

    let handleLogin = async(e) => {
        try{

        e.preventDefault();
        console.log("Email : "+email);
        console.log("Password : "+password);

        let res = await axios.post("https://api-bdti.onrender.com/login",{email,password})
        console.log(res)

        if(res.status === 200){
            nav("/")
            // localStorage.setItem("token",res.data.patient.email)
            loginUser(res.data.patient.email)
        }

        setEmail("");
        setPassword("");
        }catch(e){
            console.log(e);
        }
    }

    return(
        <>
        <form onSubmit={handleLogin}>
            <h1>Login Page</h1>
            <input type = "text" placeholder="Enter the Username" value = {email} onChange={(e)=> setEmail(e.target.value)} /> <br/> <br/>
            <input type = "text" placeholder="Enter the Password" value = {password} onChange={(e)=> setPassword(e.target.value)} /> <br/> <br/>
            <input type = "submit" />

        </form>
        </>
    )
}
export default Login;