import { Component } from "react";

class Mount extends Component
{
    componentDidMount()// Call Api
    {
        console.log("Component Did mount");
    }
    constructor()
    {
        super();
        console.log("Constructor");
    }
    render()
    {
        console.log("Render");
        return(
            <div>
                
            </div>
        )
    }
    
}
export default Mount