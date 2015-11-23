import React from 'react';
import InputCell from './InputCell';
import OutputCell from './OutputCell';

var CodeCell = React.createClass({
	render() {
		return (<div>
			<InputCell />
			<OutputCell />
		</div>);
	}
});

export default CodeCell;
