import { useEffect } from "react"

function UseHook1(prop) {
    useEffect(() => {
        // console.log("Mount");
        console.log("Hello");
    },[prop.data])
    return (

        <div>
            {/* <h1>My Name is {prop.name}</h1> */}
            <h1>Data {prop.data}</h1>
            <h1>count {prop.count}</h1>
        </div>
    )
}
export default UseHook1