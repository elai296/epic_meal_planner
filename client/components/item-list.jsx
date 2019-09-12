import React from 'react';
import Item from './item';

function ItemList(props) {
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
