import React from "react";
import CalendarTable from "./calendar-table";

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mealInput: "",
      pushToCalendar: [],
      test: "test"
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getStoredMeals = this.getStoredMeals.bind(this);
    this.sortDays = this.sortDays.bind(this);
  }
  handleClick(){
    // console.log("this was clicked", event);
    // console.log("date", event.path[1].firstChild.className);
    // console.log("mealTime", event.srcElement.className);
    // console.log("text-content ", event.path[0].textContent);
    //className="table-active" use to highlight box onclick
    //{ props.meal[0]."Breakfast table-active" : "Breakfast"}
    if (event.path[0].textContent) {
      console.log("meal already added");
    } else {
      let counter = 0;
      while(counter < this.state.meal.length){
        if (this.state.meal[counter].date === event.path[1].firstChild.className && this.state.meal[counter].mealTime === event.srcElement.className){
          console.log("We found it!!! ", this.state.meal[counter].date, " ", this.state.meal[counter].mealTime);
        }
        counter++;
      }
    }
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
    this.getStoredMeals();
  }
  getStoredMeals(){
    fetch(`/API/dummy-meal-items.json`)
      .then(response => response.json())
      .then(data => this.sortDays(data))
  }
   sortDays(data){
    const copyOfMeal = data.meals;
    const weekMeals = [];
    const week = ["2019-09-08", "2019-09-09", "2019-09-10", "2019-09-11", "2019-09-12", "2019-09-13", "2019-09-14"];
    let mealPosition = 0;
    let datePosition = 0;
    while(datePosition < week.length){
        if (copyOfMeal[mealPosition].date === week[datePosition] && copyOfMeal[mealPosition].mealTime === "Breakfast") {
          weekMeals.push(copyOfMeal[mealPosition]);
          mealPosition++;
        } else {
          weekMeals.push({
            date: week[[datePosition]],
            mealTime: "Breakfast",
            label: ""
          });
        }
        if (copyOfMeal[mealPosition].date === week[datePosition] && copyOfMeal[mealPosition].mealTime === "Lunch") {
          weekMeals.push(copyOfMeal[mealPosition]);
          mealPosition++;
        } else {
          weekMeals.push({
            date: week[[datePosition]],
            mealTime: "Lunch",
            label: ""
          });
        }
        if (copyOfMeal[mealPosition].date === week[datePosition] && copyOfMeal[mealPosition].mealTime === "Dinner") {
          weekMeals.push(copyOfMeal[mealPosition]);
          mealPosition++;
        } else {
          weekMeals.push({
            date: week[[datePosition]],
            mealTime: "Dinner",
            label: ""
          });
        }
      datePosition++;
    }
     this.setState({ meal: weekMeals})
  }
  render(){
    if(!this.state.meal){
      return (
        <div>Loading</div>
      );
    } else if(this.state.meal){
      return (
        <div>
          <h3 className="text-center">September, 2019</h3>
          <CalendarTable handleClick={this.handleClick} meal={this.state.meal}/>
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

}

export default Calendar;
