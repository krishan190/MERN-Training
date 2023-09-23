import { useState } from "react"

function HOCCmp()
{
    return(
        <div>
            <h1>HOC Component</h1>
            <RedCmp cmp={Data}></RedCmp>
            <BlueCmp cmp={Data}></BlueCmp>
            <PinkCmp cmp={Data}></PinkCmp>
        </div>
    )
}
function RedCmp(prop)
{
    return <h1 style={{backgroundColor:"red", width:"200px"}}><prop.cmp></prop.cmp></h1>
}
function BlueCmp(prop)
{
    return <h1 style={{backgroundColor:"blue", width:"200px"}}><prop.cmp></prop.cmp></h1>
}
function PinkCmp(prop)
{
    return <h1 style={{backgroundColor:"aqua", width:"200px"}}><prop.cmp></prop.cmp></h1>
}
function Data()
{
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>Count : {count}</h1><br></br>
            <button style={{backgroundColor:"black" ,color:"white"}} onClick={()=>setCount(count+1)}>Count</button>
        </div>
    )
}
export default HOCCmp