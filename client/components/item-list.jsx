import React from 'react';
import Item from './item';

function ItemList(props) {
  console.log("item list props are ", props.allItems)
  console.log("toggle checked is ", props.toggleChecked)
  return (
    <ul>
      {props.allItems.map(item => {
        return (
          <Item
            key={item.id}
            oneItem={item}
            deleteItem={props.deleteItem}
            toggleChecked={props.toggleChecked}/>
        );
      })}
    </ul>
  );
}

export default ItemList;
