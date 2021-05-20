import React from 'react';
import './style.css';

const Paragraph = (props) => {
  return(
    <p className="menu__paragraph">{props.text}</p>
  );
};

export default Paragraph;