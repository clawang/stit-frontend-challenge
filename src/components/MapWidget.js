/*global google*/

import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import youAreHere from '../marker.png';
import customIcon from '../pin.png';

function MapWidget(props) {
	const mapStyles = {
	  width: '100%',
	  height: '100%',
	};

	const displayMarkers = props.points.map((store, index) => {
	    return <Marker key={index} id={index} position={{
	       lat: store.coordinates.latitude,
	       lng: store.coordinates.longitude
	    }} 
	    icon={{
	      url: customIcon,
	      scaledSize: new google.maps.Size(24,33)
	  	}} />
	});

	const mapStyle = [
	    {
	        "featureType": "administrative",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#444444"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#f2f2f2"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#efefef"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 45
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#ffbd83"
	            },
	            {
	                "saturation": "-16"
	            },
	            {
	                "lightness": "48"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "lightness": "31"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#46bcec"
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#8ad1c5"
	            },
	            {
	                "saturation": "-33"
	            },
	            {
	                "lightness": "55"
	            }
	        ]
	    }
	]

	 const _mapLoaded = (mapProps, map) => {
	    map.setOptions({
	       styles: mapStyle
	    })
	 }

    return (
        <Map
          google={props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{ lat: props.latitude, lng: props.longitude}} 
          onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
        >
        	<Marker
        		key={1234}
			    name={'Your location'}
			    position={{ lat: props.latitude, lng: props.longitude}}
			    icon={{
			      url: youAreHere,
			      scaledSize: new google.maps.Size(24,24)
			  	}} 
		 	 />
        	{displayMarkers}
        </Map>
    );

}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`
})(MapWidget);