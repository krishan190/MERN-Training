import { Component, createRef } from "react";

class RefClass extends Component {
    constructor() {
        super();
        this.classref = createRef();
    }
    hello() {
        console.log(this.classref.current.value);
        this.classref.current.value = "Hello world";
        this.classref.current.style.color = "red";
        this.classref.current.style.backgroundColor = "green"
    }
    render() {
        return(
        <div>
            <input type="text" placeholder="Enter Name" ref={this.classref}></input><br></br>
            <button onClick={() => this.hello()}>Submit</button>
        </div>
        )
    }
}
export default RefClass