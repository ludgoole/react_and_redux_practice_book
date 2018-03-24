import React from "react";
import Counter from "./components/Counter";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counter from './reducers';

import { Provider } from 'react-redux';

import Connect4 from './containers/Connect4';
import Connect5 from './containers/Connect5';
const store = createStore(counter, applyMiddleware(thunk));



export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h2>使用react-redux连接</h2>
                    <div>
                        <p>connect()的前两个参数分别为函数和对象：</p>
                        <Counter />
                        <Connect4 />
                        <Connect5 />
                    </div>
                </div>
            </Provider>
        )
    }
}