import React from 'react';
import Menu from './menu';

function Header(props) {
  return (
    <div className="container">
      <div className="header row justify-content-end mx-3 mt-5 mb-1">
        <div className="headerTextMenu mx-2 align-self-center">{ props.text }</div>
        <Menu setView={ props.setView }/>
      </div>
    </div>
  );
}

export default Header;
