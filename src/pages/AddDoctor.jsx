import { useState } from "react";

function AddDoctor() {
    let [name, setName] = useState("");
    let [salary, setSalary] = useState("");
    let [gender, setGender] = useState("");
    let [age, setAge] = useState("");
    let [specialization, setSpecialization] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("name:"+name);
        console.log("salary:"+salary);
        console.log("gender:"+gender);
        console.log("age:"+age);
        console.log("specialization:"+specialization);

        setName("");
        setSalary("");
        setGender("");
        setAge("");
        setSpecialization("");
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