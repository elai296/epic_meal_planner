import React from 'react';

function ShoppingListItem(props) {
  const item = props.oneItem;
  // console.log("props.one item are ", props.oneItem)
  // console.log("item props are ", props)

  console.log('props are ', props.deleteItem)

  if(item.is_completed === "0"){
    item.is_completed = false
    // toggle = item.is_completed
  } else if(item.is_completed === "1"){
    item.is_completed = true
    // toggle = item.is_completed
  }
  // console.log("toggle is ", toggle)
  // console.log(" ischecked is" , item.is_completed)
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          type="checkbox"
          checked={item.is_completed}
          className="form-check-input"
          onChange={() => props.toggleChecked(item.id)}/>
        <label>
          {props.oneItem.ingredients_desc}
        </label>

        <button className="btn" onClick={()=> props.deleteItem(item.id)}>x</button>

      </div>
    </li>
  );
}

export default ShoppingListItem;
