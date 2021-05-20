import React from 'react';
import './style.css';

const Input = (props) => {
  return(
    <input type={props.typeSubmit} className={props.className} placeholder={props.placeholder} />
  );
};

export default Input;