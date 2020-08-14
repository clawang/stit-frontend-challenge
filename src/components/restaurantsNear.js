import React, { useEffect, useState } from 'react';
import List from './List';
import loadData from './loadData';
import Loading from './Loading';
import Nav from './Nav';

function RestaurantsNear(props) {
	const [appState, setAppState] = useState({
		loading: true
	});

	const [query, setQuery] = useState({
		latitude: null,
		longitude: null,
		location: 'new york',
		categories: 'restaurants'
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				setAppState({loading: false});
		    	setQuery({latitude: position.coords.latitude, longitude: position.coords.longitude, categories: query.categories});
	    	},
		    function(error) {
		    	setAppState({loading: false});
		    	setQuery({location: 'new york', categories: query.categories});
		    }
	    );
	}, [setAppState]);

	const handleSubmit = (evt) => {
      evt.preventDefault();
      let val = document.getElementById('search-term').value;
      if(val !== "" && val !== null && val !== " ") {
      	setQuery({location: val, categories: query.categories});
      	console.log(`Submitting Term ${query.term}`);
      } else {
      	alert('Please enter text into the search field!');
      }
  	}

	if(!appState.loading) {
		const ContentLoading = loadData(RestaurantsNearContent, query, false);
		return (
			<div>
				<Nav />
				<div className="header-wrapper">
					<div className="header">
					</div>
					<div className="header-content">
						<h1>Find the Best Restaurants Near You</h1>
						<form onSubmit={handleSubmit}>
							<input 
								type="text" 
								placeholder="Location" 
								id="search-term"
							/>
							<input type="submit" />
						</form>
					</div>
				</div>
				<ContentLoading />
			</div>
		);	
	}
	return (
		<Loading fullscreen={true} />
	);
	
}

function RestaurantsNearContent(props) {
	return (
		<List restaurants={props.data} type="near" />
	);
}

export default RestaurantsNear;