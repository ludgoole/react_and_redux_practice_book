import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducer
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state -1;
    default:
      return state;
  }
}

// store
const store = createStore(counter, applyMiddleware(thunk));

let currentValue = store.getState();
// listen
const listener = () => {
  const previousValue = currentValue;
  currentValue = store.getState();
  console.log('pre state:', previousValue, 'next state', currentValue);
}
// on
store.subscribe(listener);

//func
function increment() {
  return {type: 'INCREMENT'}  // basic
}

function decrement() {
  return {type: 'DECREMENT'}  //basic
}

//thunk
function incrementIfOdd() {
  return (dispatch, getState) => {
    const value = getState();
    if(value % 2 ===0 ) {
      return;
    }
    dispatch(increment());
  }
}

function incrementAsync(delay = 1000) {
  console.log('incrementAsync')
  return dispatch => {
    setTimeout(() => {
        dispatch(increment());
    }, delay)
  }
}

// action
store.dispatch(increment());
store.dispatch(incrementIfOdd());
store.dispatch(incrementAsync());
store.dispatch(decrement());