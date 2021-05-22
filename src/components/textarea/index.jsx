import React from 'react';
import './style.css';

const TextArea = ({className, placeholder}) => {
  return(
    <textarea className={className} placeholder={placeholder} />
  );
};

export default TextArea;