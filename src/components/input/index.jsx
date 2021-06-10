import React from 'react';
import './style.css';

const Input = ({typeSubmit, className, placeholder ,value}) => {
  return(
    <input type={typeSubmit} className={className} placeholder={placeholder} defaultValue={value}></input>
  );
};

export default Input;