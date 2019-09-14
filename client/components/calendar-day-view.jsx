import React from 'react';

function DayCalendar(props){
  console.log(props.mealObj);
  if(props.day){
    return (
      <div>
        <h3 className="text-center" id={props.date}>{props.month} {props.getDateNumbers}, {props.year}</h3>
        <button className="btn btn-link" onClick={props.changeView}>Week View</button>
        <div className="container d-flex">
          <div className="row">
            <div className="col-md-4 mb-3">Breakfast</div>
            <div className="col-md-4 offset-md-2 mb-3">Lunch</div>
            <div className="col-md-4 offset-md-2 mb-3">Dinner</div>
          </div>
          <div className="row">
            <div className="col-md-3 offset-md-3 mb-3">{props.meal[props.mealObj.breakfast].label}</div>
            <div className="col-md-3 offset-md-3 mb-3">{props.meal[props.mealObj.lunch].label}</div>
            <div className="col-md-3 offset-md-3 mb-3">{props.meal[props.mealObj.dinner].label}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (<div>Nothing to load</div>)
  }
}


export default DayCalendar;
