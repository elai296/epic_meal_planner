import React from 'react';
import Header from './header';

function Recipes(props){
  return (
    <div>
      <Header setView={props.setView} text="Recipes"/>
      <div className="container mt-5">
        <div
          onClick={
            () => {
              props.setView("recipesCategoriesList", {}, '');
              props.setCategory("favorites");
            }}>Favorites</div>
        <div
          onClick={
          () => {
            props.setView("recipesCategoriesList", {}, '');
          props.setCategory("vegan");
          }}>Vegan</div>
        <div
          onClick={
            () => {
          props.setView("recipesCategoriesList", {}, '');
          props.setCategory("keto");}}>Keto</div>
        <div
          onClick={
            () => {
              props.setView("recipesCategoriesList", {}, '');
              props.setCategory("paleo");
            }}>Paleo</div>
        <div
          onClick={
            () => {
              props.setView("recipesCategoriesList", {}, '');
              props.setCategory("dairy-free");
            }}>Dairy-Free</div>
        <div
          onClick={
            () => {
              props.setView("recipesCategoriesList", {}, '');
              props.setCategory("gluten-free");
            }}>Gluten-Free</div>
      </div>
    </div>
  );
}

export default Recipes;
