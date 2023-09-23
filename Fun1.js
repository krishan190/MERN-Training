// prop means Property it is used to shared data between two components

import { useState } from "react";
import Fun2 from "./Fun2";

function Fun1()
{
    // var name ="Ram";

    // Function method to use state of the variable
    const [name,setName]=useState("Ram");
    const [age,setAge]=useState(20);
    // var age =30;
    function hello()
    {
        setName("Krishna");
        setAge(30);
    }
    return(
      <div>
        <h1>Funciton Component 1</h1>
        <Fun2 data={name} data1={age}></Fun2>
        <button onClick={()=>hello()}>Submit</button>
      </div>
    )
}
export default Fun1