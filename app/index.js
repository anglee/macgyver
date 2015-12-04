"use strict";

import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { types } from './actions'
//import { createStore } from 'redux';
//import thunk from 'redux-thunk';
//import { combineReducers } from 'redux';

const defaultState = {
	isDebugging: true,
	notebookModel: {},
	loadingStatus: ''
};

const isDebuggingReducer = (state = {}, action) => {
	if (action.type === 'TOGGLE_DEBUGGING') {
		return state = !state;
	} else {
		return state;
	}
};

const notebookModelReducer = (state = {}, action) => {

	if (action.type === 'LOAD_NOTEBOOK_MODEL_DONE') {
		return action.model;
	} else if (action.type === types.APPEND_NEW_CELL) {
		const newCell = {
			id: action.cellId,
			input: 'placeholder input for cell ' + action.cellId,
			output: 'placeholder output for cell ' + action.cellId
		};
		return {
			cells: [...state.cells, newCell]
		};
	} else if (action.type === 'REMOVE_CELL') {
		return {
			cells: _.reject(_.clone(state.cells), cell => cell.id === action.cellId)
		};
	} else {
		return state;
	}
};

const loadingStatusReducer = (state = {}, action) => {
	if (action.type === 'LOAD_NOTEBOOK_MODEL_ISSUED') {
		return 'loading...';
	}
	if (action.type === 'LOAD_NOTEBOOK_MODEL_DONE') {
		return 'loaded';
	} else {
		return state;
	}
};

const combineReducers = (reducers) => {
	return (state = {}, action) => _.reduce(reducers, (nextState, reducer, key) => {
		nextState[key] = reducer(state[key], action);
		return nextState;
		}, {});
};

const reducer = combineReducers({
	isDebugging: isDebuggingReducer,
	notebookModel: notebookModelReducer,
	loadingStatus: loadingStatusReducer
});

//const reducer = (state = defaultState, action) => {
//	return {
//		isDebugging: isDebuggingReducer(state.isDebugging, action),
//		notebookModel: notebookModelReducer(state.notebookModel, action),
//		loadingStatus: loadingStatusReducer(state.loadingStatus, action)
//	};
//};


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

	return {getState, dispatch, subscribe};
};

const store = createStore(reducer);

//// create a store that has redux-thunk middleware enabled
//const createStoreWithMiddleware = applyMiddleware(
//		thunk
//)(createStore);
//const store = createStoreWithMiddleware(reducer);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));