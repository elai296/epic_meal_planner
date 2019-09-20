import React from 'react';
import Calendar from './calendar';

function CalendarTable(props){
  return (
    <table className="table table-bordered text-center table-light">
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
          <td className={props.meal[0].highlight ? "breakfast table-active" : "breakfast"} onClick={() => {
            if (!props.meal[0].recipe_id && !props.meal[0].recipe_label){
              props.handleClick();
            } else if (props.meal[0].recipe_id) {
              props.recipeLink(props.meal[0].recipe_label);
            }
          }}>{props.meal[0].recipe_label}</td>
          <td className={props.meal[1].highlight ? "lunch table-active" : "lunch"} onClick={() => {
            if (!props.meal[1].recipe_id && !props.meal[1].recipe_label) {
              props.handleClick();
            } else if (props.meal[1].recipe_id) {
              props.recipeLink(props.meal[1].recipe_label);
            }
          }}>{props.meal[1].recipe_label}</td>
          <td className={props.meal[2].highlight ? "dinner table-active" : "dinner"} onClick={() => {
            if (!props.meal[2].recipe_id && !props.meal[2].recipe_label) {
              props.handleClick();
            } else if (props.meal[2].recipe_id) {
              props.recipeLink(props.meal[2].recipe_label);
            }
          }}>{props.meal[2].recipe_label}</td>
        </tr>
        <tr>
          <th scope="row" onClick={props.changeView} className={props.setDate(1)} id="1">Mon<br /> {(props.setDate(1))[8]}{(props.setDate(1))[9]} </th>
          <td className={props.meal[3].highlight ? "breakfast table-active" : "breakfast"} onClick={() => {
            if (!props.meal[3].recipe_id && !props.meal[3].recipe_label) {
              props.handleClick();
            } else if (props.meal[3].recipe_id) {
              props.recipeLink(props.meal[3].recipe_label);
            }
          }}>{props.meal[3].recipe_label}</td>
          <td className={props.meal[4].highlight ? "lunch table-active" : "lunch"} onClick={() => {
            if (!props.meal[4].recipe_id && !props.meal[4].recipe_label) {
              props.handleClick();
            } else if (props.meal[4].recipe_id) {
              props.recipeLink(props.meal[4].recipe_label);
            }
          }}>{props.meal[4].recipe_label}</td>
          <td className={props.meal[5].highlight ? "dinner table-active" : "dinner"} onClick={() => {
            if (!props.meal[5].recipe_id && !props.meal[5].recipe_label) {
              props.handleClick();
            } else if (props.meal[5].recipe_id) {
              props.recipeLink(props.meal[5].recipe_label);
            }
          }}>{props.meal[5].recipe_label}</td>
        </tr>
        <tr>
          <th scope="row" onClick={props.changeView} className={props.setDate(2)} id="2">Tues<br /> {(props.setDate(2))[8]}{(props.setDate(2))[9]} </th>
          <td className={props.meal[6].highlight ? "breakfast table-active" : "breakfast"} onClick={() => {
            if (!props.meal[6].recipe_id && !props.meal[6].recipe_label) {
              props.handleClick();
            } else if (props.meal[6].recipe_id) {
              props.recipeLink(props.meal[6].recipe_label);
            }
          }}>{props.meal[6].recipe_label}</td>
          <td className={props.meal[7].highlight ? "lunch table-active" : "lunch"} onClick={() => {
            if (!props.meal[7].recipe_id && !props.meal[7].recipe_label) {
              props.handleClick();
            } else if (props.meal[7].recipe_id) {
              props.recipeLink(props.meal[7].recipe_label);
            }
          }}>{props.meal[7].recipe_label}</td>
          <td className={props.meal[8].highlight ? "dinner table-active" : "dinner"} onClick={() => {
            if (!props.meal[8].recipe_id && !props.meal[8].recipe_label) {
              props.handleClick();
            } else if (props.meal[8].recipe_id) {
              props.recipeLink(props.meal[8].recipe_label);
            }
          }}>{props.meal[8].recipe_label}</td>
        </tr>
        <tr>
          <th scope="row" onClick={props.changeView} className={props.setDate(3)} id="3">Wed<br /> {(props.setDate(3))[8]}{(props.setDate(3))[9]} </th>
          <td className={props.meal[9].highlight ? "breakfast table-active" : "breakfast"} onClick={() => {
            if (!props.meal[9].recipe_id && !props.meal[9].recipe_label) {
              props.handleClick();
            } else if (props.meal[9].recipe_id) {
              props.recipeLink(props.meal[9].recipe_label);
            }
          }}>{props.meal[9].recipe_label}</td>
          <td className={props.meal[10].highlight ? "lunch table-active" : "lunch"} onClick={() => {
            if (!props.meal[10].recipe_id && !props.meal[10].recipe_label) {
              props.handleClick();
            } else if (props.meal[10].recipe_id) {
              props.recipeLink(props.meal[10].recipe_label);
            }
          }}>{props.meal[10].recipe_label}</td>
          <td className={props.meal[11].highlight ? "dinner table-active" : "dinner"} onClick={() => {
            if (!props.meal[11].recipe_id && !props.meal[11].recipe_label) {
              props.handleClick();
            } else if (props.meal[11].recipe_id) {
              props.recipeLink(props.meal[11].recipe_label);
            }
          }}>{props.meal[11].recipe_label}</td>
        </tr>
        <tr>
          <th scope="row" onClick={props.changeView} className={props.setDate(4)} id="4">Thurs<br /> {(props.setDate(4))[8]}{(props.setDate(4))[9]} </th>
          <td className={props.meal[12].highlight ? "breakfast table-active" : "breakfast"} onClick={() => {
            if (!props.meal[12].recipe_id && !props.meal[12].recipe_label) {
              props.handleClick();
            } else if (props.meal[12].recipe_id) {
              props.recipeLink(props.meal[12].recipe_label);
            }
          }}>{props.meal[12].recipe_label}</td>
          <td className={props.meal[13].highlight ? "lunch table-active" : "lunch"} onClick={() => {
            if (!props.meal[13].recipe_id && !props.meal[13].recipe_label) {
              props.handleClick();
            } else if (props.meal[13].recipe_id) {
              props.recipeLink(props.meal[13].recipe_label);
            }
          }}>{props.meal[13].recipe_label}</td>
          <td className={props.meal[14].highlight ? "dinner table-active" : "dinner"} onClick={() => {
            if (!props.meal[14].recipe_id && !props.meal[14].recipe_label) {
              props.handleClick();
            } else if (props.meal[14].recipe_id) {
              props.recipeLink(props.meal[14].recipe_label);
            }
          }}>{props.meal[14].recipe_label}</td>
        </tr>
        <tr>
          <th scope="row" onClick={props.changeView} className={props.setDate(5)} id="5">Fri<br />{(props.setDate(5))[8]}{(props.setDate(5))[9]}</th>
          <td className={props.meal[15].highlight ? "breakfast table-active" : "breakfast"} onClick={() => {
            if (!props.meal[15].recipe_id && !props.meal[15].recipe_label) {
              props.handleClick();
            } else if (props.meal[15].recipe_id) {
              props.recipeLink(props.meal[15].recipe_label);
            }
          }}>{props.meal[15].recipe_label}</td>
          <td className={props.meal[16].highlight ? "lunch table-active" : "lunch"} onClick={() => {
            if (!props.meal[16].recipe_id && !props.meal[16].recipe_label) {
              props.handleClick();
            } else if (props.meal[16].recipe_id) {
              props.recipeLink(props.meal[16].recipe_label);
            }
          }}>{props.meal[16].recipe_label}</td>
          <td className={props.meal[17].highlight ? "dinner table-active" : "dinner"} onClick={() => {
            if (!props.meal[17].recipe_id && !props.meal[17].recipe_label) {
              props.handleClick();
            } else if (props.meal[17].recipe_id) {
              props.recipeLink(props.meal[17].recipe_label);
            }
          }}>{props.meal[17].recipe_label}</td>
        </tr>
        <tr>
          <th scope="row" onClick={props.changeView} className={props.setDate(6)} id="6">Sat<br />{(props.setDate(6))[8]}{(props.setDate(6))[9]}</th>
          <td className={props.meal[18].highlight ? "breakfast table-active" : "breakfast"} onClick={() => {
            if (!props.meal[18].recipe_id && !props.meal[18].recipe_label) {
              props.handleClick();
            } else if (props.meal[18].recipe_id) {
              props.recipeLink(props.meal[18].recipe_label);
            }
          }}>{props.meal[18].recipe_label}</td>
          <td className={props.meal[19].highlight ? "lunch table-active" : "lunch"} onClick={() => {
            if (!props.meal[19].recipe_id && !props.meal[19].recipe_label) {
              props.handleClick();
            } else if (props.meal[19].recipe_id) {
              props.recipeLink(props.meal[19].recipe_label);
            }
          }}>{props.meal[19].recipe_label}</td>
          <td className={props.meal[20].highlight ? "dinner table-active" : "dinner"} onClick={() => {
            if (!props.meal[20].recipe_id && !props.meal[20].recipe_label) {
              props.handleClick();
            } else if (props.meal[20].recipe_id) {
              props.recipeLink(props.meal[20].recipe_label);
            }
          }}>{props.meal[20].recipe_label}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default CalendarTable;
