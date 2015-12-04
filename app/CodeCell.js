"use strict";

import React from 'react';
import InputCell from './InputCell';
import OutputCell from './OutputCell';
import { createRemoteCellAction } from "./actions";

var CodeCell = React.createClass({
	render() {
		const model = this.props.model;
		return (<div>
			<header>CodeCell</header>
				<pre className={ this.props.store.getState().isDebugging ? "" : "hidden" }>
					state = {
						JSON.stringify(model)
					}
				</pre>
			<InputCell model={ model.input } />
			<OutputCell model={ model.output } />
			<button onClick={ this.remove }>Remove</button>
		</div>);
	},
	remove() {
		const model = this.props.model;
		this.props.store.dispatch(createRemoteCellAction(model.id));
	}
});

export default CodeCell;
