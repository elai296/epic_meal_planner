import React from "react";
import ShoppingListItem from "./shopping-list-item";

export default function ShoppingListItemList(props) {
  return (
    <div>
      {props.allItems.map(item => {
        return (
          <ShoppingListItem
            key={item.id}
            oneItem={item}
            deleteItem={props.deleteItem}
            toggleChecked={props.toggleChecked}
          />
        );
      })}
    </div>
  );
}