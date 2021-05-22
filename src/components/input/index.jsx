import React from 'react';
import './style.css';

const Input = ({typeSubmit, className, placeholder}) => {
  return(
    <input type={typeSubmit} className={className} placeholder={placeholder} />
  );
};

export default Input;