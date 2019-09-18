import React from "react";
import CalendarTable from "./calendar-table";
import CalendarDayView from "./calendar-day-view";
import Header from './header';
import { Duplex } from "stream";

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mealInput: "",
      pushToCalendar: [],
      date: this.setDate(),
      day: false
    }
    this.testDate = null;
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
      mealsToPost[counter].recipe_label = this.state.mealInput;
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mealsToPost[counter])
      };
      fetch('/api/postMeals.php', req)
        .then(res => res.json())
        .then(meal => {
          this.setState({ meal })
          console.log("meal:", meal);
        });
      counter++;

    }
    this.setState({
      mealInput: "",
      pushToCalendar: []
    })
    this.getStoredMeals();
  }

  componentDidMount(){
    this.getStoredMeals();
  }

  getStoredMeals(){
    // debugger;
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

    // debugger;
    console.log("data is", data);
    let datePosition = 0;
    while (datePosition < dynamicWeek.length){
      if(copyOfMeal[0]){
        let mealCounter = 0;
        let insert = false;
        while(mealCounter < copyOfMeal.length){
          if (copyOfMeal[mealCounter].date === dynamicWeek[datePosition] && copyOfMeal[mealCounter].meal_time === "breakfast") {
            weekMeals.push(copyOfMeal[mealCounter]);
            insert = true;
          }
          mealCounter++;
        }
        if(!insert){
          weekMeals.push({
            date: dynamicWeek[[datePosition]],
            meal_time: "breakfast",
            recipe_label: ""
          });
        }
        mealCounter = 0;
        insert = false;
        while (mealCounter < copyOfMeal.length) {
          if (copyOfMeal[mealCounter].date === dynamicWeek[datePosition] && copyOfMeal[mealCounter].meal_time === "lunch") {
            weekMeals.push(copyOfMeal[mealCounter]);
            insert = true;
          }
          mealCounter++;
        }
        if (!insert) {
          weekMeals.push({
            date: dynamicWeek[[datePosition]],
            meal_time: "lunch",
            recipe_label: ""
          });
        }
        mealCounter = 0;
        insert = false;
        while (mealCounter < copyOfMeal.length) {
          if (copyOfMeal[mealCounter].date === dynamicWeek[datePosition] && copyOfMeal[mealCounter].meal_time === "dinner") {
            weekMeals.push(copyOfMeal[mealCounter]);
            insert = true;
          }
          mealCounter++;
        }
        if (!insert) {
          weekMeals.push({
            date: dynamicWeek[[datePosition]],
            meal_time: "dinner",
            recipe_label: ""
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
    this.setState({ meal: weekMeals})
  }

  setDate(offset){
    const today = new Date();
    const finalDate = new Date(today);
    const currentDate = today.getDate();
    const weekDay = today.getDay();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    this.year = finalDate.getFullYear();
    let monthNumeric = finalDate.getMonth();
    this.monthLiteral = months[monthNumeric];
    if(offset === 7 || offset === -7){
      finalDate.setDate(currentDate - weekDay + offset + this.testDate);
    } else if( offset >= 0 && offset < 7) {
      finalDate.setDate(currentDate - weekDay + offset + this.testDate);
    } else {
      finalDate.setDate(currentDate - weekDay);
    }

    let returnDate = this.year + '-'
      + ('0' + (finalDate.getMonth() + 1)).slice(-2) + '-'
      + ('0' + finalDate.getDate()).slice(-2);

    return returnDate;
  }

  changeWeek(){
    if (event.srcElement.textContent === "Previous Week"){
      this.setState({ date: this.setDate(-7) })
      this.testDate -=7;
    } else if (event.srcElement.textContent === "Next Week"){
      this.setState({ date: this.setDate(7) })
      this.testDate += 7;
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
    console.log("props: ", this.props);
    if(!this.state.meal){
      return (
        <div>Loading</div>
      );
    } else if (this.state.day) {
      return (
        <React.Fragment>
          <Header setView={this.props.setView}/>
          <CalendarDayView
          day={this.state.day}
          changeView={this.changeView}
          month={this.monthLiteral}
          year={this.year}
          date={this.state.date}
          meal={this.state.meal}
          mealObj={this.mealObj}
          getDateNumbers={this.getDateNumbers} />
        </React.Fragment>
      )
    } else if (this.props.view) {
      return (
        <div>
          <Header setView={this.props.setView} />
          <h3 className="text-center">{this.monthLiteral}, {this.year}</h3>
          <CalendarTable
            handleClick={this.handleClick}
            changeView={this.changeView}
            meal={this.state.meal}
            setDate={this.setDate}
            date={this.state.date} />
          <form className="form-inline text-align-center" onSubmit={this.handleSubmit}>
            <button type="submit" className="btn btn-primary mb-2">Add</button>
          </form>
          <button type="submit" onClick={this.changeWeek} className="btn btn-primary mb-2 mr-2 ml-5">Previous Week</button>
          <button type="submit" onClick={this.changeWeek} className="btn btn-primary mb-2 ml-4">Next Week</button>
        </div>
      );
    } else if(this.state.meal){
      return (
        <div>
          <Header setView={this.props.setView}/>
          <h3 className="text-center">{this.monthLiteral}, {this.year}</h3>
          <CalendarTable
          handleClick={this.handleClick}
          changeView={this.changeView}
          meal={this.state.meal}
          setDate={this.setDate}
          date={this.state.date}/>
          <form className="form-inline text-align-center" onSubmit={this.handleSubmit}>
            <div className="form-group mx-sm-3 mb-2 mr-2 ml-5">
              <input
              required
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="Add Meal" />
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
