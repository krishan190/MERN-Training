import Child from "./Child"

function Parent() {
    function hello(data) 
    {
        alert("my name is " + data);
    }
    return (
        <div>
            <h1>Parent</h1>
            <Child name={hello}></Child>

        </div>
    )
}
export default Parent