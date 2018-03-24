import React from 'react';
import { render } from 'react-dom';
import App from './src/App';


const instance = render((<App />), document.querySelector('#root'))


console.log('组件、ReactElement与组件实例');
console.log(App);
console.log(<App />);
console.log(instance);