import React from "react";
import Header from "./header";

function Recipes(props) {
  let cardStyle = "border border-dark card text-center recipeContainer my-3"
  return (
    <div>
      <Header setView={props.setView} text="Recipes" />
      <div className="container mt-5 d-flex flex-wrap textFont">
          <div
            className={cardStyle}
            onClick={() => {
              props.setView("recipesCategoriesList", {}, "");
              props.setCategory("favorites");
            }}
          >
            Favorites
          </div>
          <div
            className={cardStyle}
            onClick={() => {
              props.setView("recipesCategoriesList", {}, "");
              props.setCategory("vegan");
            }}
          >
            Vegan
          </div>
          <div
            className={cardStyle}
            onClick={() => {
              props.setView("recipesCategoriesList", {}, "");
              props.setCategory("keto");
            }}
          >
            Keto
          </div>
          <div
            className={cardStyle}
            onClick={() => {
              props.setView("recipesCategoriesList", {}, "");
              props.setCategory("paleo");
            }}
          >
            Paleo
          </div>
          <div
            className={cardStyle}
            onClick={() => {
              props.setView("recipesCategoriesList", {}, "");
              props.setCategory("dairy-free");
            }}
          >
            Dairy-Free
          </div>
          <div
            className={cardStyle}
            onClick={() => {
              props.setView("recipesCategoriesList", {}, "");
              props.setCategory("gluten-free");
            }}
          >
            Gluten-Free
          </div>
        </div>
      </div>
  );
}

export default Recipes;
