import React from 'react';
import Header from './header';

function CalendarDayView(props){
  if(props.day){
    const headerText = (<div className="text-center" id={props.date}>{props.month} {props.getDateNumbers()}, {props.year}</div>)
    return (
      <div>
        <Header setView={props.setView} text={headerText}/>
        <div className="container">
        <button className="btn btn-secondary weekView" onClick={props.changeView}>Week View</button>
           <div className="row justify-content-center">
            <div className="card col-4 mealTitle">
              Breaksfast
            </div>
            <div className="card col-6 mealRecipe">
              <div onClick={() => {
                if (props.meal[props.mealObj.breakfast].recipe_id){
                  props.recipeLink(props.meal[props.mealObj.breakfast].recipe_label);
                }
              }} >{props.meal[props.mealObj.breakfast].recipe_label}</div>
            </div>
          </div>
           <div className="row justify-content-center">
            <div className="card col-4 mealTitle">
              Lunch
            </div>
            <div className="card col-6 mealRecipe">
            <div onClick={() => {
              if (props.meal[props.mealObj.lunch].recipe_id) {
                props.recipeLink(props.meal[props.mealObj.lunch].recipe_label);
              }
            }} >{props.meal[props.mealObj.lunch].recipe_label}</div>
            </div>
          </div>
           <div className="row justify-content-center">
            <div className="card col-4 mealTitle">
              Dinner
            </div>
            <div className="card col-6 mealRecipe">
            <div onClick={() => {
              if (props.meal[props.mealObj.dinner].recipe_id) {
                props.recipeLink(props.meal[props.mealObj.dinner].recipe_label);
              }
            }} >{props.meal[props.mealObj.dinner].recipe_label}</div>
            </div>
          </div>
          </div>
      </div>
    );
  } else {
    return (<div>Nothing to load</div>)
  }
}

export default CalendarDayView;
