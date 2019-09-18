import React from 'react';
import Menu from './menu';

function Header(props) {
  return (
    <div className="header">
      <h1 className="headerText">{ props.text }</h1>
      <Menu setView={ props.setView }/>
    </div>
  );
}

export default Header;
