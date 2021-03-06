import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';

function loadData(Component, queries, fullscreen, id) {
  return function WihLoadingComponent({ isLoading, ...props }) {
	const [appState, setAppState] = useState({
		loading: true,
		data: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		queries.limit = 18;
		console.log(queries);
		const apiUrl = id ? `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${id}` : `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`;
		axios.get(apiUrl, {
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
			},
			params: queries
		})
		.then((res) => {
			let obj = res.data.businesses || res.data;
			setAppState({ loading: false, data: obj});
		});
	}, [setAppState]);

    if (!appState.loading) return <Component {...props} data={appState.data} />;
    return (
      <Loading fullscreen={fullscreen}/>
    );
  };
}

export default loadData;