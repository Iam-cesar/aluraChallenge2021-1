import React from 'react';
import './style.css';

const Img = ({image, className}) => {
  return(
    <div className={className}>{image}</div>
  );
};

export default Img