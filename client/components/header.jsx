import React from 'react';
import Menu from './menu';

function Header(props) {
  return (
    <div className="header">
      <h3 className="headerText">{ props.text }</h3>
      <Menu setView={ props.setView }/>
    </div>
  );
}

export default Header;
