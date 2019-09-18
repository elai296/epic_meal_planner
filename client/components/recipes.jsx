import React from 'react';
import Header from './header';

function Recipes(props){
  return (
    <div className="container">
      <Header setView={props.setView} text="Recipes"/>
      <div
        onClick={
          () => {
            props.setView("recipesCategoriesList", {}, '');
            props.setCategory("Vegan");
          }}>Vegan</div>
      <div
        onClick={
          () => {
            props.setView("recipesCategoriesList", {}, '');
            props.setCategory("Keto");
          }}>Keto</div>
      <div>Vegan</div>
      <div>Paleo</div>
    </div>
  );
}

export default Recipes;
