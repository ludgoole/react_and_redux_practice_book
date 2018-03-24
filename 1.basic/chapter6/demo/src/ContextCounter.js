import React, { Component} from 'react';
import PropTypes from 'prop-types'; 

function Button(props, context) {
    return (
        /* 最终执行方法 */
        <button style={{ backgroundColor: context.color }} onClick={() => context.remove(props.index)}>{props.children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired
}
Button.contextTypes = {
    color: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired
}

function Message(props) {
    return (
        /* 继续传递方法 */
        <li> {props.text} <Button deleteMsg={props.deleteMsg} index={props.index}>DELETE</Button></li>
    )
}

Message.propTypes = {
    text: PropTypes.string.isRequired
}

export default class MessageList extends Component {
    constructor() {
        super();
        this.state = {
            messages: [
                { text: 'Hello React'},
                { text: 'Hello Redux'}
            ],
        };
        this.remove = this.remove.bind(this);
        this.eachMsg = this.eachMsg.bind(this);
        this.update = this.update.bind(this);
    }
    getChildContext() {
        return { 
            color: 'gray',
            remove: this.remove
         }
    }
    /* 实时更新 */ 
    update() {
        this.setState({messages: this.state.messages})
    }
    /* 就近修改 */ 
    remove(index) {
        console.log('remove')
        this.state.messages.splice(index, 1);
        this.update();
    }
    /* 及时返回 */
    eachMsg(message, index) {
        return (
            <Message text={message.text} key={index} deleteMsg={this.remove} index={index}/>   /* 传递方法 */
        )
    } 
    render() {
        return (
            <div>
                <p>通过context将color跨级传递给里面的Button组件</p>
                <ul>{this.state.messages.map(this.eachMsg)}</ul>
            </div>  
        )
    }
}

MessageList.childContextTypes = {
    color: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired
}