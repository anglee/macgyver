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
		const { cells } = this.props.store.getState().notebookModel;
		const isDebugging = this.props.store.getState().isDebugging;
		return (
				<div>
					<header>Notebook</header>
					<pre className={ isDebugging ? "" : "hidden" }>
						state = {
							JSON.stringify(this.props.store.getState().notebookModel)
						}
					</pre>
					<div>
						Loading Status: { JSON.stringify(this.props.store.getState().loadingStatus) }
					</div>
					{
						_.map(cells, (cell) => {
							return <CodeCell
									model={ cell }
									key={ cell.id }
									input={ cell.input }
									output={ cell.output }
									isDebugging={isDebugging}
									onRemove={() => { this.props.onRemoveCell(cell.id); }}
							/>
						})
					}
					<button onClick={ this.appendNewCell }>New Cell</button>
				</div>
		);
	},
});