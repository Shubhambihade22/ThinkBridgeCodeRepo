import React, { useContext } from 'react';
import { RestaurantContext } from '../context/RestaurantContext';
import RestaurantItem from './RestaurantItem';

const RestaurantList = () => {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <div>
      {restaurants.map(restaurant => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
