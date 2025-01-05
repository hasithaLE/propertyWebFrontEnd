// FavoriteList.js
import React from 'react';

const FavoriteList = ({ favorites }) => {
  return (
    <div>
      <h2>Favorite Properties</h2>
      <ul>
        {favorites.map((property) => (
          <li key={property.title}>{property.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
