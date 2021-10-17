import React from 'react';
import './style.css';

const TextArea = ({ className, placeholder, children }) => {
  return (
    <textarea
      className={className}
      placeholder={placeholder}
      defaultValue={children}
    ></textarea>
  );
};

export default TextArea;
