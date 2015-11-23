import React from "react";
import Notebook from "./Notebook";
import NotebookModelFactory from "./NotebookModel";

export default React.createClass({
	getInitialState() {
		return {
			model: {}
		};
	},
	componentDidMount() {
		const model = NotebookModelFactory.getNotebookModel();
		setTimeout(() => {
			"use strict";
			this.setState({
				model
			});
		}, 1000);
	},
	render: function () {
		return (
				<div>
					<pre>
						{
							JSON.stringify(this.state.model)
						}
					</pre>
					<Notebook notebook-model={ this.state.model }></Notebook>
				</div>
		);
	},
});