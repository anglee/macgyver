import React from 'react';

const InputCell = ({model}) => (
				<div>
					<header>InputCell</header>
						<pre className="debug">
							{
								JSON.stringify(model)
							}
						</pre>
				</div>
);

export default InputCell;
