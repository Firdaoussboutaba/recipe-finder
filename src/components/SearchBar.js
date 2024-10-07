import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');  
  const [recipes, setRecipes] = useState([]);  
  const [errorMessage, setErrorMessage] = useState('');  

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();

      if (data.meals) {
        setRecipes(data.meals);  
        setErrorMessage('');  
      } else {
        setRecipes([]);  
        setErrorMessage('No recipes found, please try another search.');  
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');  
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
     
      <form onSubmit={handleSearch} className="flex shadow-md">
       
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
          className="p-2 rounded-l-lg bg-white text-gray-800 outline-none"
          style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }} 
        />
        
       
        <button
          type="submit"
          className="p-2 bg-[#A5A58D] text-white rounded-r-lg hover:bg-[#6B705C] transition-colors"
          style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}
        >
          Search
        </button>
      </form>

 
      {errorMessage && (
        <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
      )}

      <div className="recipe-list mt-4">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-item p-4 border rounded mb-2">
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-32 h-32 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
