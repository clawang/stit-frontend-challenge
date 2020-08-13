import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from './List';
import loadData from './loadData';
import Header from './Header';
import filledStar from '../star.svg';
import unfilledStar from '../unfilled.svg';
import halfStar from '../halfstar.svg';
import {Link} from "react-router-dom";

let id = "KgpOYAG-r_eDsQXFXt0nnQ";

function RestaurantDetails(props) {
	const ContentLoading = loadData(RestaurantDetailsContent, {}, "KgpOYAG-r_eDsQXFXt0nnQ");

	return (
		<ContentLoading />
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
							{stars.map((type) => <DisplayStar type={type} />)}
							</div>
							<p>{props.data.review_count + " reviews"}</p>
						</div>
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
			<footer>
				<div className='footer'>
					Built{' '}
					<span role='img' aria-label='love'>
					💚
					</span>{' '}
					with by Claire Wang
				</div>
			</footer>
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
		<img src={src[props.type]} />
	);
}

export default RestaurantDetails;