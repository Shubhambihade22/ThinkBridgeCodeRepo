import React, { useContext, useState } from 'react';
import { RestaurantContext } from '../context/RestaurantContext';

const RestaurantItem = ({ restaurant }) => {
  const { updateRestaurant, deleteRestaurant } = useContext(RestaurantContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(restaurant.name);
  const [description, setDescription] = useState(restaurant.description);
  const [location, setLocation] = useState(restaurant.location);

  const handleUpdate = async () => {
    const updatedRestaurant = { id: restaurant.id, name, description, location };
    await updateRestaurant(restaurant.id, updatedRestaurant);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
          <p>{restaurant.location}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteRestaurant(restaurant.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default RestaurantItem;
