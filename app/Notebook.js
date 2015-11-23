import React from "react";
import CodeCell from "./CodeCell";

export default React.createClass({
	getInitialState() {
		return {
		};
	},
	render: function () {
		return (
				<div>
					<pre>
						{
								JSON.stringify(this.props.model)
						}
					</pre>
					<CodeCell></CodeCell>
				</div>
		);
	},
});