"use strict";

import React from 'react';
import InputCell from './InputCell';
import OutputCell from './OutputCell';

var CodeCell = ({input, output, isDebugging, onRemove}) => (
		<div>
			<header>CodeCell</header>
			<pre className={ isDebugging ? "" : "hidden" }>
				state = {
					JSON.stringify({input, output})
				}
			</pre>
			<InputCell model={ input } />
			<OutputCell model={ output } />
			<button onClick={ onRemove }>Remove</button>
		</div>
);

export default CodeCell;
