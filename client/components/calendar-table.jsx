import React from 'react';
import Calendar from './calendar';

function CalendarTable(props){
  console.log('meals in CalendarTable:  ', props.meal);
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
          <th scope="row" onClick={props.changeView} className={props.setDate(0)} id="0">Sun<br /> {(props.setDate(0))[8]}{(props.setDate(0))[9]}</th>
          <td className={props.meal[0].highlight ? "breakfast table-active" : "breakfast"} onClick={props.handleClick}>{props.meal[0].label}</td>
          <td className={props.meal[1].highlight ? "lunch table-active" : "lunch"} onClick={props.handleClick}>{props.meal[1].label}</td>
          <td className={props.meal[2].highlight ? "dinner table-active" : "dinner"} onClick={props.handleClick}>{props.meal[2].label}</td>
        </tr>
        <tr>
          <th scope="row" onClick={props.changeView} className={props.setDate(1)} id="1">Mon<br /> {(props.setDate(1))[8]}{(props.setDate(1))[9]} </th>
          <td className={props.meal[3].highlight ? "breakfast table-active" : "breakfast"} onClick={props.handleClick}>{props.meal[3].label}</td>
          <td className={props.meal[4].highlight ? "lunch table-active" : "lunch"} onClick={props.handleClick}>{props.meal[4].label}</td>
          <td className={props.meal[5].highlight ? "dinner table-active" : "dinner"} onClick={props.handleClick}>{props.meal[5].label}</td>
        </tr>
        <tr>
          <th scope="row" onClick={props.changeView} className={props.setDate(2)} id="2">Tues<br /> {(props.setDate(2))[8]}{(props.setDate(2))[9]} </th>
          <td className={props.meal[6].highlight ? "breakfast table-active" : "breakfast"} onClick={props.handleClick}>{props.meal[6].label}</td>
          <td className={props.meal[7].highlight ? "lunch table-active" : "lunch"} onClick={props.handleClick}>{props.meal[7].label}</td>
          <td className={props.meal[8].highlight ? "dinner table-active" : "dinner"} onClick={props.handleClick}>{props.meal[8].label}</td>
        </tr>
        <tr>
          <th scope="row" onClick={props.changeView} className={props.setDate(3)} id="3">Wed<br /> {(props.setDate(3))[8]}{(props.setDate(3))[9]} </th>
          <td className={props.meal[9].highlight ? "breakfast table-active" : "breakfast"} onClick={props.handleClick}>{props.meal[9].label}</td>
          <td className={props.meal[10].highlight ? "lunch table-active" : "lunch"} onClick={props.handleClick}>{props.meal[10].label}</td>
          <td className={props.meal[11].highlight ? "dinner table-active" : "dinner"} onClick={props.handleClick}>{props.meal[11].label}</td>
        </tr>
        <tr>
          <th scope="row" onClick={props.changeView} className={props.setDate(4)} id="4">Thurs<br /> {(props.setDate(4))[8]}{(props.setDate(4))[9]} </th>
          <td className={props.meal[12].highlight ? "breakfast table-active" : "breakfast"} onClick={props.handleClick}>{props.meal[12].label}</td>
          <td className={props.meal[13].highlight ? "lunch table-active" : "lunch"} onClick={props.handleClick}>{props.meal[13].label}</td>
          <td className={props.meal[14].highlight ? "dinner table-active" : "dinner"} onClick={props.handleClick}>{props.meal[14].label}</td>
        </tr>
        <tr>
          <th scope="row" onClick={props.changeView} className={props.setDate(5)} id="5">Fri<br />{(props.setDate(5))[8]}{(props.setDate(5))[9]}</th>
          <td className={props.meal[15].highlight ? "breakfast table-active" : "breakfast"} onClick={props.handleClick}>{props.meal[15].label}</td>
          <td className={props.meal[16].highlight ? "lunch table-active" : "lunch"} onClick={props.handleClick}>{props.meal[16].label}</td>
          <td className={props.meal[17].highlight ? "dinner table-active" : "dinner"} onClick={props.handleClick}>{props.meal[17].label}</td>
        </tr>
        <tr>
          <th scope="row" onClick={props.changeView} className={props.setDate(6)} id="6">Sat<br />{(props.setDate(6))[8]}{(props.setDate(6))[9]}</th>
          <td className={props.meal[18].highlight ? "breakfast table-active" : "breakfast"} onClick={props.handleClick}>{props.meal[18].label}</td>
          <td className={props.meal[19].highlight ? "lunch table-active" : "lunch"} onClick={props.handleClick}>{props.meal[19].label}</td>
          <td className={props.meal[20].highlight ? "dinner table-active" : "dinner"} onClick={props.handleClick}>{props.meal[20].label}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default CalendarTable;
