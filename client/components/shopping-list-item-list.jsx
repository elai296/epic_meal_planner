import React from 'react';
import ShoppingListItem from './shopping-list-item';

function ShoppingListItemList(props) {
  console.log("item list props are ", props.allItems)
  console.log("toggle checked is ", props.toggleChecked)
  return (
    <ul>
      {props.allItems.map(item => {
        return (
          <ShoppingListItem
            key={item.id}
            oneItem={item}
            deleteItem={props.deleteItem}
            toggleChecked={props.toggleChecked}/>
        );
      })}
    </ul>
  );
}

export default ShoppingListItemList;
