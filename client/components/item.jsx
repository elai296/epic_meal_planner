import React from 'react';

function Item(props) {
  const item = props.item;
  const idString = `item${item.id}`;
  const listClass = item.isChecked
    ? 'form-check-label is-completed'
    : 'form-check-label';
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          id={idString}
          type="checkbox"
          checked={item.isChecked}
          className="form-check-input"
          onChange={() => props.toggleChecked(item.id)}/>
        <label className={listClass} htmlFor={idString}>
          { props.item.ingredients_desc }
        </label>
      </div>
    </li>
  );
}

export default Item;
