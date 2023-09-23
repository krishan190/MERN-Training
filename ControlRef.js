    
import { useRef, useState } from "react";

function ControlRef()
{
    const nameref=useRef();
    const ageref=useRef();

    const [name,setName]=useState("");
    const [age,setAge]=useState(0);
    const [add,setAdd]=useState("");

    function submitForm(e)
    {
        e.preventDefault();
        setName(nameref.current.value)
        setAge(ageref.current.value)
        setAdd(document.getElementById("add").value);
        var name = nameref.current.value;
        var age = ageref.current.value;
        console.log(name,age);
    }
   return(
    <div>
        <form onSubmit={submitForm}>
             <input type="text" placeholder="Enter name" ref={nameref}></input><br></br>
             <input type="number" placeholder="Enter Age" ref={ageref}></input><br></br>
             <input type="text" placeholder="Enter add" id="add"></input><br></br>
             <button>Submit</button><br></br>
             Name : {name}
             <br></br>
             Age  : {age}
             <br></br>
             Address: {add}
        </form>
    </div>
   )
}
export default ControlRef