const { Component } = require("react");
class Update1 extends Component {
    render() {
        console.log("i am in Render");
        return (
            <div>
                <h1>My Name is {this.props.name}</h1>
                <h1>My Age is {this.props.age}</h1>
            </div>
        )
    }
}
export default Update1