import React, { Component } from 'react'

export class Tweets extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'hello world'
        }
        
    }
    good=()=>{
        this.setState({
            message:'Good night!'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.good}>change</button>
            </div>
        )
    }
}

export default Tweets;
