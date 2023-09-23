import { useState } from "react";

function User()
{
    const[name,setName]=useState("")
    return(
        <div>
            <h1>{name}</h1>
            <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}></input>
        </div>
    )
}
export default User