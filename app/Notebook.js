import _ from "lodash";
import React from "react";
import CodeCell from "./CodeCell";

export default React.createClass({
	getInitialState() {
		return {};
	},
	componentDidMount() {
		this.unsubscribe = this.props.store.subscribe(() => {
			this.setState({
				isDebugging: this.props.store.getState().isDebugging
			});
		});
	},
	componentWillUnmount() {
		this.unsubscribe();
	},
	render: function () {
		const { cells } = this.props.model;
		return (
				<div>
					<header>Notebook</header>
					<pre className={ this.state.isDebugging ? "" : "hidden" }>
						{
							JSON.stringify(this.props.model)
						}
					</pre>
					{
						_.map(cells, (cell) => {
							return <CodeCell
									model={ cell }
									key={ cell.id }
									store={ this.props.store }>
							</CodeCell>
						})
					}
				</div>
		);
	},
});