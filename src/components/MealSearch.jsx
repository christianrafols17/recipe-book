import React, { useState, useEffect } from 'react';

function MealSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const API_KEY = '1'; // Replace with your TheMealDB API key

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/${API_KEY}/search.php?s=${searchTerm}`
        );

        if (response.ok) {
          const data = await response.json();
          setSearchResults(data.meals);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setSearchResults([]);
      }
    };

    if (searchTerm) {
      fetchMeals();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for meals..."
        value={searchTerm}
        onChange={handleInputChange}
      />

		<ul>
		{searchResults &&
			searchResults.length > 0 ? (
			searchResults.map((meal) => (
				<li key={meal.idMeal}>{meal.strMeal}</li>
			))
			) : (
			<li>No matching meals found.</li>
			)
		}
		</ul>
    </div>
  );
}

export default MealSearch;
