import React from 'react';
import {Link} from "react-router-dom";

const List = (props) => {
  const { restaurants } = props;

  if (!restaurants || restaurants.length === 0) return <p>No restaurants, sorry</p>;

  const headlines = {
    near: 'Restaurants in',
    search: 'Search results for'
  }

  const term = {
    near: restaurants[0].location.city,
    search: 'Balthazar'
  }

  return (
    <div className="container">
      <h2 className='list-head'>{headlines[props.type]} <span className="location">{term[props.type]}</span></h2>
      <div className="restaurant-wrapper">
        {restaurants.map((restaurant) => {
          return (
            <ListItem res={restaurant} key={restaurant.id}/>
          );
        })}
        </div>
    </div>
  );
};

const ListItem = (props) => {
  const newTo = { 
    pathname: "/details", 
    id: props.res.id
  };
  return(
    <div className="restaurant-card-wrapper">
      <Link to={newTo}>
        <div className="restaurant-card">
          <div className="restaurant-card-img">
            <img src={props.res.image_url} alt={props.res.name} />
          </div>
          <div className="restaurant-card-text">
            <p className="cuisine">{props.res.categories[0].title}</p>
            <h3>{props.res.name}</h3>
            <div className="restaurant-details">
              <p>{props.res.location.address1}</p>
              <p>{props.res.price}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default List;