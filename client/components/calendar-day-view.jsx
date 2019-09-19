import React from 'react';
import Header from './header';

function CalendarDayView(props){
  if(props.day){
    const headerText = (<div className="text-center" id={props.date}>{props.month} {props.getDateNumbers()}, {props.year}</div>)

    return (
      <div>
        <Header setView={props.setView} text={headerText}/>

           <button className="btn btn-primary weekView" onClick={props.changeView}>Week View</button>
      
           <div className="row justify-content-center">
            <div className="col-2 mealTitle">
              Breakfast
            </div>
            <div className="col-6 mealRecipe ">
              <div>{props.meal[props.mealObj.breakfast].recipe_label}</div>
            </div>
          </div>
           <div className="row justify-content-center">
            <div className="col-2 mealTitle">
              Lunch
            </div>
            <div className="col-6 mealRecipe">
               <div>{props.meal[props.mealObj.lunch].recipe_label}</div>
            </div>
          </div>

           <div className="row justify-content-center">
            <div className="col-2 mealTitle">
              Dinner
            </div>
            <div className="col-6 mealRecipe">
              <div>{props.meal[props.mealObj.dinner].recipe_label}</div>
            </div>
      
          </div>

        


      </div>
    );
  } else {
    return (<div>Nothing to load</div>)
  }
}

export default CalendarDayView;
