import React from 'react';
import List from './List';
import loadData from './loadData';
import {Link} from "react-router-dom";

function SearchRestaurants(props) {
	const ContentLoading = loadData(SearchRestaurantsContent, {location: 'new york', term: 'Balthazar'});
	
	return (
		<ContentLoading />
	);	
}

function SearchRestaurantsContent(props) {
	return (
		<div>
			<nav>
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
			<div className="header-wrapper">
				<div className="header">
				</div>
				<div className="header-content">
					<h1>Find the Best Restaurants Near You</h1>
					<input type="text" placeholder="Search" />
				</div>
			</div>
			<List restaurants={props.data} type="search" />
		</div>
	);
}

export default SearchRestaurants;