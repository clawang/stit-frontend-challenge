import React from 'react';
import {Link} from "react-router-dom";

function Nav(props) {
	return (
		<nav className={props.color === 'white' ? "map-nav" : ""}>
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
	);
}

export default Nav;