import { useState } from "react"

function Hook()
{
   const [name,setName]=useState("Ram");
   return(
    <div>
        <h1>My Name is {name}</h1>
        <button onClick={()=>setName("Krishna")}>Submit</button>
    </div>
   )
}
export default Hook