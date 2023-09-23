import { Component } from "react";

class ClassState extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            name:"Krishna"
        }
    }
    render()
    {
        return(
            <div>
                <h1>My name is {this.state.name}</h1>
                <button onClick={()=>this.setState({name:"abcjsjjsj"})}>Submit</button>
            </div>
        )
    }
}

export default ClassState