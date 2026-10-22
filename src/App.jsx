
import Navbar from "./component/Navbar"
import AddDoctor from "./pages/AddDoctor"
import Home from "./pages/Home"
import useState from "react";
import filteredData from "./pages/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UpdateDoctor from "./pages/UpdateDoctor"
import PageNotFound from "./pages/PageNotFound";
import './App.css'
import Login from "./pages/Login";
import ProtectedRoute from "./component/ProtectedRoute";
function App() {
  
  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes> 

        <Route path = "/" element={<Home/>}/>
        <Route path = "/adddoctor" element={<ProtectedRoute><AddDoctor/></ProtectedRoute>}/>
        <Route path = "/updatedoctor/:id" element={<UpdateDoctor/>}/>
        <Route path = "*" element={<PageNotFound/>}/>
        <Route path = "/login" element = {<Login/>} />
        
        </Routes>     
      </BrowserRouter>
        
          
       {/* <Doctorcard name="Dr. Revathi" salary="500000" gender="Female" age="30" specialization="psychiatry"/> 
       <Doctorcard name="Dr. Jagadeesh" salary="600000" gender="Male" age="35" specialization="Cardiology"/>
      <Doctorcard name="Dr. Bhanu" salary="700000" gender="Female" age="40" specialization="Neurology"/>  */}
    {/* <AddDoctor/> */}
    </>
  

)
}
export default App;