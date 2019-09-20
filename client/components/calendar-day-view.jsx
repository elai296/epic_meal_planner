import React from 'react';
import Header from './header';

function CalendarDayView(props){
  if(props.day){
    const headerText = (<div id={props.date}>{props.month} {props.getDateNumbers()}, {props.year}</div>)
    return (
      <div>
        <Header setView={props.setView} text={headerText}/>
        <div className="container textFont mt-5">
          <div className="row justify-content-center">
            <button className="btn btn-secondary" onClick={props.changeView}>Week View</button>
          </div>
            <div className="row justify-content-center my-5">
              <div className="card col-4 mealTitle mx-2 text-center px-auto">
                Breaksfast
              </div>
              <div className="card col-6 mealRecipe mx-2 text-center">
                <div onClick={() => {
                  if (props.meal[props.mealObj.breakfast].recipe_id){
                    props.recipeLink(props.meal[props.mealObj.breakfast].recipe_label);
                  }
                }} >{props.meal[props.mealObj.breakfast].recipe_label}</div>
              </div>
            </div>
            <div className="row justify-content-center my-5">
              <div className="card col-4 mealTitle mx-2 text-center">
                Lunch
              </div>
              <div className="card col-6 mealRecipe mx-2 text-center">
                <div onClick={() => {
                  if (props.meal[props.mealObj.lunch].recipe_id) {
                    props.recipeLink(props.meal[props.mealObj.lunch].recipe_label);
                  }
                }} >{props.meal[props.mealObj.lunch].recipe_label}</div>
              </div>
            </div>
            <div className="row justify-content-center my-5">
              <div className="card col-4 mealTitle mx-2 text-center">
                Dinner
              </div>
              <div className="card col-6 mealRecipe mx-2 text-center">
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
    return (<div>Nothing to load.</div>)
  }
}

export default CalendarDayView;
