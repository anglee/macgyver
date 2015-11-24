import React from 'react';
import InputCell from './InputCell';
import OutputCell from './OutputCell';

var CodeCell = React.createClass({
	render() {
		const model = this.props.model;
		return (<div>
			<header>CodeCell</header>
				<pre className="debug">
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
