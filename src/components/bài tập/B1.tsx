import { Component } from 'react';
interface Props {

}
interface State {
    name: string;
}
export default class B1 extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: "Nguyễn Quang VInh"
        };
    }
    componentWillMount(): void {
        this.setState({ name: "Quang VInh" });
    }
    render() {
        return (
            <div>
                <h3>Bài 1</h3>
                <h5>Tôi là {this.state.name}</h5>
            </div>
        );
    }
}