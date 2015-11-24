import React from 'react';

var InputCell = React.createClass({
	render() {
		return (
				<div>
					<header>InputCell</header>
						<pre className="debug">
							{
								JSON.stringify(this.props.model)
							}
						</pre>
				</div>
		);
	}
});

export default InputCell;
