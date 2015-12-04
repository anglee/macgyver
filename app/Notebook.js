import _ from "lodash";
import React from "react";
import CodeCell from "./CodeCell";
import { createAppendNewCellAction } from "./actions";

export default React.createClass({
	getInitialState() {
		return {};
	},
	appendNewCell() {
		this.props.store.dispatch(createAppendNewCellAction());
	},
	render() {
		const { cells } = this.props.model;
		return (
				<div>
					<header>Notebook</header>
					<pre className={ this.props.isDebugging ? "" : "hidden" }>
						state = {
						JSON.stringify(this.props.model)
					}
					</pre>
					<div>
						Loading Status: { this.props.loadingStatus }
					</div>
					{
						_.map(cells, (cell) => {
							return <CodeCell
									model={ cell }
									key={ cell.id }
									isDebugging={ this.props.isDebugging }
									store={ this.props.store }
							/>
						})
					}
					<button onClick={ this.appendNewCell }>New Cell</button>
				</div>
		);
	},
});