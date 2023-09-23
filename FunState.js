import { useState } from "react"

function FuncState() {
    // var name = "RamNuj";

    // function hello() {
    //     name = "Krishna Namdev";
    //     alert(name);
    // }
    const [name,setname] =useState("Ramkrishna")
    return (
        <div>
            <h1>Your name is {name}</h1>
            {/* <button onClick={hello}>Submit</button> */}
            <button onClick={()=>setname("deepak singh")}>Submit</button>
        </div>
    )
}
export default FuncState

// difference between Variable and State
// when we change value in variable it will not reflect in component while
//  when we change value in state it will reflect in Component