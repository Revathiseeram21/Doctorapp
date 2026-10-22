import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddDoctor() {
    let [name, setName] = useState("");
    let [salary, setSalary] = useState("");
    let [gender, setGender] = useState("");
    let [age, setAge] = useState("");
    let [specialization, setSpecialization] = useState("");
    let nav = useNavigate();

    let handleSubmit = async(e) => {
        e.preventDefault();
        console.log("name:"+name);
        console.log("salary:"+salary);
        console.log("gender:"+gender);
        console.log("age:"+age);
        console.log("specialization:"+specialization);

        let newDoctor={name,salary,gender,age,specialization}

        let result = await axios.post("https://api-bdti.onrender.com/doctors/",newDoctor)

        alert('Doctor Added Successfully...')

        setName("");
        setSalary("");
        setGender("");
        setAge("");
        setSpecialization("");
        nav("/")
    }
    return (    
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add Doctor</h1>
                <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/><br/><br/>
                <input type="text" placeholder="Enter Salary" value={salary} onChange={(e) => setSalary(e.target.value)}/><br/><br/>
                <input type="text" placeholder="Enter Gender" value={gender} onChange={(e) => setGender(e.target.value)}/><br/><br/> 
                <input type="text" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)}/><br/><br/>
                <input type="text" placeholder="Enter Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)}/><br/><br/>
                <input type="submit"/>
            
            </form>
        </div>
    )
}
export default AddDoctor;