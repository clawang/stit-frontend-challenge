import React, { useEffect, useState } from 'react';
import List from './List';
import loadData from './loadData';
import MapWidget from './MapWidget';
import {Link} from "react-router-dom";
import Loading from './Loading';

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
			<nav className="map-nav">
	          <ul>
	            <li>
	              <Link to="/">Restaurants Near You</Link>
	            </li>
	            <li>
	              <Link to="/details">Restaurant Details</Link>
	            </li>
	            <li>
	              <Link to="/search">Search Restaurants</Link>
	            </li>
	            <li>
	              <Link to="/map">Map View</Link>
	            </li>
	          </ul>
	        </nav>
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