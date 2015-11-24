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
		}, 600);
	},
	render: function () {
		return (
				<div>
					<header>App</header>
					<pre className="debug">
						{
							JSON.stringify(this.state.model)
						}
					</pre>
					<Notebook model={ this.state.model }></Notebook>
				</div>
		);
	},
});