import React from "react";

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mealInput: "",
      pushToCalendar: [],
      meal: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.getMeal = this.getMeal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick(){
    console.log("this was clicked", event);
    console.log("date", event.path[1].textContent);
    console.log("mealType", event.srcElement.className);
    this.getMeal(event);
    //className="table-active" use to highlight box on click
  }
  getMeal(event){
    fetch(`/API/dummy-meal-items.json`)
    .then(response => response.json())
    .then(data => {
      let counter = 0;
      while(counter < data.meals.length){
        if (event.path[1].textContent === data.meals[counter].date){
          this.setState({ meal: data.meals[counter].label });
        }
        counter++;
      }
    })
  }
  handleChange(){
    this.setState({
      mealInput: event.target.value
    });
  }
  handleSubmit() {
    event.preventDefault();
  }
  componentDidMount(){
    // GET fetch call to retrieve the calendar data (mealName, date, mealType);
    // this.getMeal();
  }
  render(){
    return (
      <div>
        <h3 className="text-center">September, 2019</h3>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th scope="col"><i className="fas fa-utensils fa-2x"></i></th>
              <th scope="col">Breakfast</th>
              <th scope="col">Lunch</th>
              <th scope="col">Dinner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="2019-09-08" >2019-09-08</th>
              <td className="breakfast" onClick={this.handleClick}>{this.state.meal}</td>
              <td className="lunch" onClick={this.handleClick}></td>
              <td className="dinner" onClick={this.handleClick}></td>
            </tr>
            <tr>
              <th scope="row" className="2019-09-09">2019-09-09</th>
              <td className="breakfast" onClick={this.handleClick}></td>
              <td className="lunch" onClick={this.handleClick}></td>
              <td className="dinner" onClick={this.handleClick}></td>
            </tr>
            <tr>
              <th scope="row" className="2019-09-10">2019-09-10</th>
              <td className="breakfast" onClick={this.handleClick}></td>
              <td className="lunch" onClick={this.handleClick}></td>
              <td className="dinner" onClick={this.handleClick}></td>
            </tr>
            <tr>
              <th scope="row" className="2019-09-11">2019-09-11</th>
              <td className="breakfast" onClick={this.handleClick}></td>
              <td className="lunch" onClick={this.handleClick}></td>
              <td className="dinner" onClick={this.handleClick}></td>
            </tr>
            <tr>
              <th scope="row" className="2019-09-12">2019-09-12</th>
              <td className="breakfast" onClick={this.handleClick}></td>
              <td className="lunch" onClick={this.handleClick}></td>
              <td className="dinner" onClick={this.handleClick}></td>
            </tr>
            <tr>
              <th scope="row" className="2019-09-13">2019-09-13</th>
              <td className="breakfast" onClick={this.handleClick}></td>
              <td className="lunch" onClick={this.handleClick}></td>
              <td className="dinner" onClick={this.handleClick}></td>
            </tr>
            <tr>
              <th scope="row" className="2019-09-14">2019-09-14</th>
              <td className="breakfast" onClick={this.handleClick}></td>
              <td className="lunch" onClick={this.handleClick}></td>
              <td className="dinner" onClick={this.handleClick}></td>
            </tr>
          </tbody>
        </table>
        <form className="form-inline text-align-center" onSubmit={this.handleSubmit}>
          <div className="form-group mx-sm-3 mb-2 mr-2 ml-5">
              <input required onChange={this.handleChange} type="text" className="form-control" placeholder="Add Meal" />
          </div>
              <button type="submit" className="btn btn-primary mb-2">Add</button>
        </form>
        <button type="submit" className="btn btn-primary mb-2 mr-2 ml-5">Previous Week</button>
        <button type="submit" className="btn btn-primary mb-2 ml-4">Next Week</button>
      </div>
    );
  }
}

export default Calendar;
