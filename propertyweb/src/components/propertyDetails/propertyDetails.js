import React from "react";
import { useParams } from "react-router-dom";
import properties from "../../properties.json";

function PropertyDetails() {
  const { id } = useParams(); // Get the property ID from the URL
  const property = properties.find((prop) => prop.id === parseInt(id)); // Find the property by ID

  if (!property) {
    return <div>Property not found!</div>;
  }

  return (
    <div className="property-details">
      <h1>{property.shortDescription}</h1>
      <div className="property-images">
        {property.images.map((image, index) => (
          <img key={index} src={image} alt={`Property image ${index + 1}`} />
        ))}
      </div>
      <p>Type: {property.type}</p>
      <p>Price: £{property.price}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Date Added: {property.dateAdded}</p>
      <p>Postcode: {property.postcode}</p>
      <p>{property.longDescription}</p>
    </div>
  );
}

export default PropertyDetails;
