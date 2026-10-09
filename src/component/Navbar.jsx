function Navbar(){
    let styles={
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"magenta",
        color:"darkblue",
    }
    return(
        <div style={styles}>
           <h1>Doctor Application</h1>
           <div>
            <button>Home</button> &nbsp; &nbsp;
            <button>Add Doctor</button> 
           </div>
        </div>
    )
}
export default Navbar;