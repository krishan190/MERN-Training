// import React, { createElement } from "react"

function CallFun()
{
    // return(
    //     // <div>
    //     //     <h1>Hello World</h1>
    //     //     <h1>
    //     //         This is a CallFun 
    //     //     </h1>
    //     // </div>
    //     React.createElement("div",null,createElement("h1",null,"Hello WOrld HJHJJHHJ"))
    // )
    function hello(name)
        {
            alert("Hello my name "+name);
        }
        return(
            <div>
                <h1>Hello world</h1>
                <button onClick={()=>hello("Krishna")}>Submit</button>
            </div>
        )
}
export default CallFun