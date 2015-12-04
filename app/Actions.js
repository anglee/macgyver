"use strict";
import NotebookModelFactory from "./NotebookModel";

export const types = _.reduce([
	'LOAD_NOTEBOOK_MODEL_ISSUED',
	'LOAD_NOTEBOOK_MODEL_DONE',
	'TOGGLE_DEBUGGING',
	'REMOVE_CELL',
	'APPEND_NEW_CELL'
], (ret, it) => { ret[it] = it; return ret }, {} );

let nextCellId = 3;

export const createAppendNewCellAction = () => ({
	type: types.APPEND_NEW_CELL,
	cellId: nextCellId++
});

export const createRemoteCellAction = (cellId) => ({
	type: types.REMOVE_CELL,
	cellId: cellId
});

export const createLoadNotebookIssuedAction = () => ({
	type: types.LOAD_NOTEBOOK_MODEL_ISSUED
});

export const createLoadNotebookDoneAction = () => ({
	type: types.LOAD_NOTEBOOK_MODEL_DONE,
	model: NotebookModelFactory.getNotebookModel()
});

export const createToggleDebuggingAction = () => ({
	type: types.TOGGLE_DEBUGGING
});
