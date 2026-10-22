import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UpdateDoctor() {
  let { id } = useParams();
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [gender, setGender] = useState("");
  let [age, setAge] = useState("");
  let [specialization, setSepcialization] = useState("");
  let nav = useNavigate();

  let getDetails = async () => {
    let res = await axios.get(`https://api-bdti.onrender.com/doctors/${id}`)
    let data = res.data;
    setName(data.name ?? "")
    setAge(data.age ?? "")
    setGender(data.gender ?? "")
    setSalary(data.salary ?? "")
    setSepcialization(data.specialization ?? "")
  }

  useEffect(() =>{
    getDetails()
  },[])

  let handleUpdate = async(e) => {
    try{
    e.preventDefault();
    console.log("Name : " + name);
    console.log("Salary : " + salary);
    console.log("Age : " + age);
    console.log("Gender : " + gender);
    console.log("Specialization : " + specialization);

    let updateDoctor = {name,salary,gender,age,specialization}
    let res = await axios.put(`https://api-bdti.onrender.com/doctors/${id}`,updateDoctor)
    alert("Doctor Details Updated Successfully....")

    setName("");
    setSalary("");
    setGender("");
    setAge("");
    setSepcialization("");
    nav("/")
  }catch(e){
    console.log(e);
  }
}
  return (
    <>
      <h1>Welcome to doctor update page....</h1>
      <h1>Doctor ID: {id}</h1>
      <div>
        <form onSubmit={handleUpdate}>
          <h1>Update Doctor</h1>
          <input type="text" placeholder=" Enter Your Name " value={name} onChange={(e) => { setName(e.target.value) }} /><br /><br />
          <input type="text" placeholder=" Enter Your Salary " value={salary} onChange={(e) => { setSalary(e.target.value) }} /><br /><br />
          <input type="text" placeholder=" Enter Your Gender " value={gender} onChange={(e) => { setGender(e.target.value) }} /><br /><br />
          <input type="text" placeholder=" Enter Your Age " value={age} onChange={(e) => { setAge(e.target.value) }} /><br /><br />
          <input type="text" placeholder=" Enter Your Sepcialization " value={specialization} onChange={(e) => { setSepcialization(e.target.value) }} /><br /><br />
          <input type="submit"></input>

        </form>
      </div>
    </>
  )
}
export default UpdateDoctor;