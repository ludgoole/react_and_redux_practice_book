import React, { Component } from 'react';

export default class StateCounter extends Component {
    constructor() {
        super();
        this.state = { value: 0 };
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({value: this.state.value + 1})}>INCREMENT</button>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>  
        )
    }
}