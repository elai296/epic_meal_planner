import React from 'react';

function ItemList(props) {
  return (
    <ul>
      { props.items.map(item => {
        return (
          <Item/>
        );
      })}
    </ul>
  );
}

export default ItemList;
