import React, { useEffect, useState } from 'react';
import loadData from './loadData';
import filledStar from '../star.svg';
import unfilledStar from '../unfilled.svg';
import halfStar from '../halfstar.svg';
import {Link} from "react-router-dom";
import Loading from './Loading';

let id = "KgpOYAG-r_eDsQXFXt0nnQ";

function RestaurantDetails(props) {
	const [appState, setAppState] = useState({
		latitude: null,
		longitude: null,
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
		const ContentLoading = loadData(RestaurantDetailsContent, {}, id);
		return (
			<ContentLoading lat={appState.latitude} long={appState.longitude} />
		);	
	}
	return (
		<Loading />
	);
}

function RestaurantDetailsContent(props) {
	let stars = [];
	let filled = Math.floor(props.data.rating);
	for(let i = 0; i < filled; i++) {
		stars.push('filled');
	}
	let half = 0;
	if(props.data.rating % 1 !== 0) {
		stars.push('half');
		half = 1;
	} 
	let unfilled = 5 - filled - half;
	for(let i = 0; i < unfilled; i++) {
		stars.push('unfilled');
	}

	const calcDistance = () => {
		let lat = props.data.coordinates.latitude;
		let long = props.data.coordinates.longitude;
		let x = Math.abs(lat - props.lat);
		let y = Math.abs(long - props.long);
		return Math.round(Math.sqrt(x*x + y*y) * 6900) /100;
	}
	
	return (
		<div className="restaurant-details">
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
			<div className="header-wrapper" style={{'backgroundImage':'url(' + props.data.image_url +')'}}>
			</div>
			<div className="container">
				<div className="details-wrapper">
					<div className="details-left">
						<h1>{props.data.name}</h1>
						<div className="details">
							<div className="star-container">
							{stars.map((type, index) => <DisplayStar type={type} key={index} />)}
							</div>
							<p>{props.data.review_count + " reviews"}</p>
						</div>
						{props.lat ? <p>{calcDistance()} mi away</p> : ""}
					</div>
					<div className="details-right">
						<div className="address">
							<h3>Address</h3>
							<p>{props.data.location.display_address[0]}</p>
							<p>{props.data.location.display_address[1]}</p>
						</div>
						<div className="phone">
							<h3>Phone</h3>
							<p>{props.data.display_phone}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function DisplayStar(props) {
	const src = {
		'filled': filledStar,
		'unfilled': unfilledStar,
		'half': halfStar
	};
	return (
		<img src={src[props.type]} alt="restaurant" />
	);
}

export default RestaurantDetails;