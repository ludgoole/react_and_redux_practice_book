import React from "react";
import Cycle from "./Cycle";
import Bind from "./Bind";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Cycle/>
                <Bind/>
            </div>
        )
    }
}
