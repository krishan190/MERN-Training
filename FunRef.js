import { useRef } from "react";
import FunRef1 from "./FunRef1";

function FunRef()
{
    const funref=useRef();
    function hello()
    {
        console.log(funref.current.value);
        funref.current.value="My name is Krishna";
        funref.current.style.backgroundColor="aqua"
    }
    return(
        <div>
            {/* <input type="text" placeholder="Enter Name" ref={funref}></input><br></br> */}
            <FunRef1 ref={funref}></FunRef1>
            <button onClick={hello}>Submit</button>

        </div>
    )
}
export default FunRef