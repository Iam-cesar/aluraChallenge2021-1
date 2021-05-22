import React from 'react';
import './style.css';

const Menu = ({children, className}) => {

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Menu;