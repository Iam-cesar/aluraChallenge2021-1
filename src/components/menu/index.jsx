import React from 'react';
import './style.css';

const Menu = (props) => {
  return(
    <div className="menu__container">
      {props.children}
    </div>
  );
};

export default Menu;