import { PureComponent } from "react";

class Pure extends PureComponent {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    render() {
        console.log("Hllo");
        return (
            <div>
                <h1>count {this.state.count}</h1>
                <button onClick={() => this.setState({ count: 1 })}>Submit</button>
            </div>
        )
    }
}
export default Pure