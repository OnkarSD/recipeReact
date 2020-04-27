import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.fortitle}>{title}</h1>
      <img src={image} alt="" className={style.image} />
      <div  className={style.forlist}>
        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>

      <h4>CaloriesGain:</h4>
      <p>{calories.toFixed(2)}</p>
    </div>
  );
};

export default Recipe;
