import './feedPage.css';
import Nav from '../nav/nav';
import SearchForm from '../search/search';
import properties from "../../properties.json";
import Results from "../results/results";
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import FavoriteList from '../favorite/favoriteList';


function FeedPage() {
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (book) => {
    setFavorites([...favorites, book]);
  };

  useEffect(() => {
    // Save favorites to local storage whenever it changes
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    // Load favorites from local storage on component mount
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const handleSearch = (criteria) => {
    const filtered = properties.filter((property) => {
      return (
        (criteria.type === "" || property.type === criteria.type) &&
        (criteria.minPrice === "" ||
          property.price >= parseInt(criteria.minPrice)) &&
        (criteria.maxPrice === "" ||
          property.price <= parseInt(criteria.maxPrice)) &&
        (criteria.minBedrooms === "" ||
          property.bedrooms >= parseInt(criteria.minBedrooms)) &&
        (criteria.maxBedrooms === "" ||
          property.bedrooms <= parseInt(criteria.maxBedrooms)) &&
        (criteria.dateAdded === "" ||
          new Date(property.dateAdded) >= new Date(criteria.dateAdded)) &&
        (criteria.postcode === "" ||
          property.postcode.startsWith(criteria.postcode))
      );
    });
    setResults(filtered);
  };

  return (
    <div className="App">
      <Nav/>
      <SearchForm onSearch={handleSearch}/>
      <Results properties={results} handleAddToFavorites={handleAddToFavorites} />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/favorite" element={<FavoriteList />} />
      </Routes>
    </div>
  );
}

export default FeedPage;
