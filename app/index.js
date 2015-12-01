import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
//import { createStore } from 'redux';
//import thunk from 'redux-thunk';

"use strict";

const defaultState = {
	isDebugging: true,
	notebookModel: {},
	loadingStatus: ''
};

const reducer = (state = defaultState, action) => {

	if (action.type === 'TOGGLE_DEBUGGING') {
		return _.assign({}, state, {
			isDebugging: !state.isDebugging
		});
	} else if (action.type === 'LOAD_NOTEBOOK_MODEL_ISSUED') {
		return _.assign({}, state, {
			loadingStatus: 'loading...'
		});
	} else if (action.type === 'LOAD_NOTEBOOK_MODEL_DONE') {
		return _.assign({}, state, {
			notebookModel: action.model,
			loadingStatus: ''
		});
	} else {
		return state;
	}

};


const createStore = (reducer) => {

	let state;
	let subscribers = [];

	const getState = () => state;
	const dispatch = (action) => {
		if (!_.isFunction(action)) {
			state = reducer(state, action);
			subscribers.forEach(listener => listener());
		} else {
			action(dispatch);
		}
	};
	const subscribe = (subscriber) => {
		subscribers.push(subscriber);
		return function () {
			subscribers = _.reject(subscribers, subscriber);
		};
	};

	dispatch({});

	return { getState, dispatch, subscribe };
};

const store = createStore(reducer);

//// create a store that has redux-thunk middleware enabled
//const createStoreWithMiddleware = applyMiddleware(
//		thunk
//)(createStore);
//const store = createStoreWithMiddleware(reducer);

console.log(store.getState());

ReactDOM.render(<App store={store}/>, document.getElementById('root'));