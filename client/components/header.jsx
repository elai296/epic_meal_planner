import React from 'react';
import Menu from './menu';

function Header(props) {
  return (
    <div>
      <h1 className="header">{ props.text }</h1>
      <Menu setView={ props.setView }/>
    </div>
  );
}

export default Header;
