import React, { Component} from 'react';

export default class Bind extends Component {
    constructor() {
        super();
        this.handler = this.handler.bind(this);
    }

    handler() {
        console.log('handler', this)
    }

    render() {
        console.log('handler', this);
        return (
            <div>
                <h1 onClick={this.handler}>Hello World</h1>
            </div>  
        )
    }
}