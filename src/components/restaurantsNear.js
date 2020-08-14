import React, { useEffect, useState } from 'react';
import List from './List';
import loadData from './loadData';
import Loading from './Loading';
import Nav from './Nav';

function RestaurantsNear(props) {
	const [appState, setAppState] = useState({
		latitude: null,
		longitude: null,
		location: null,
		loading: true
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				setAppState({latitude: position.coords.latitude, longitude: position.coords.longitude, loading: false});
	    	},
		    function(error) {
		    	setAppState({location: 'new york', loading: false});
		    }
	    );
	}, [setAppState]);

	if(!appState.loading) {
		const ContentLoading = loadData(RestaurantsNearContent, {latitude: appState.latitude, longitude: appState.longitude, location: 'new york', categories: 'restaurants'}, true);
		return (
			<ContentLoading />
		);	
	}
	return (
		<Loading />
	);
	
}

function RestaurantsNearContent(props) {
	return (
		<div>
			<Nav />
			<div className="header-wrapper">
				<div className="header">
				</div>
				<div className="header-content">
					<h1>Find the Best Restaurants Near You</h1>
					<input type="text" placeholder="Location" />
				</div>
			</div>
			<List restaurants={props.data} type="near" />
		</div>
	);
}

export default RestaurantsNear;