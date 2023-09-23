import { useState } from "react"

function HideShow()
{
    const[status]=useState(3);
    return(
     <div>
        {
            status===1? <h1>This is a Component 1</h1>:
            status===2? <h1>This is a Component 2</h1>:
            status===3? <h1>This is a Component 3</h1>:null
        }
        {/* <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button>
        <button onClick={()=>setStatus(!status)}>Toggle</button> */}

     </div>
    )
}
export default HideShow