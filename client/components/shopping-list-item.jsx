import React from 'react';

function ShoppingListItem(props) {
  const item = props.oneItem;
  const deleteButtonStyle = {
    color: "red",
    fontWeight: "bold"
  };

  if (item.is_completed === "0"){
    item.is_completed = false
  } else if (item.is_completed === "1"){
    item.is_completed = true
  }

  return (
    <li className="list-group-item">
      <div className="form-check d-flex align-items-center">
        <input
          type="checkbox"
          checked={item.is_completed}
          className="form-check-input"
          onChange={() => props.toggleChecked(item.id)}/>
        <label className="mt-2 flex-fill pl-1 pt-2">
          {props.oneItem.ingredients_desc}
        </label>
        <button className="btn float-right" style={deleteButtonStyle} onClick={()=> props.deleteItem(item.id)}>x</button>
      </div>
    </li>
  );
}

export default ShoppingListItem;
