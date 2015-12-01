import React from 'react';
import InputCell from './InputCell';
import OutputCell from './OutputCell';

var CodeCell = React.createClass({
	getInitialState() {
		return {
			isDebugging: false
		};
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
	render() {
		const model = this.props.model;
		return (<div>
			<header>CodeCell</header>
					<pre className={ this.state.isDebugging ? "" : "hidden" }>
						{
							JSON.stringify(model)
						}
					</pre>
			<InputCell model={ model.input } />
			<OutputCell model={ model.output } />
		</div>);
	}
});

export default CodeCell;
