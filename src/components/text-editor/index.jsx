import React from 'react';
import './style.css';

const textEditor = ({ bgColor }) => {

  return (
    <div style={{ backgroundColor: `${bgColor}`, border: `2rem solid ${bgColor}` }} className="text-editor__container">
      <div className="text-editor__background">
        <div className="text-editor__dots">
          <span className="text-editor__dots-item"></span>
          <span className="text-editor__dots-item"></span>
          <span className="text-editor__dots-item"></span>
        </div>
        <pre className="text-editor__text-codigo-wrapper">
          <code className="text-editor" contentEditable='true' aria-label='editor'></code>
        </pre>
      </div>
    </div>
  );
};

export default textEditor;