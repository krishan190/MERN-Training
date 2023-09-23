import { forwardRef } from "react"

function FunRef1(prop,ref)
{
    return(
        <div>
            <input type="text" placeholder="Enter Name" ref={ref}></input>
        </div>
    )
}
export default forwardRef(FunRef1)