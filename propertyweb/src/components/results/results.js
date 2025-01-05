import React from "react";
import "./results.css";

function Results({ properties, handleAddToFavorites }) {
  return (
    <div className="results-container">
      {properties.map((property) => (
        <div key={property.id} className="property-card">
          {/* Property Image */}
          <div className="property-image">
            <img src={property.images[0]} alt={property.shortDescription} />
          </div>

          {/* Property Details */}
          <div className="property-details">
            <h2 className="property-title">{property.shortDescription}</h2>
            <p className="property-location">{property.location}</p>
            <div className="property-features">
              <span>
                <i className="fas fa-bed"></i> {property.bedrooms} Bedrooms
              </span>
              <span>
                <i className="fas fa-bath"></i> {property.bathrooms} Bathrooms
              </span>
              <span>
                <i className="fas fa-home"></i> {property.type}
              </span>
            </div>
            <p className="property-price">£{property.price} pcm</p>

            {/* Actions */}
            <div className="property-actions">
              <button className="contact-btn">View More</button>
              <button className="save-btn" onClick={() => handleAddToFavorites(property)}>Save Fav</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
