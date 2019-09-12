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
      console.log( "mealsToPost with label updated: ", mealsToPost[counter]);
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
        console.log(data)})
    // console.log(data))
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
     this.setState({ meal: weekMeals})
  }
  setDate(){
    var MyDate = new Date();
    var MyDateString;

    MyDate.setDate(MyDate.getDate());
    MyDate.setDate(MyDate.getDate() - 3);// gives us Sunday

    MyDateString = MyDate.getFullYear() + '-'
      + ('0' + MyDate.getDate()).slice(-2) + '-'
      + ('0' + (MyDate.getMonth() + 1)).slice(-2);

    console.log(MyDateString)
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
