const { Component } = require("react");
class Class2 extends Component {
    render() {
        return (
            <div>
                <h1>My Name is {this.props.name}</h1>
                <h1>My Name is {this.props.age}</h1>
            </div>
        )
    }
}
export default Class2