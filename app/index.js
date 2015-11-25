import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { createStore } from 'redux';

const defaultState = {
	isDebugging: true
};

const reducer = (state = defaultState, action) => {

	if (action.type === 'TOGGLE_DEBUGGING') {
		return {
			isDebugging: !state.isDebugging
		};
	} else {
		return state;
	}

};


const store = createStore(reducer);
console.log(store.getState());

ReactDOM.render(<App store={store} />, document.getElementById('root'));