import React, { Component} from 'react';
import PropTypes from 'prop-types'; 

function Button(props, context) {
    return (
        /* 最终执行方法 */
        <button onClick={() => props.handle()}>{props.children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    handle: PropTypes.func.isRequired
}



export default class Cycle extends Component {
    constructor() {
        super();
        this.state = {
            handles: [
                {func: () => console.log('renderComponent')}, 
                {func: () => console.log('setState')}, 
                {func: () => console.log('unmountComponentAtNode')}
            ],
            texts: ['挂载', '更新', '卸载']
        };
        this.eachHandle = this.eachHandle.bind(this);

    }
    eachHandle(handle, index) {
        return <Button handle={handle.func} key={index}>{this.state.texts[index]}</Button>
    }

    render() {
        return (
            <div>
                {this.state.handles.map(this.eachHandle)}
            </div>  
        )
    }
}
