import React from 'react';
import Item from './item';

function ItemList(props) {
  console.log(props);
  console.log(props.items);
  return (
    <ul>
      { props.items.map(item => {
        return (
          <Item
            key={item.id}
            item={item}
            toggleChecked={props.toggleChecked}/>
        );
      })}
    </ul>
  );
}

export default ItemList;
