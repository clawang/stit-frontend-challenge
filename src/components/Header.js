import React from 'react';

function Header(props) {
	const headlines = {
		near: 'Find the Best Restaurants Near You',
		details: props.name
	}

	const content = {
		near: (
			<input type="text" placeholder="Location" />
		)
	}

	return (
		<div className="header-wrapper">
			<div className="header">
			</div>
			<div className="header-content">
				<h1>{headlines[props.type]}</h1>
				{content[props.type]}
			</div>
		</div>
	);
}

export default Header;