function Doctorcard(props) {
    return (
        <div>
           <h3>Name: {props.name}</h3>
           <h3>Salary: {props.salary}</h3>
           <h3>Gender: {props.gender}</h3>
           <h3>Age: {props.age}</h3>
           <h3>Specialization: {props.specialization}</h3>
           <hr/>
        </div>
    )
}
export default Doctorcard;