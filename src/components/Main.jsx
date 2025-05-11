import React from "react"

export default function Main() {

  const [ingredients, setIngredients] = React.useState([])


  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }


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
          />
          <button className="button">Add ingredient</button>
        </form>
      </div>
      <ul className="items">
        {ingredientsListItems}
      </ul>
    </main>
  )
}