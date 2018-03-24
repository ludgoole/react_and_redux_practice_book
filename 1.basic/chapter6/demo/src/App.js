import React from "react";
import StateCounter from "./StateCounter";
import PropsCounter from "./PropsCounter";
import ContextCounter from "./ContextCounter";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <StateCounter/>
                <PropsCounter/>
                <ContextCounter/>
            </div>
        )
    }
}