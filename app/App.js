import React from "react";
import Notebook from "./Notebook";
import {
		createLoadNotebookIssuedAction,
		createLoadNotebookDoneAction,
		createToggleDebuggingAction,
		createRemoteCellAction
} from "./actions";

export default React.createClass({
	getInitialState() {
		return {
			model: {}
		};
	},
	componentDidMount() {

		this.unsubscribe = this.props.store.subscribe(() => {
			this.forceUpdate();
		});

		this.props.store.dispatch(function (dispatch) {
			dispatch(createLoadNotebookIssuedAction());

			setTimeout(() => {
				dispatch(createLoadNotebookDoneAction());
			}, 500);
		});

	},
	componentWillUnmount() {
		this.unsubscribe();
	},
	render() {
		return (
				<div>
					<button onClick={this.toggleDebugging}>Debug</button>
					<div>{ `Debugging = ${this.props.store.getState().isDebugging}` } </div>

					<header>App</header>
					<pre className={ this.props.store.getState().isDebugging ? "" : "hidden" }>
						state = { JSON.stringify(this.props.store.getState()) }
					</pre>
					<Notebook
							store={ this.props.store }
							onRemoveCell={(cellId) => this.props.store.dispatch(createRemoteCellAction(cellId)) }
					/>
				</div>
		);
	},
	toggleDebugging() {
		this.props.store.dispatch(createToggleDebuggingAction());
	}
});