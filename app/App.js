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

		this.unsubscribe = this.props.store.subscribe(() => {
			this.setState({
				isDebugging: this.props.store.getState().isDebugging,
				model: this.props.store.getState().notebookModel,
				loadingStatus: this.props.store.getState().loadingStatus
			});
		});

		this.props.store.dispatch(function (dispatch) {
			dispatch({
				type: 'LOAD_NOTEBOOK_MODEL_ISSUED'
			});

			setTimeout(() => {
				dispatch({
					type: 'LOAD_NOTEBOOK_MODEL_DONE',
					model: NotebookModelFactory.getNotebookModel()
				});
			}, 1500);
		});

	},
	componentWillUnmount() {
		this.unsubscribe();
	},
	render() {
		return (
				<div>
					<button onClick={this.toggleDebugging}>Debug</button>
					<div>{ `Debugging = ${this.state.isDebugging}` } </div>

					<header>App</header>
					<pre className={ this.state.isDebugging ? "" : "hidden" }>
						state = {
							JSON.stringify(this.state)
						}
					</pre>
					<Notebook
							model={ this.state.model }
							isDebugging={ this.state.isDebugging }
							loadingStatus={ this.state.loadingStatus }>
					</Notebook>
				</div>
		);
	},
	toggleDebugging() {
		this.props.store.dispatch({
			type: 'TOGGLE_DEBUGGING'
		});
	}
});