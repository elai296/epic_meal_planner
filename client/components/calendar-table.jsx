import React from 'react';
import Calendar from './calendar';

function CalendarTable(props){
  return (
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
          <th scope="row" className="2019-09-08" >Sun<br /> 08</th>
          <td className={props.meal[0].highlight ? "breakfast table-active" : "breakfast"} onClick={props.handleClick}>{props.meal[0].label}</td>
          <td className={props.meal[1].highlight ? "lunch table-active" : "lunch"} onClick={props.handleClick}>{props.meal[1].label}</td>
          <td className={props.meal[2].highlight ? "dinner table-active" : "dinner"} onClick={props.handleClick}>{props.meal[2].label}</td>
        </tr>
        <tr>
          <th scope="row" className="2019-09-09">Mon<br />09</th>
          <td className={props.meal[3].highlight ? "breakfast table-active" : "breakfast"} onClick={props.handleClick}>{props.meal[3].label}</td>
          <td className={props.meal[4].highlight ? "lunch table-active" : "lunch"} onClick={props.handleClick}>{props.meal[4].label}</td>
          <td className={props.meal[5].highlight ? "dinner table-active" : "dinner"} onClick={props.handleClick}>{props.meal[5].label}</td>
        </tr>
        <tr>
          <th scope="row" className="2019-09-10">Tues<br />10</th>
          <td className={props.meal[6].highlight ? "breakfast table-active" : "breakfast"} onClick={props.handleClick}>{props.meal[6].label}</td>
          <td className={props.meal[7].highlight ? "lunch table-active" : "lunch"} onClick={props.handleClick}>{props.meal[7].label}</td>
          <td className={props.meal[8].highlight ? "dinner table-active" : "dinner"} onClick={props.handleClick}>{props.meal[8].label}</td>
        </tr>
        <tr>
          <th scope="row" className="2019-09-11">Wed<br />11</th>
          <td className={props.meal[9].highlight ? "breakfast table-active" : "breakfast"} onClick={props.handleClick}>{props.meal[9].label}</td>
          <td className={props.meal[10].highlight ? "lunch table-active" : "lunch"} onClick={props.handleClick}>{props.meal[10].label}</td>
          <td className={props.meal[11].highlight ? "dinner table-active" : "dinner"} onClick={props.handleClick}>{props.meal[11].label}</td>
        </tr>
        <tr>
          <th scope="row" className="2019-09-12">Thurs<br />12</th>
          <td className={props.meal[12].highlight ? "breakfast table-active" : "breakfast"} onClick={props.handleClick}>{props.meal[12].label}</td>
          <td className={props.meal[13].highlight ? "lunch table-active" : "lunch"} onClick={props.handleClick}>{props.meal[13].label}</td>
          <td className={props.meal[14].highlight ? "dinner table-active" : "dinner"} onClick={props.handleClick}>{props.meal[14].label}</td>
        </tr>
        <tr>
          <th scope="row" className="2019-09-13">Fri<br />13</th>
          <td className={props.meal[15].highlight ? "breakfast table-active" : "breakfast"} onClick={props.handleClick}>{props.meal[15].label}</td>
          <td className={props.meal[16].highlight ? "lunch table-active" : "lunch"} onClick={props.handleClick}>{props.meal[16].label}</td>
          <td className={props.meal[17].highlight ? "dinner table-active" : "dinner"} onClick={props.handleClick}>{props.meal[17].label}</td>
        </tr>
        <tr>
          <th scope="row" className="2019-09-14">Sat<br />14</th>
          <td className={props.meal[18].highlight ? "breakfast table-active" : "breakfast"} onClick={props.handleClick}>{props.meal[18].label}</td>
          <td className={props.meal[19].highlight ? "lunch table-active" : "lunch"} onClick={props.handleClick}>{props.meal[19].label}</td>
          <td className={props.meal[20].highlight ? "dinner table-active" : "dinner"} onClick={props.handleClick}>{props.meal[20].label}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default CalendarTable;
