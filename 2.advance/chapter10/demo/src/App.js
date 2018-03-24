import React from "react";
import Counter from "./components/Counter";

import { createStore } from 'redux';
import counter from "./reducers";
const store = createStore(counter);

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Counter
                    value={store.getState()}
                    onIncrement={ () => store.dispatch({ type: 'INCREMENT'}) }
                    onDecrement={ () => store.dispatch({ type: 'DECREMENT'}) }
                />
            </div>
        )
    }
}