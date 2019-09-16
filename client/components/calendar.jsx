import React from "react";
import CalendarTable from "./calendar-table";
import DayCalendar from "./calendar-day-view";

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mealInput: "",
      pushToCalendar: [],
      date: "2019-09-08",
      day: false
    }
    this.testDate = 8;
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getStoredMeals = this.getStoredMeals.bind(this);
    this.setDate = this.setDate.bind(this);
    this.sortDays = this.sortDays.bind(this);
    this.changeWeek = this.changeWeek.bind(this);
    this.changeView = this.changeView.bind(this);
    this.getDayOfWeek = this.getDayOfWeek.bind(this);
    this.getDateNumbers = this.getDateNumbers.bind(this);
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
    let counter = 0;
    const dynamicWeek = [];
    while(counter < 7){
      if(counter === 0){
        dynamicWeek.push(this.state.date)
      } else {
        dynamicWeek.push(this.setDate(counter));
      }
      counter++;
    }
    let mealPosition = 0;
    let datePosition = 0;
    while (datePosition < dynamicWeek.length){
      if(copyOfMeal[mealPosition]){
        if (copyOfMeal[mealPosition].date === dynamicWeek[datePosition] && copyOfMeal[mealPosition].meal_time === "breakfast") {
          weekMeals.push(copyOfMeal[mealPosition]);
          mealPosition++;
        } else {
          weekMeals.push({
            date: dynamicWeek[[datePosition]],
            meal_time: "breakfast",
            label: ""
          });
        }
        if (copyOfMeal[mealPosition].date === dynamicWeek[datePosition] && copyOfMeal[mealPosition].meal_time === "lunch") {
          weekMeals.push(copyOfMeal[mealPosition]);
          mealPosition++;
        } else {
          weekMeals.push({
            date: dynamicWeek[[datePosition]],
            meal_time: "lunch",
            label: ""
          });
        }
        if (copyOfMeal[mealPosition].date === dynamicWeek[datePosition] && copyOfMeal[mealPosition].meal_time === "dinner") {
          weekMeals.push(copyOfMeal[mealPosition]);
          mealPosition++;
        } else {
          weekMeals.push({
            date: dynamicWeek[[datePosition]],
            meal_time: "dinner",
            label: ""
          });
        }
      } else {
        weekMeals.push({
          date: dynamicWeek[[datePosition]],
          meal_time: "breakfast",
          label: ""
        });
        weekMeals.push({
          date: dynamicWeek[[datePosition]],
          meal_time: "lunch",
          label: ""
        });
        weekMeals.push({
          date: dynamicWeek[[datePosition]],
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
    // debugger;
    const today = new Date(2019, 8, this.testDate);
    const finalDate = new Date(today);
    const currentDate = today.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.year = today.getFullYear();
    let monthNumeric = today.getMonth();
    this.monthLiteral = months[monthNumeric];
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
    this.getStoredMeals();
  }
  changeView(event){
    if(!this.state.day){
      this.setState({ day: true });
      this.getDayOfWeek(event);

    } else {
      this.setState({ day: false });
      this.getDayOfWeek(event);
    }
  }
  getDateNumbers(){
    if(this.mealObj.breakfast === 0){
      let date = (this.state.date[8]) + (this.state.date[9]);
      return date;
    } else {
      let date = (this.setDate(parseInt(this.clickedId)))[8] + (this.setDate(parseInt(this.clickedId)))[9];
      return date;
    }
  }
  getDayOfWeek(event){
    this.clickedId = event.currentTarget.id;
    switch(this.clickedId){
      case "0":
        this.mealObj = {
          breakfast: 0,
          lunch: 1,
          dinner: 2
        }
      break;
      case "1":
        this.mealObj = {
          breakfast: 3,
          lunch: 4,
          dinner: 5
        }
      break;
      case "2":
        this.mealObj = {
          breakfast: 6,
          lunch: 7,
          dinner: 8
        }
      break;
      case "3":
        this.mealObj = {
          breakfast: 9,
          lunch: 10,
          dinner: 11
        }
      break;
      case "4":
        this.mealObj = {
          breakfast: 12,
          lunch: 13,
          dinner: 14
        }
      break;
      case "5":
        this.mealObj = {
          breakfast: 15,
          lunch: 16,
          dinner: 17
        }
      break;
      case "6":
        this.mealObj = {
          breakfast: 18,
          lunch: 19,
          dinner: 20
        }
      break;
    }
  }
  render(){

    this.setDate();
    if(!this.state.meal){
      return (
        <div>Loading</div>
      );
    } else if (this.state.day) {
      return (
        <DayCalendar
        day={this.state.day}
        changeView={this.changeView}
        month={this.monthLiteral}
        year={this.year}
        date={this.state.date}
        meal={this.state.meal}
        mealObj={this.mealObj}
        getDateNumbers={this.getDateNumbers} />
      )
    } else if(this.state.meal){
      return (
        <div>
          <h3 className="text-center">{this.monthLiteral}, {this.year}</h3>
          <CalendarTable
          handleClick={this.handleClick}
          changeView={this.changeView}
          meal={this.state.meal}
          setDate={this.setDate}
          date={this.state.date}/>
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
