import React from 'react';

function Loading(props) {
	return (
		<div className={"loading " + (props.fullscreen ? "" : "small")}>
			<div className="loading-symbol"></div>
		</div>
	);
}

export default Loading;