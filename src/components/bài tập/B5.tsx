import { Component } from 'react'
interface Props {
    message: string,
}
export default class B5 extends Component<any, Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            message: "open the form"
        };
    }
    handleClick = () => {
        this.setState({ message: "Close the form" });
    };
    shouldComponentUpdate(nextProps: any, nextState: any) {
        return nextState.message !== this.state.message;
    }
    render() {
        return (
            <div>
                <h3>Slogan: {this.state.message}</h3>
                <button onClick={this.handleClick}>Click để thay đổi</button>
            </div>
        );
    }
}