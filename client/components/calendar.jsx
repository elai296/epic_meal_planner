import React from "react";
import CalendarTable from "./calendar-table";

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mealInput: "",
      pushToCalendar: [],
      date: "2019-09-08"
    }
    this.testDate = 8;
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setDate = this.setDate.bind(this);
    this.changeWeek = this.changeWeek.bind(this);
  }
  handleClick(){
    if (!event.path[0].textContent) {
      let counter = 0;
      while(counter < this.state.meal.length){
        if (this.state.meal[counter].date === event.path[1].firstChild.className && this.state.meal[counter].meal_time === event.srcElement.className){
          const mealStateCopy = this.state.meal;
          mealStateCopy[counter].highlight = "true";
          this.setState({ meal: mealStateCopy});
          const pushToCalendarCopy = this.state.pushToCalendar;
          pushToCalendarCopy.push(mealStateCopy[counter]);
          this.setState({ pushToCalendar: pushToCalendarCopy});
        }
        counter++;
      }
    }
  }
  handleChange(){
    this.setState({ mealInput: event.target.value });
  }
  handleSubmit() {
    event.preventDefault();
    const mealsToPost = this.state.pushToCalendar;
    let counter = 0;
    while(counter < mealsToPost.length){
      mealsToPost[counter].label = this.state.mealInput;
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mealsToPost[counter])
      };
      fetch('/API/(need endpoint from back end)', req)
        .then(res => res.json())
        .then(meal => {this.setState({ meal })});
      counter++;
    }
    this.setState({
      mealInput: "",
      pushToCalendar: []
    })
  }
  componentDidMount(){
    this.getStoredMeals();
  }
  getStoredMeals(){
    fetch(`/api/getMeals.php`)
      .then(response => response.json())
      .then(data => {
        this.sortDays(data);
    })
  }
   sortDays(data){
    const copyOfMeal = data;
    const weekMeals = [];
    const week = ["2019-09-08", "2019-09-09", "2019-09-10", "2019-09-11", "2019-09-12", "2019-09-13", "2019-09-14"];
    let mealPosition = 0;
    let datePosition = 0;
    while(datePosition < week.length){
      if(copyOfMeal[mealPosition]){
        if (copyOfMeal[mealPosition].date === week[datePosition] && copyOfMeal[mealPosition].meal_time === "breakfast") {
          weekMeals.push(copyOfMeal[mealPosition]);
          mealPosition++;
        } else {
          weekMeals.push({
            date: week[[datePosition]],
            meal_time: "breakfast",
            label: ""
          });
        }
        if (copyOfMeal[mealPosition].date === week[datePosition] && copyOfMeal[mealPosition].meal_time === "lunch") {
          weekMeals.push(copyOfMeal[mealPosition]);
          mealPosition++;
        } else {
          weekMeals.push({
            date: week[[datePosition]],
            meal_time: "lunch",
            label: ""
          });
        }
        if (copyOfMeal[mealPosition].date === week[datePosition] && copyOfMeal[mealPosition].meal_time === "dinner") {
          weekMeals.push(copyOfMeal[mealPosition]);
          mealPosition++;
        } else {
          weekMeals.push({
            date: week[[datePosition]],
            meal_time: "dinner",
            label: ""
          });
        }
      } else {
        weekMeals.push({
          date: week[[datePosition]],
          meal_time: "breakfast",
          label: ""
        });
        weekMeals.push({
          date: week[[datePosition]],
          meal_time: "lunch",
          label: ""
        });
        weekMeals.push({
          date: week[[datePosition]],
          meal_time: "dinner",
          label: ""
        });
      }
      datePosition++;
    }
    this.setState({ date: this.setDate()})
     this.setState({ meal: weekMeals})
  }
  setDate(offset){
    const today = new Date(2019, 8, this.testDate);
    const finalDate = new Date(today);
    const currentDate = today.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.year = today.getFullYear();
    let monthNumeric = today.getMonth();
    this.monthLiteral = months[monthNumeric];
    console.log(this.monthLiteral);
    if(offset === 7 || offset === -7){
      finalDate.setDate(currentDate + offset);
      this.testDate += offset;
    } else if( offset >= 0 && offset < 7) {
      finalDate.setDate(currentDate + offset);
    } else {
      finalDate.setDate(currentDate);
    }

    const date = finalDate.toISOString();
    let returnDate = date.slice(0, 10);
    return returnDate;
  }
  changeWeek(){
    if (event.srcElement.textContent === "Previous Week"){
      this.setState({ date: this.setDate(-7) })
    } else if (event.srcElement.textContent === "Next Week"){
      this.setState({ date: this.setDate(7) })
    }
  }
  render(){
    this.setDate();
    if(!this.state.meal){
      return (
        <div>Loading</div>
      );
    } else if(this.state.meal){
      return (
        <div>
          <h3 className="text-center">{this.monthLiteral}, {this.year}</h3>
          <CalendarTable handleClick={this.handleClick} meal={this.state.meal} setDate={this.setDate} date={this.state.date}/>
          <form className="form-inline text-align-center" onSubmit={this.handleSubmit}>
            <div className="form-group mx-sm-3 mb-2 mr-2 ml-5">
              <input required onChange={this.handleChange} type="text" className="form-control" placeholder="Add Meal" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Add</button>
          </form>
          <button type="submit" onClick={this.changeWeek} className="btn btn-primary mb-2 mr-2 ml-5">Previous Week</button>
          <button type="submit" onClick={this.changeWeek} className="btn btn-primary mb-2 ml-4">Next Week</button>
        </div>
      );
    }
  }

}

export default Calendar;
