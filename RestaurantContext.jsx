import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('/api/restaurants');
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const addRestaurant = async (restaurant) => {
    try {
      const response = await axios.post('/api/restaurants', restaurant);
      setRestaurants([...restaurants, response.data]);
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  const updateRestaurant = async (id, updatedRestaurant) => {
    try {
      await axios.put(`/api/restaurants/${id}`, updatedRestaurant);
      setRestaurants(restaurants.map(r => (r.id === id ? updatedRestaurant : r)));
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  const deleteRestaurant = async (id) => {
    try {
      await axios.delete(`/api/restaurants/${id}`);
      setRestaurants(restaurants.filter(r => r.id !== id));
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
  };

  return (
    <RestaurantContext.Provider value={{ restaurants, addRestaurant, updateRestaurant, deleteRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
