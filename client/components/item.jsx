import React from 'react';

function Item(props) {
  const item = props.oneItem;

  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          type="checkbox"
          checked={item.isChecked}
          className="form-check-input"
          onChange={() => props.toggleChecked(item.id)}/>
        <label>
          {props.oneItem.ingredients_desc}
        </label>
        <button className="btn">x</button>
      </div>
    </li>
  );
}

export default Item;
