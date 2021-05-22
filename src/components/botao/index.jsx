import React from 'react';
import './style.css';

const Button = ({children, className}) => {
  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default Button;