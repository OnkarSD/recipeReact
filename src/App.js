import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "6f392563";
  const APP_KEY = "d127e67a2143c2f3c33414a5c27df93b	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          onChange={handleSearch}
          value={search}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map((recipe) => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          key={recipe.recipe.uri}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
      
    </div>
  );
};

export default App;
