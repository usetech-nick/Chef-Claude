import React from "react";
import "./Main.css";
import { FaTrash } from "react-icons/fa";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [currentInput, setCurrentInput] = React.useState("");
  const [recipes, setRecipes] = React.useState([]);

  function handleGetRecipes() {
    if (ingredients.length === 0) return;

    const ingredientNames = ingredients.map((item) => item.name);

    fetch("http://localhost:4000/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: ingredientNames }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.recipes) {
          setRecipes(data.recipes);
        } else {
          console.error("No recipes found:", data);
        }
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedInput = currentInput.trim();
    if (trimmedInput === "") return;

    const newIngredient = {
      id: Date.now(),
      name: trimmedInput,
    };

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    setCurrentInput("");
  }

  function handleDelete(id) {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient.id !== id)
    );
  }

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient.id} className="ingredient-item">
      {ingredient.name}
      <button
        className="delete-button"
        onClick={() => handleDelete(ingredient.id)}
        aria-label={`Delete ${ingredient.name}`}
      >
        <FaTrash />
      </button>
    </li>
  ));

  return (
    <main>
      <div className="main-container">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="ingredient"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            className="input-text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
          />
          <button className="button" type="submit">
            Add ingredient
          </button>
        </form>
      </div>
      <ul className="items">{ingredientsListItems}</ul>
      <button className="button" onClick={handleGetRecipes}>
        Get Recipes
      </button>

      <ul className="recipe-list">
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe}</li>
        ))}
      </ul>
    </main>
  );
}
