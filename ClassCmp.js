
import { Component } from "react";

class ClassCmp extends Component {
    hello(name)
    {
        alert("Hello my name "+name);
    }
    render() {
        // return (
        //     <div>
        //         <h1>Class Component</h1>
        //     </div>
        // );
        
        return(
            <div>
                <h1>THis is a Class Component</h1>
                <button onClick={()=>this.hello("Krishna Namdev ddgfsdegfdsg")}>Submit</button>
            </div>
        )
    }
}

export default ClassCmp

