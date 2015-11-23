import React from "react";
import CodeCell from "./CodeCell";

export default React.createClass({
	getInitialState() {
		const modelFactory = this.props['notebook-model-factory'];
		console.log(modelFactory);
		const model = modelFactory.getNotebookModel();
		console.log(model);
		return {
			model
		};
	},
	render: function () {
		return (
				<div>
					<pre>
						{
								JSON.stringify(this.state.model)
						}
					</pre>
					<CodeCell></CodeCell>
				</div>
		);
	},
});