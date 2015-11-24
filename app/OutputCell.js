import React from 'react';

var OutputCell = React.createClass({
	render() {
		return (
				<div>
					<header>OutputCell</header>
						<pre className="debug">
							{
								JSON.stringify(this.props.model)
							}
						</pre>
				</div>
		);
	}
});

export default OutputCell;
