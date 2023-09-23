const { Component } = require("react");

class Should extends Component
{
    constructor()
    {
        super();
        console.log("constructor");
        this.state=
        {
            count:0
        }
    }

    shouldComponentUpdate()
    {
        // console.log("should Component Update");
        if(this.state.count<5)
        {
            return true
        }
        else{
            return false
        }
    }
    render()
    {
        console.log("render");
        return(
         <div>
              <h1>Count {this.state.count}</h1>
              <button onClick={()=>this.setState({count:this.state.count+1})}>Submit</button>
         </div>
        )
    }
}
export default Should