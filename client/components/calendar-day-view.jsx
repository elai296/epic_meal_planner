import React from 'react';

class DayCalendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: null
    }
  }
  render(){
    return (
      <div>
        <h3 className="text-center">September, 2019</h3>
        <button className="btn btn-link" onClick={() => { this.props.setView('calendar', {}) }}>Week View</button>
        <div className="container d-flex">
          <div className="row">
            <div className="col-md-4 mb-3">Breakfast</div>
            <div className="col-md-4 offset-md-2 mb-3">Lunch</div>
            <div className="col-md-4 offset-md-2 mb-3">Dinner</div>
          </div>
          <div className="row">
            <div className="col-md-3 offset-md-3 mb-3">Burrito</div>
            <div className="col-md-3 offset-md-3 mb-3">Pizza</div>
            <div className="col-md-3 offset-md-3 mb-3">Sushi</div>
          </div>
          {/* <div className="row">
            <div className="col-md-6 offset-md-3">Dinner</div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default DayCalendar;
