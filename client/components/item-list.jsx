import React from 'react';

function ItemList(props) {
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
