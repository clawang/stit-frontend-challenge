import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function searchYelp(queries, location) {
	const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
    	const locationSearched = 'new york';
	    const apiUrl = `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`;
	    axios.get(apiUrl, {
	      headers: {
	        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
	      },
	      params: {
	       categories: 'breakfast_brunch'
	      }
	    })
	      .then((res) => {
	        console.log(res.data.businesses);
	        setBusinesses(res.data.businesses);
	      });
	  }, [queries]);

    return businesses;
}