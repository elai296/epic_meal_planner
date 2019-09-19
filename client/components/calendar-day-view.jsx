import React from 'react';
import Header from './header';

function CalendarDayView(props){
  if(props.day){
    const headerText = (<div className="text-center" id={props.date}>{props.month} {props.getDateNumbers()}, {props.year}</div>)

    return (
      <div>
        <Header setView={props.setView} text={headerText}/>
        <button className="btn btn-link" onClick={props.changeView}>Week View</button>
           <div className="row justify-content-center">
            <div className="col-4 mt-5">
              Breaksfast
            </div>
            <div className="col-4">
              <div className="col-md-3 offset-md-3 mb-3" onClick={() => {
                if (props.meal[props.mealObj.breakfast].recipe_id){
                  props.recipeLink(props.meal[props.mealObj.breakfast].recipe_label);
                }
              }} >{props.meal[props.mealObj.breakfast].recipe_label}</div>
            </div>
          </div>
           <div className="row justify-content-center">
            <div className="col-4 mt-5">
              Lunch
            </div>
            <div className="col-4">
            <div className="col-md-3 offset-md-3 mb-3" onClick={() => {
              if (props.meal[props.mealObj.lunch].recipe_id) {
                props.recipeLink(props.meal[props.mealObj.lunch].recipe_label);
              }
            }} >{props.meal[props.mealObj.lunch].recipe_label}</div>
            </div>
          </div>
           <div className="row justify-content-center">
            <div className="col-4 mt-5">
              Dinner
            </div>
            <div className="col-4">
            <div className="col-md-3 offset-md-3 mb-3" onClick={() => {
              if (props.meal[props.mealObj.dinner].recipe_id) {
                props.recipeLink(props.meal[props.mealObj.dinner].recipe_label);
              }
            }} >{props.meal[props.mealObj.dinner].recipe_label}</div>
            </div>
          </div>
      </div>
    );
  } else {
    return (<div>Nothing to load</div>)
  }
}

export default CalendarDayView;
