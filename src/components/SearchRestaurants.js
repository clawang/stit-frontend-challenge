import React, {useState, useEffect} from 'react';
import List from './List';
import loadData from './loadData';
import Nav from './Nav';
import Loading from './Loading';

function SearchRestaurants(props) {
	const [appState, setAppState] = useState({
		loading: true
	});

	const [query, setQuery] = useState({
		latitude: null,
		longitude: null,
		location: null,
		term: 'balthazar'
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				setAppState({loading: false});
		    	setQuery({latitude: position.coords.latitude, longitude: position.coords.longitude, term: query.term});
	    	},
		    function(error) {
		    	setAppState({loading: false});
		    	setQuery({location: 'new york', term: query.term});
		    }
	    );
	}, [setAppState]);

	const handleSubmit = (evt) => {
      evt.preventDefault();
      let val = document.getElementById('search-term').value;
      if(val !== "" && val !== null && val !== " ") {
      	setQuery({term: val, location: query.location, latitude: query.latitude, longitude: query.longitude});
      	console.log(`Submitting Term ${query.term}`);
      } else {
      	alert('Please enter text into the search field!');
      }
  	}

  	if(!appState.loading) {
		const ContentLoading = loadData(SearchRestaurantsContent, query, false);
		
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
								placeholder="Search" 
								id="search-term"
							/>
							<input type="submit" />
						</form>
					</div>
				</div>
				<ContentLoading term={query.term} />
			</div>
		);	
	}

	return (
		<Loading fullscreen={true} />
	);
}

function SearchRestaurantsContent(props) {
	return (
		<List restaurants={props.data} type="search" term={props.term} />
	);
}

export default SearchRestaurants;