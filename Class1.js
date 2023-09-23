import Class2 from "./Class2";

const { Component } = require("react");
class Class1 extends Component {
    // render()
    // {
    //     return(
    //         <div>
    //             <h1>Class component 1</h1>
    //             <Class2 name="Ram" age="20"></Class2>
    //         </div>
    //     )
    // }
    constructor() {
        super();
        this.state =
        {
            name: "Ram",
            age: 25
        }
    }
    hello() {
        this.setState({ name: "Krishna", age: 40 })
    }
    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <Class2 name={this.state.name} age={this.state.age}></Class2>
                <button onClick={() => this.hello()}>Submit</button>
            </div>
        )
    }
}
export default Class1