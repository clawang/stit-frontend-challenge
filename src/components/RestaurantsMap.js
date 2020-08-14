import React, { useEffect, useState } from 'react';
import List from './List';
import loadData from './loadData';
import MapWidget from './MapWidget';
import Loading from './Loading';
import Nav from './Nav';

function RestaurantsMap(props) {
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
		const ContentLoading = loadData(RestaurantsMapContent, {latitude: appState.latitude, longitude: appState.longitude, location: 'new york', categories: 'restaurants'});
		return (
			<ContentLoading latitude={appState.latitude} longitude={appState.longitude} />
		);	
	}
	return (
		<Loading />
	);
	
}

function RestaurantsMapContent(props) {
	return (
		<div className="restaurants-map">
			<Nav color="white" />
			<div className="restaurants-map-wrapper">
				<div className="list-wrapper">
					<List restaurants={props.data} type="near" />
				</div>
				<div className="map-wrapper">
					<MapWidget latitude={props.latitude} longitude={props.longitude} points={props.data} />
				</div>
			</div>
		</div>
	);
}

export default RestaurantsMap;