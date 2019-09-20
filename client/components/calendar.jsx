import React from "react";
import CalendarTable from "./calendar-table";
import CalendarDayView from "./calendar-day-view";
import Header from './header';

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mealInput: "",
      pushToCalendar: [],
      date: this.setDate(),
      day: false
    }
    this.totalOffset = null;
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
    this.handleDetailSubmit = this.handleDetailSubmit.bind(this);
    this.recipeLink = this.recipeLink.bind(this);
  }

  handleClick(){
    if (!event.path[0].textContent) {

      if (this.props.view){
        let counter = 0;
        while (counter < this.state.meal.length) {
          if (this.state.meal[counter].date === event.path[1].firstChild.className && this.state.meal[counter].meal_time === event.srcElement.className) {
            const mealStateCopy = this.state.meal;
            mealStateCopy[counter].highlight = "true";
            mealStateCopy[counter].recipe_id = this.props.recipeId.id;
            this.setState({ meal: mealStateCopy });
            const pushToCalendarCopy = this.state.pushToCalendar;
            pushToCalendarCopy.push(mealStateCopy[counter]);
            this.setState({ pushToCalendar: pushToCalendarCopy });
          }
          counter++;
        }
      } else {
        let counter = 0;
        while (counter < this.state.meal.length) {
          if (this.state.meal[counter].date === event.path[1].firstChild.className && this.state.meal[counter].meal_time === event.srcElement.className) {
            const mealStateCopy = this.state.meal;
            mealStateCopy[counter].highlight = "true";
            this.setState({ meal: mealStateCopy });
            const pushToCalendarCopy = this.state.pushToCalendar;
            pushToCalendarCopy.push(mealStateCopy[counter]);
            this.setState({ pushToCalendar: pushToCalendarCopy });
          }
          counter++;
        }
      }

    }
  }

  handleChange(){
    this.setState({ mealInput: event.target.value });
  }

  handleDetailSubmit(){
    event.preventDefault();
    const mealsToPost = this.state.pushToCalendar;
    let counter = 0;
    const mealPosts = [];
    while (counter < mealsToPost.length) {
      mealsToPost[counter].recipe_label = this.props.recipeId.label.slice(0,15);
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mealsToPost[counter])
      };
      mealPosts.push(fetch('/api/postMeals.php', req)
        .then(res => res.json()))
      counter++;
    }
    Promise.allSettled(mealPosts).then(this.getStoredMeals);
  }

  handleSubmit() {
    event.preventDefault();
    const mealsToPost = this.state.pushToCalendar;
    let counter = 0;
    const mealPosts = [];
    while(counter < mealsToPost.length){
      mealsToPost[counter].recipe_label = this.state.mealInput;
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mealsToPost[counter])
      };
      mealPosts.push(fetch('/api/postMeals.php', req)
        .then(res => res.json()))
      counter++;
    }
    Promise.allSettled(mealPosts).then(this.getStoredMeals);
    event.target.reset();
  }

  componentDidMount(){
    this.getStoredMeals();
    this.setMonthAndYear();
  }

  getStoredMeals(){
    fetch(`/api/getMeals.php`)
      .then(response => response.json())
      .then(data => {
        this.sortDays(data);
    })
    this.setState({
      mealInput: "",
      pushToCalendar: []
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
    this.setMonthAndYear();
    this.setState({ meal: weekMeals})
  }

  setDate(offset){
    const today = new Date();
    const finalDate = new Date(today);
    const currentDate = today.getDate();
    const weekDay = today.getDay();
    let year = finalDate.getFullYear();

    if(offset === 7 || offset === -7){
      finalDate.setDate(currentDate - weekDay + offset + this.totalOffset);
    } else if( offset >= 0 && offset < 7) {
      finalDate.setDate(currentDate - weekDay + offset + this.totalOffset);
    } else {
      finalDate.setDate(currentDate - weekDay);
    }

    let returnDate = year + '-'
      + ('0' + (finalDate.getMonth() + 1)).slice(-2) + '-'
      + ('0' + finalDate.getDate()).slice(-2);

    return returnDate;
  }

  setMonthAndYear(){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthNumeric = "";
    if(this.state.date[5] === "0"){
      monthNumeric = parseInt(this.state.date[6]) - 1;
    } else {
      monthNumeric = parseInt(this.state.date[5] + this.state.date[6]) -1;
    }
    this.monthLiteral = months[monthNumeric];

    const copyDateState = this.state.date;
    this.year = copyDateState.slice(0,4);

  }

  changeWeek(){
    if (event.srcElement.textContent === "Prev") {
        this.setState({ date: this.setDate(-7) })
        this.totalOffset -= 7;
    } else if (event.srcElement.textContent === "Next") {
        this.setState({ date: this.setDate(7) })
        this.totalOffset += 7;
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

  recipeLink(label){
    fetch(`/api/calendar-details.php?q=` + label)
      .then(response => response.json())
      .then(recipes => {
        this.props.setView("recipeDetails", recipes[0])
      });
  }

  render(){
    this.setDate();
    if(!this.state.meal){
      return (
        <div className="loader"></div >
      );
    } else if (this.state.day) {
      return (
          <CalendarDayView
          day={this.state.day}
          changeView={this.changeView}
          month={this.monthLiteral}
          year={this.year}
          date={this.state.date}
          meal={this.state.meal}
          mealObj={this.mealObj}
          getDateNumbers={this.getDateNumbers}
          setView={this.props.setView}
          recipeLink={this.recipeLink} />
      )
    } else if (this.props.view) {
      return (
        <div>
          <div className="calendarHeaderText ml-3">{this.monthLiteral} {this.year}</div>
          <div className="container">
            <CalendarTable
              handleClick={this.handleClick}
              changeView={this.changeView}
              meal={this.state.meal}
              setDate={this.setDate}
              date={this.state.date}
              recipeLink={this.recipeLink} />
            <div className="row justify-content-center">
              <div className="col-4">
                <button type="submit" onClick={this.changeWeek} className="btn btn-secondary ml-3">Prev</button>
              </div>
              <div className="col-4">
                <button onClick={this.handleDetailSubmit} className="btn btn-secondary mb-2 ml-3">Add</button>
              </div>
              <div className="col-4">
                <button type="submit" onClick={this.changeWeek} className="btn btn-secondary ml-3">Next</button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if(this.state.meal){
      const headerText = (<div>{this.monthLiteral} {this.year}</div>);
      return (
        <div>
          <Header setView={this.props.setView} text={headerText}/>
          <div className="container textFont mt-5">
            <CalendarTable
              handleClick={this.handleClick}
              changeView={this.changeView}
              meal={this.state.meal}
              setDate={this.setDate}
              date={this.state.date}
              recipeLink={this.recipeLink} />
            <form className="form-inline text-align-centerborder" onSubmit={this.handleSubmit}>
              <div className="form-group mx-sm-3 mb-2 mr-2 ml-5">
                <input
                maxLength="15"
                required
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Add a meal"/>
              </div>
              <button type="submit" className="btn btn-secondary mb-2">Add</button>
            </form>
            <div className="d-flex justify-content-between">
              <button type="submit" onClick={this.changeWeek} className="btn btn-secondary mb-2 ml-5 float-left">Prev</button>
              <span className="mr-5 px-5 float-right"></span>
              <span className="mr-2 float-right"></span>
              <button type="submit" onClick={this.changeWeek} className="btn btn-secondary mb-2 mr-5 float-right">Next</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Calendar;
