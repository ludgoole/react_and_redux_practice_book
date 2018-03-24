import React, { Component} from 'react';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = { value: 0 };
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    onIncrement() {
      this.setState({value: this.state.value + 1})
    }

    onDecrement() {
      this.setState({value: this.state.value - 1})
    }

    incrementIfOdd() {
        if (this.state.value % 2 !== 0) {
          this.onIncrement();
        }
    }

    incrementAsync() {
        setTimeout(this.onIncrement, 1000);
    }

    render() {
        return (
            <div>
                <p>
                    Clicked: {this.state.value} times
                    {' '}
                    <button onClick={this.onIncrement}>+</button>
                    {' '}
                    <button onClick={this.onDecrement}>-</button>
                    {' '}
                    <button onClick={this.incrementIfOdd}>Increment if odd</button>
                    {' '}
                    <button onClick={this.incrementAsync}>Increment async</button>
                </p>
            </div>  
        )
    }
}




  