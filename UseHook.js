import { useState } from "react"
import UseHook1 from "./UseHook1";
// import UseHook1 from "./UseHook1";

function UseHook()
{
    const [data,setData]=useState(0);
    const [count,setCount]=useState(100);

    // const [name,setName]=useState("Ram");
    // useEffect(()=>{
    //     console.log("Hello");
    // },[data,count])
    return(
        <div>
            {/* <h1>My Name is {name}</h1> */}
            {/* <button onClick={()=>setName("syam")}>Submit</button> */}

            {/* By using Prop */}
            {/* <UseHook1 name={name}></UseHook1>
            <button onClick={()=>setName("syam")}>Submit</button> */}

            
            {/* <h1>Data {data}</h1>
            <h1>count {count}</h1> */}
            
            <UseHook1 data={data} count={count}></UseHook1>
            <button onClick={()=>setData(data+1)}>Data</button>
            <button onClick={()=>setCount(count+1)}>Count</button>
        </div>
    )
}
export default UseHook