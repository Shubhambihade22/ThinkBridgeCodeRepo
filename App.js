import React from 'react';
import RestaurantProvider from './context/RestaurantContext';
import RestaurantList from './components/RestaurantList';
import AddRestaurant from './components/AddRestaurant';

const App = () => {
  return (
    <RestaurantProvider>
      <div className="container">
        <AddRestaurant />
        <RestaurantList />
      </div>
    </RestaurantProvider>
  );
};

export default App;
