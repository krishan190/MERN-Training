import { useState } from "react";

function ControlCmp()
{
    const [name,setName]=useState("");
    const [age,setAge]=useState(0);
    function submitForm(e)
    {
        e.preventDefault();
    }
   return(
    <div>
        <form onSubmit={submitForm}>
             <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}></input><br></br>
             <input type="number" placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}></input><br></br>
             <button>Submit</button><br></br>
             Name : {name}
             <br></br>
             Age  : {age}
        </form>
    </div>
   )
}
export default ControlCmp