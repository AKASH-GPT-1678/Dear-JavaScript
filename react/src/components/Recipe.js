import React from "react";
import IngredientsList from "./Ingredientlist.js";
import Instructions from "./Instrutions.js";
function Recipe({ name, ingredients, steps }) {
 return (
 <section id={name.toLowerCase().replace(/ /g, "-")}>
 <h1>{name}</h1>
 <IngredientsList list={ingredients} />
 <Instructions title="Cooking Instructions" steps={steps} />
 </section>
 );
}
export default Recipe;