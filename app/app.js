import React from 'react';
import ReactDOM from 'react-dom';
import Notebook from "./Notebook";
import NotebookModelFactory from "./NotebookModel";
console.log("NotebookModelFactory", NotebookModelFactory);
ReactDOM.render(
		<Notebook notebook-model-factory={NotebookModelFactory}/>,
		document.getElementById('root')
);