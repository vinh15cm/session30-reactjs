import React, { Component } from 'react'
interface State {
    name: string
}
interface Props {

}
export default class Class extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            name: "Minh Thu"
        }
    }
    handleClick = () => {
        console.log("đã gọi vào hàm click")
        this.setState({
            name: "minh hà",
        })
    }
    render() {
        return (
            <div>
                Class
                <p>Xin chào {this.state.name}</p>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}

