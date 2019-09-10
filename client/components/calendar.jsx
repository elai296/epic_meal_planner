import React from "react";

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mealInput: "",
      pushToCalendar: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(){
    this.setState({
      mealInput: event.target.value
    });
  }
  handleSubmit() {

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
              <th scope="row">Sun<br/>8</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Mon<br />9</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Tues<br />10</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Wed<br />11</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Thurs<br />12</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Fri<br />13</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Sat<br />14</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <form className="form-inline text-align-center" onSubmit={this.handleSubmit}>
          <div class="form-group mx-sm-3 mb-2 mr-2 ml-5">
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
