import React from 'react';
import Header from './header';

function Recipes(props){
  return (
    <div className="container">
      <Header setView={props.setView}/>
      <div
        onClick={
        () => {
         props.setView("categories", {}, '');
         props.setCategory("Vegan");
         }}>Vegan</div>
      <div
        onClick={
        () => { props.setView("categories", {}, '');
        props.setCategory("Keto");}}>Keto</div>
      <div>Vegan</div>
      <div>Paleo</div>
    </div>
  );
}

export default Recipes;
