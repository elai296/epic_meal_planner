import React from 'react';
import Header from './header';

function CalendarDayView(props){
  if(props.day){
    const headerText = (<div className="text-center" id={props.date}>{props.month} {props.getDateNumbers()}, {props.year}</div>)
    return (
      <div>
        <Header setView={props.setView} text={headerText}/>
        <div className="container">
          <button className="btn btn-link" onClick={props.changeView}>Week View</button>
          <div class="row justify-content-center">
              <div class="col-4 mt-5">
                Breaksfast
              </div>
              <div class="col-4">
                <div className="col-md-3 offset-md-3 mb-3">{props.meal[props.mealObj.breakfast].recipe_label}</div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-4 mt-5">
                Lunch
              </div>
              <div class="col-4">
                <div className="col-md-3 offset-md-3 mb-3">{props.meal[props.mealObj.lunch].recipe_label}</div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-4 mt-5">
                Dinner
              </div>
              <div class="col-4">
                <div className="col-md-3 offset-md-3 mb-3">{props.meal[props.mealObj.dinner].recipe_label}</div>
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
