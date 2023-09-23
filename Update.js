import { Component } from "react";
import Update1 from "./Update1";

class Update extends Component {
    constructor() {
        super();
        console.log("Constructor");
        this.state =
        {
            name: "Ram",
            age: 23
        }
    }
    componentDidUpdate()
    {
        console.log("I am in Component Did Update");
    }
    hello() {
        this.setState({ name: "Krishna", age: 40 })
    }
    render() {
        console.log("Render")
        return (
            <div>
                {/* <h1>My Name is {this.state.name}</h1>
                <h1>My Age is {this.state.age}</h1> */}
                {/* <Class2 name={this.state.name} age={this.state.age}></Class2> */}

                {/* By usign Props */}
                <Update1 name={this.state.name} age={this.state.age}></Update1>
                <button onClick={() => this.hello()}>Submit</button>
            </div>
        )
    }
}
export default Update