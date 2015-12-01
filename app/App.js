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
				isDebugging: this.props.store.getState().isDebugging
			});
		});

		const model = NotebookModelFactory.getNotebookModel();
		setTimeout(() => {
			this.setState({
				model
			});
		}, 600);
	},
	componentWillUnmount() {
		this.unsubscribe();
	},
	render() {
		return (
				<div>
					<header>App</header>
					<pre className={ this.state.isDebugging ? "" : "hidden" }>
						{
							JSON.stringify(this.state.model)
						}
					</pre>
					<div>{ `Debugging = ${this.state.isDebugging}` } </div>
					<button onClick={this.toggleDebugging}>Debug</button>
					<Notebook
							model={ this.state.model }
							store={this.props.store}>
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