import React from 'react';
import './style.css';

const Button = ({children, className, type}) => {
  return (
    <button title='botao' type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;