import React, { Component} from 'react';
import PropTypes from 'prop-types'; 


export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
          this.props.onIncrement();
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000);
    }

    render() {
        return (
            <div>
                <p>
                    Clicked: {this.props.value} times
                    {' '}
                    <button onClick={this.props.onIncrement}>+</button>
                    {' '}
                    <button onClick={this.props.onDecrement}>-</button>
                    {' '}
                    <button onClick={this.incrementIfOdd}>Increment if odd</button>
                    {' '}
                    <button onClick={this.incrementAsync}>Increment async</button>
                </p>
            </div>  
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}